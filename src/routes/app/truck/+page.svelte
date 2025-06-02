<script lang="ts">
	import { onMount } from 'svelte';

	const { data } = $props();
	const coordinates: { lat: number; lng: number; stop_index?: number }[] = data?.coordinates;

	let mapContainer: HTMLDivElement;
	let map: any;
	let L: any;

	onMount(() => {
		(async () => {
			L = await import('leaflet');

			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
			document.head.appendChild(link);

			if (coordinates && coordinates.length > 0) {
				initializeMap();
			}
		})();

		return () => {
			if (map) {
				map.remove();
			}
		};
	});

	function initializeMap() {
		const coords = coordinates;

		const centerLat = coords[0].lat;
		const centerLng = coords[0].lng;

		map = L.map(mapContainer).setView([centerLat, centerLng], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap contributors'
		}).addTo(map);

		const routePoints = coords.map((coord) => [coord.lat, coord.lng]);
		const polyline = L.polyline(routePoints, {
			color: '#3388ff',
			weight: 4,
			opacity: 0.7
		}).addTo(map);

		coords.forEach((coord) => {
			if (coord.stop_index !== undefined) {
				// Create custom icon for stops
				const stopIcon = L.divIcon({
					html: `<div style="
						background-color: #ff4444;
						color: white;
						border-radius: 50%;
						width: 30px;
						height: 30px;
						display: flex;
						align-items: center;
						justify-content: center;
						font-weight: bold;
						font-size: 12px;
						border: 2px solid white;
						box-shadow: 0 2px 4px rgba(0,0,0,0.3);
					">${coord.stop_index}</div>`,
					className: 'custom-stop-icon',
					iconSize: [30, 30],
					iconAnchor: [15, 15]
				});

				const marker = L.marker([coord.lat, coord.lng], { icon: stopIcon }).addTo(map);

				const popupContent = `
					<div style="padding: 8px;">
						<h4 style="margin: 0 0 8px 0; color: #333;">Stop ${coord.stop_index}</h4>
						<p style="margin: 4px 0; font-size: 12px; color: #666;">
							<strong>Coordinates:</strong><br>
							Lat: ${coord.lat.toFixed(6)}<br>
							Lng: ${coord.lng.toFixed(6)}
						</p>
					</div>
				`;

				marker.bindPopup(popupContent);
			}
		});

		if (coords.length > 0) {
			// Start marker (green)
			const startIcon = L.divIcon({
				html: `<div style="
					background-color: #22c55e;
					color: white;
					border-radius: 50%;
					width: 25px;
					height: 25px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: bold;
					font-size: 10px;
					border: 2px solid white;
					box-shadow: 0 2px 4px rgba(0,0,0,0.3);
				">S</div>`,
				className: 'custom-start-icon',
				iconSize: [25, 25],
				iconAnchor: [12.5, 12.5]
			});

			L.marker([coords[0].lat, coords[0].lng], { icon: startIcon })
				.bindPopup('<div style="padding: 8px;"><strong>Start Point</strong></div>')
				.addTo(map);

			// End marker (red) - only if different from start
			if (coords.length > 1) {
				const endIcon = L.divIcon({
					html: `<div style="
						background-color: #ef4444;
						color: white;
						border-radius: 50%;
						width: 25px;
						height: 25px;
						display: flex;
						align-items: center;
						justify-content: center;
						font-weight: bold;
						font-size: 10px;
						border: 2px solid white;
						box-shadow: 0 2px 4px rgba(0,0,0,0.3);
					">E</div>`,
					className: 'custom-end-icon',
					iconSize: [25, 25],
					iconAnchor: [12.5, 12.5]
				});

				const lastCoord = coords[coords.length - 1];
				L.marker([lastCoord.lat, lastCoord.lng], { icon: endIcon })
					.bindPopup('<div style="padding: 8px;"><strong>End Point</strong></div>')
					.addTo(map);
			}
		}

		if (routePoints.length > 0) {
			map.fitBounds(polyline.getBounds(), { padding: [20, 20] });
		}
	}
</script>

<div class="map-container">
	{#if coordinates && coordinates.length > 0}
		<div bind:this={mapContainer} class="map"></div>
	{:else}
		<div class="no-data">
			<p>No coordinate data available</p>
		</div>
	{/if}
</div>

<style>
	.map-container {
		width: 100%;
		height: calc(100vh - 4rem);
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.map {
		width: 100%;
		height: 100%;
	}

	.no-data {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
		color: #666;
	}

	:global(.leaflet-popup-content-wrapper) {
		border-radius: 8px;
	}

	:global(.leaflet-popup-tip) {
		background: white;
	}

	:global(.custom-stop-icon) {
		background: none !important;
		border: none !important;
	}

	:global(.custom-start-icon) {
		background: none !important;
		border: none !important;
	}

	:global(.custom-end-icon) {
		background: none !important;
		border: none !important;
	}
</style>
