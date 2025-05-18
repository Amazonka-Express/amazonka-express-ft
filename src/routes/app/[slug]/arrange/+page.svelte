<script lang="ts">
	import Button from '../../../../shared/Button.svelte';
	import { Canvas } from '@threlte/core';
	import Scene from '../../pallete/Scene.svelte';
	import { SAMPLE_FILLED_PACKING_AREA, normalize } from '../../../../alg/packing';
	import { fromNormalizedToSvelte } from '../../pallete/utils';
	import Truck from '../../../../shared/Truck.svelte';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	let palletIdx = 0;
	let boxIdx = 0;
	$: boxes = fromNormalizedToSvelte(
		normalize(SAMPLE_FILLED_PACKING_AREA.palettes[palletIdx])
	).boxes;

	$: box = boxes[boxIdx - 1]?.data;
	$: slicedBoxes = boxes.slice(0, boxIdx);

	export let data: PageData;
	const orderID = data.id;
</script>

<div class="flex flex-col gap-5 w-5/6 pt-3 mx-auto">
	<Truck
		{palletIdx}
		on:pallete-clicked={({ detail: newPalletIdx }) => {
			boxIdx = 0;
			palletIdx = newPalletIdx;
		}}
	/>
	<section class="flex flex-col">
		<div
			class="flex flex-col bg-gray-800 shadow-inner shadow-gray-700 border-rose-800 border-x-2 border-t-4 rounded-t-2xl w-full h-96"
		>
			<Canvas>
				<Scene on:box-clicked boxes={slicedBoxes} />
			</Canvas>
		</div>

		{#if boxIdx !== 0}
			<div
				class="grid grid-cols-3 row-span-3 h-32 p-4 gap-2 bg-gradient-to-tl from-gray-900 to-gray-800 w-full border-rose-800 border-2 border-b-4 rounded-b-xl shadow-inner shadow-gray-700 justify-items-start items-baseline"
			>
				<div class="flex gap-4 col-span-3 justify-self-start">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 16 16"
						class="h-8 w-8 text-rose-600"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
						/></svg
					>
					<div class="">
						<h3 class="text-rose-600 text-[0.7rem]">Reference ID</h3>
						<p class="text-white text-sm">{box.refID}</p>
					</div>
				</div>

				<div class=" ">
					<h3 class="text-rose-600 text-[0.55rem]">Packager</h3>
					<p class="text-gray-300 text-[0.7rem]">{box.packager}</p>
				</div>

				<div class=" ">
					<h3 class="text-rose-600 text-[0.55rem]">From</h3>
					<p class="text-gray-300 text-[0.7rem]">{box.from}</p>
				</div>
				<div class=" ">
					<h3 class="text-rose-600 text-[0.55rem]">Destination</h3>
					<p class="text-gray-300 text-[0.7rem]">{box.to}</p>
				</div>
			</div>
		{:else}
			<div
				class="h-32 bg-gradient-to-tl from-gray-900 to-gray-800 w-full border-rose-800 border-2 border-b-4 rounded-b-xl shadow-inner shadow-gray-700"
			/>
		{/if}
	</section>
	<div class="flex gap-5 w-full">
		<Button
			disabled={boxIdx === 0 && palletIdx === 0}
			on:click={() => {
				if (boxIdx === 0) {
					if (palletIdx > 0) {
						--palletIdx;
						boxIdx = SAMPLE_FILLED_PACKING_AREA.palettes[palletIdx].boxes.length - 1;
					}
				} else {
					--boxIdx;
				}
			}}
			style="grow basis-0 h-10">previous</Button
		>
		<Button
			on:click={() => {
				if (boxIdx < boxes.length) {
					++boxIdx;
				} else {
					if (palletIdx === SAMPLE_FILLED_PACKING_AREA.palettes.length - 1) {
						goto(`../${orderID}/load`);
					} else {
						boxIdx = 0;
						++palletIdx;
					}
					palletIdx;
				}
			}}
			style="grow basis-0 h-10"
			>{boxIdx === boxes.length && palletIdx === SAMPLE_FILLED_PACKING_AREA.palettes.length - 1
				? 'start packing'
				: 'next'}</Button
		>
	</div>
	<div class="w-full p-4" />
</div>
