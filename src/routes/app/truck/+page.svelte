<script lang="ts">
	const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5173/';
	const url = `${baseUrl}api/truck`;
	console.log('fetch URL:', url);

	const fetchRoute = async () => {
		await fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response;
			})
			.then((data) => {
				console.log('Data fetched successfully:', data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};
</script>

<div>
	{#await fetchRoute()}
		<p>Loading...</p>
	{:then res}
		<p>Data fetched successfully!</p>
		<pre>{res}</pre>
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</div>
