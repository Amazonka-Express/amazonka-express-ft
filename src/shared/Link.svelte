<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	$: route = $page.route.id;
	$: isSelected = href.includes(getBack($page.route.id!));

	function getBack(s: String) {
		const x = s.split('').reverse().join('');
		const index = x.indexOf('/');
		return x.slice(0, index).split('').reverse().join('');
	}
</script>

<!-- before:absolute before:inset-x-[-29px] before:bottom-0 before:h-[1px] before:bg-gray-100 before:z-10 before:rounded-t-full before:hidden-->
<div
	class="rounded-t-[26px] p-1 pb-2 relative group {isSelected
		? 'bg-gray-100 selected'
		: 'bg-neutral-800'}"
>
	<div
		class={'hidden group-[.selected]:block w-10 absolute right-full bottom-[-1px] top-[29px] bg-gray-100 before:absolute before:inset-0 before:rounded-br-full before:bg-neutral-800'}
	/>
	<a {href} class="block text-gray-100 px-2 pt-2 pb-3 bg-neutral-800 rounded-full relative z-10"
		><slot /></a
	>
	<div
		class={'hidden group-[.selected]:block w-10 absolute left-full bottom-[-1px] top-[29px] bg-gray-100 before:absolute before:inset-0 before:rounded-bl-full before:bg-neutral-800'}
	/>
</div>
