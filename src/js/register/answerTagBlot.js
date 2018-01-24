import Quill from 'quill';

/**
 * `blots/inline` cannot support span tag
 * should using `blots/block/embed` instead
 *
 * Reference:
 * https://stackoverflow.com/questions/37796409/is-it-possible-to-create-a-custom-format-blot-with-complex-substructure
 */

const BlockEmbed = Quill.import('blots/block/embed');

class AnswerTagBlot extends BlockEmbed {
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

AnswerTagBlot.blotName = 'answerTag';
AnswerTagBlot.className = 'ansTag';
AnswerTagBlot.tagName = 'span';

export default AnswerTagBlot;