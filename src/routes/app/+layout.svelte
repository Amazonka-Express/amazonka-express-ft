<script lang="ts">
	import { page } from '$app/stores';
	import arrow from '$src/assets/arrow.svg';
	import type { User } from '$src/lib/types';
	import Link from '../../shared/Link.svelte';
	import { getContext } from 'svelte';

	const user = getContext('user') as () => User | undefined;
</script>

<div class="flex h-screen w-screen flex-col bg-gradient-to-tl from-gray-900 to-gray-800">
	<div
		class="flex h-16 w-full items-center gap-6 overflow-hidden bg-neutral-800 pl-4 text-white shadow-md shadow-neutral-900"
	>
		{#if $page.route.id !== '/'}
			<img src={arrow} alt="back arrow" class="relative z-10 h-5 self-center" />
			<Link href="/order/find">find</Link>
			<Link href="/order/arrange">arrange</Link>
			<Link href="/order/load">load</Link>
		{/if}
		{#if user()?.email}
			<div class="mr-4 ml-auto">
				Hi, {user()?.email}
			</div>
		{/if}
	</div>
	<div class="mx-auto w-full md:w-[600px]">
		<slot />
	</div>
</div>
