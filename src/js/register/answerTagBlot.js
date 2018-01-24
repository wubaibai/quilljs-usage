import Quill from 'quill';

/**
 * `blots/inline` cannot support span tag
 * should using `blots/block/embed` or `blots/embed` instead
 *
 * Reference:
 * https://stackoverflow.com/questions/37796409/is-it-possible-to-create-a-custom-format-blot-with-complex-substructure
 * https://github.com/quilljs/quill/issues/853
 */

const BlockEmbed = Quill.import('blots/embed');

class answerTagBlot extends BlockEmbed {
	static create(value) {
		const node = super.create();
		node.setAttribute('rel', value.rel);
		node.textContent = value.title;

		return node;
	}

	/**
	 * formats is for quill getContents
	 */

	static formats(node) {
		return {
			rel: node.getAttribute('rel'),
			title: node.textContent,
		};
	}

	/**
	 * value is for quill create blot
	 */

	static value(node) {
		return {
			rel: node.getAttribute('rel'),
			title: node.textContent,
		};
	}
}

answerTagBlot.blotName = 'answerTag';
answerTagBlot.className = 'ansTag';
answerTagBlot.tagName = 'span';

export default answerTagBlot;
