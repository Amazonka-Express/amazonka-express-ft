<script lang="ts">
	import { T } from '@threlte/core';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { interactivity } from '@threlte/extras';
	import type { PositionedBox } from '$alg';
	import { onDestroy, onMount } from 'svelte';
	import { randInt } from 'three/src/math/MathUtils.js';

	interface RawColor {
		r: number;
		g: number;
		b: number;
	}

	function asHex(color: RawColor): string {
		return `#${color.r.toString(16).slice(0, 2)}${color.g.toString(16).slice(0, 2)}${color.b
			.toString(16)
			.slice(0, 2)}`;
	}

	const BOXES_COLORS: RawColor[] = [
		{
			r: 153,
			g: 27,
			b: 27
		},
		{
			r: 127,
			g: 29,
			b: 29
		},
		{
			r: 127,
			g: 29,
			b: 29
		}
	];

	const green = {
		r: 163,
		g: 230,
		b: 53
	};

	interactivity();

	export let isLast: boolean;
	let color = tweened(isLast ? green : BOXES_COLORS[randInt(0, BOXES_COLORS.length - 1)], {
		duration: 200
	});

	let mounted = false;
	onMount(() => (mounted = true));

	function setColor(newColor: any) {
		if (mounted) {
			$color = newColor;
		}
	}

	$: setColor(isLast ? green : BOXES_COLORS[randInt(0, BOXES_COLORS.length - 1)]);

	export let filledBox: PositionedBox;
	const {
		box: { dimensions, weight },
		position
	} = filledBox;

	const paletteThick = 0.05;
	const springY = tweened(position.y + 0.05 + paletteThick * 1.5, {
		duration: 700,
		easing: cubicOut
	});

	const opacity = tweened(0, {
		duration: 2000,
		easing: cubicOut
	});

	const PALLET_THICK = 0.05;
	onMount(() => {
		$springY = position.y + PALLET_THICK * 0.5 + 0.001;
		$opacity = 1;
	});

	onDestroy(() => {
		$springY = position.y + 0.23 + PALLET_THICK * 1.5;
		$opacity = 0;
	});
</script>

<T.Group>
	<T.Mesh position={[position.x, $springY, position.z]} castShadow>
		<T.BoxGeometry
			args={[dimensions.dx - 0.0001, dimensions.dy - 0.001, dimensions.dz - 0.00001, 10]}
		/>
		<T.MeshLambertMaterial color={asHex($color)} transparent opacity={$opacity} />
	</T.Mesh>
	<T.Mesh position={[position.x, $springY, position.z]}>
		<T.BoxGeometry args={[dimensions.dx, dimensions.dy, dimensions.dz + 0.001, 1]} />
		<T.MeshBasicMaterial color="#000000" wireframe transparent opacity={$opacity} />
	</T.Mesh>
</T.Group>
