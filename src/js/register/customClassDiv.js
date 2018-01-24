import Quill from 'quill';

const Block = Quill.import('blots/block');

class customClassDiv extends Block {
	static create(value) {
		const node = super.create();
		node.setAttribute('class', value.class);

		return node;
	}

	/**
	 * formats is for quill getContents
	 */
	static formats(node) {
		return {
			class: node.className,
		};
	}
}

customClassDiv.blotName = 'custom-div';
customClassDiv.tagName = 'div';

export default customClassDiv;
