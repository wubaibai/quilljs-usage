import Quill from 'quill';

const Break = Quill.import('blots/break');
const Embed = Quill.import('blots/embed');

class paragraphBreakBlot extends Break {
	length() {
		super.length();
		return 1;
	}

	value() {
		super.value();
		return '\n';
	}

	insertInto(parent, ref) {
		Embed.prototype.insertInto.call(this, parent, ref);
	}
}

paragraphBreakBlot.blotName = 'paragraphBreak';
paragraphBreakBlot.tagName = 'BR';

export default paragraphBreakBlot;
