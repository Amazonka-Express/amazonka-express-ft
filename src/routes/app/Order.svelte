<script lang="ts">
	export let done: boolean;
	export let orderID: string;
	export let boxesNum: number;
</script>

{#if done}
	<div
		class=" bg-rose-600 shadow-rose-700 rounded-md p-4 grid grid-cols-2 grid-rows-2 h-32 self-baseline w-full shadow-lg"
	>
		<div class="flex items-baseline gap-2 col-span-1">
			<h3 class="bg-clip-text text-transparent bg-gradient-to-tl text-md from-gray-800 to-gray-700">
				Order ID
			</h3>

			<p class="text-white text-lg">{orderID}</p>
		</div>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-12 h-12 row-span-2 self-center justify-self-center text-white"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
			/>
		</svg>

		<div class="flex flex-col w-fit">
			<h3 class="bg-clip-text text-transparent bg-gradient-to-tl text-sm from-gray-800 to-gray-700">
				Number of Boxes
			</h3>

			<p class="text-gray-300 ml-auto">{boxesNum}</p>
		</div>

		<div />
	</div>
{:else}
	<div
		class=" bg-green-600 shadow-green-700 shadow-lg rounded-md p-4 grid grid-cols-2 grid-rows-2 h-32 self-baseline w-full"
	>
		<div class="flex items-baseline gap-2 col-span-1">
			<h3 class="bg-clip-text text-transparent bg-gradient-to-tl text-md from-gray-800 to-gray-700">
				Order ID
			</h3>

			<p class="text-white text-lg">{orderID}</p>
		</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-12 h-12 row-span-2 self-center justify-self-center text-white"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
			/>
		</svg>
		<div class="flex flex-col w-fit">
			<h3 class="bg-clip-text text-transparent bg-gradient-to-tl text-sm from-gray-800 to-gray-700">
				Number of Boxes
			</h3>

			<p class="text-gray-300 ml-auto">{boxesNum}</p>
		</div>

		<div />
	</div>
{/if}

<style>
	/* Override default styling of Link component */
	a {
		text-decoration: none; /* Remove underline */
		color: inherit; /* Inherit color from parent */
	}
</style>
