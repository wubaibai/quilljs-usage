/**
 * follow document https://quilljs.com/guides/building-a-custom-module/
 */

class wordCounter {
	constructor(quill, options) {
		this.quill = quill;
		this.options = options;
		this.container = document.querySelector(options.container);

		quill.on('text-change', this.update.bind(this));

		this.update();
	}

	calculate() {
		let text = this.quill.getText();

		if (this.options.unit === 'word') {
			text = text.trim();
			return text.length > 0 ? text.split(/\s+/).length : 0;
		}

		return text.length;
	}

	update() {
		const length = this.calculate();
		const unit = this.options.unit;

		this.container.innerHTML = `${length} ${unit}`;
	}
}

export default wordCounter;
