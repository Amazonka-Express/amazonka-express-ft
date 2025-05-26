<script lang="ts">
	let { data } = $props();
</script>

<div class="flex h-screen w-screen flex-col bg-gradient-to-tl from-gray-900 to-gray-800">
	<div class="mx-auto flex w-full flex-col items-center gap-8 md:w-[600px]">
		<div>{data?.msg}</div>
	</div>
</div>
