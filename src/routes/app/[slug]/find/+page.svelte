<script lang="ts" context="module">
	const shelves = [
		{
			x: 0,
			y: 0,
			width: 1,
			height: 3
		},
		{
			x: 1,
			y: 1,
			width: 1,
			height: 3
		},
		{
			x: 2,
			y: 2,
			width: 1,
			height: 3
		},
		{
			x: 3,
			y: 3,
			width: 1,
			height: 3
		},
		{
			x: 4,
			y: 4,
			width: 1,
			height: 3
		},
		{
			x: 4,
			y: 4,
			width: 7,
			height: 3
		},
		{ x: 9, y: 9, width: 16, height: 4 },
		{ x: 10, y: 15, width: 10, height: 3 },
		{ x: 0, y: 20, width: 15, height: 1 },
		{ x: 0, y: 20, width: 15, height: 4 }
	];
	const MAP_SIZE = 50;
	interface Tile {
		x: number;
		y: number;
	}
	const startTile = {
		x: 1,
		y: 0
	};
	const path = [startTile];
	const targetTile = {
		x: 9,
		y: 25
	};
	let fields = new Array(MAP_SIZE * MAP_SIZE).fill(true);
	for (const shelf of shelves) {
		for (let i = 0; i < shelf.height; ++i) {
			for (let j = 0; j < shelf.width; ++j) {
				fields[(shelf.x + j) * MAP_SIZE + (shelf.y + i)] = false;
			}
		}
	}
	function heuristic(a: Tile, b: Tile) {
		return (
			Math.abs(targetTile.x - b.x) +
			Math.abs(targetTile.y - b.y) -
			Math.abs(targetTile.x - a.x) -
			Math.abs(targetTile.y - a.y)
		);
	}
	function getPath() {
		let tiles = [{ ...startTile, length: 1 }];
		while (tiles.length) {
			let next = tiles.pop()!;
			path.push(next);
			path.length = next.length;
			if (next.x == targetTile.x && next.y == targetTile.y) {
				console.log(path);
				return;
			}
			const nexts = [
				{
					x: next.x,
					y: next.y - 1
				},
				{
					x: next.x - 1,
					y: next.y
				},
				{
					x: next.x,
					y: next.y + 1
				},
				{
					x: next.x + 1,
					y: next.y
				}
			]
				.filter(({ x, y }) => {
					if (x < 0 || y < 0 || x === MAP_SIZE || y === MAP_SIZE) {
						return false;
					}
					const notVisited = fields[x * MAP_SIZE + y];
					fields[x * MAP_SIZE + y] = false;
					return notVisited;
				})
				.sort(heuristic);
			tiles.push(...nexts.map(({ x, y }) => ({ x, y, length: next.length + 1 })));
		}
	}
	getPath();
	console.log(path);
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../../../../shared/Button.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const orderID = data.id;
	let idx = 1;
	let paths = path.slice(0, idx);
	onMount(() => {
		const interval = setInterval(() => {
			idx++;
			paths = path.slice(0, idx);
			if (idx === path.length) {
				clearInterval(interval);
			}
		}, 90);
		return () => clearInterval(interval);
	});
</script>

<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" class="p-8">
	{#each shelves as { height, width, x, y }}
		<rect
			width={width * 2}
			height={height * 2}
			x={x * 2}
			y={y * 2}
			rx="0.5"
			ry="0.5"
			class="fill-gray-500"
		/>
	{/each}
	{#each paths as { x, y }}
		<circle cx={x * 2 + 1} cy={y * 2 + 1} r="0.8" class="fill-rose-800" />
	{/each}
	<circle cx={targetTile.y + 6} cy={targetTile.y * 2 - 1} r="0.9" class="fill-green-600" />
</svg>

<a href="arrange" class="absolute right-8 bottom-16">
	<Button style="grow basis-0 h-10  px-8">go arrange</Button>
</a>
