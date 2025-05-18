<script>
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	let { fallback, error, children, ref = $bindable(), ...props } = $props();

	const gltf = useGltf('/pallet.glb');
	/* 	let group: THREE.Group;

	$: {
		if (group) {
			const box = new THREE.Box3().setFromObject(group);
			const vec = new THREE.Vector3();
			box.getSize(vec);
			console.log(vec);
		}
	} */
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Group rotation.x={Math.PI} scale={0.24} position={[0, -0.04, 0]}>
			<T.Mesh geometry={gltf.nodes.Object_2.geometry} material={gltf.materials.material_0} />
			<T.Mesh geometry={gltf.nodes.Object_3.geometry} material={gltf.materials.material_0} />
			<T.Mesh geometry={gltf.nodes.Object_4.geometry} material={gltf.materials.material_0} />
			<T.Mesh geometry={gltf.nodes.Object_5.geometry} material={gltf.materials.material_0} />
			<T.Mesh geometry={gltf.nodes.Object_6.geometry} material={gltf.materials.material_0} />
		</T.Group>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
