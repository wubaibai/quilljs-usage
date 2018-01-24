import Quill from 'quill';

const Block = Quill.import('blots/block');

class whostoneIconBlock extends Block {
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

whostoneIconBlock.blotName = 'info-block';
whostoneIconBlock.className = 'info-block';
whostoneIconBlock.tagName = 'div';

export default whostoneIconBlock;
