<script lang="ts">
	export let style = '';
	export let disabled = false;
</script>

<button
	on:click
	{disabled}
	class="
     transition duration-100
    text-xl text-gray-100 rounded-md px-1 pb-1 flex items-center justify-center {style}
    {disabled
		? 'bg-gray-600'
		: 'bg-rose-600 hover:bg-rose-500 shadow-mdlg hover:shadow-rose-600 shadow-rose-800  hover:shadow-hov'}
"><slot /></button
>
