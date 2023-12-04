import { Dom, Vector } from '../../core';
import { Grid } from '../../designer-extension';

export class DotGrid implements Grid {
	public static create(size: Vector): DotGrid {
		const path = Dom.svg('circle', {
			class: 'sqd-line-grid-path',
			fill: '#C7C7D4',
			cx:"1",
			cy:"1",
			r:"1"
		});
		return new DotGrid(size, path);
	}

	private constructor(public readonly size: Vector, public readonly element: SVGPathElement) {}

	public setScale(_: number, scaledSize: Vector) {
		Dom.attrs(this.element, {
			d: `M ${scaledSize.x} 0 L 0 0 0 ${scaledSize.y}`
		});
	}
}
