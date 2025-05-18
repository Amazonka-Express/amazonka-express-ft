<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import Pallet from './Pallet.svelte';
	import { interactivity } from '@threlte/extras';
	import Box from './Box.svelte';
	import type { PositionedBox } from '../../../alg/packing';
	interactivity();

	export let boxes: PositionedBox[];
</script>

<T.PerspectiveCamera makeDefault position={[0, 1.4, -1.7]}
	><OrbitControls enableDamping /></T.PerspectiveCamera
>

<!-- minPolarAngle={Math.PI * (1 / 4)}
maxPolarAngle={Math.PI * (1 / 3)} -->

<T.AmbientLight color="#ffffff" intensity={0.4} />
<T.DirectionalLight color="#ffffff" intensity={0.2} position={[0, 3, 0]} />

<Pallet />

{#each boxes as box, i}
	<Box filledBox={box} isLast={i === boxes.length - 1} />
{/each}
