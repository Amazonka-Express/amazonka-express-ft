<script lang="ts">
	let { data } = $props();
</script>

<div class="flex h-screen w-screen flex-col bg-gradient-to-tl from-gray-900 to-gray-800">
	<div class="mx-auto flex w-full flex-col items-center gap-8 text-white md:w-[600px]">
		<h1>{data?.msg}</h1>
	</div>
</div>
