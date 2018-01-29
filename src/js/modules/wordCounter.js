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
		const text = this.quill.getText() ? this.quill.getText().trim() : '';
		return text.length || '';
	}

	update() {
		const length = this.calculate();

		this.container.innerHTML = `${length}`;
	}
}

export default wordCounter;
