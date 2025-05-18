<script lang="ts">
	import JsBarcode from 'jsbarcode';
	export const ssr = false;

	function barcode(node: SVGSVGElement, data: string) {
		JsBarcode(node, data, {
			displayValue: false
		});
	}
</script>

<svg use:barcode={'123456789091'} class="rounded-lg" />
