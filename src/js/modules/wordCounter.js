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
		const length = this.quill.getLength() - 1;

		if (this.options.limit && length > this.options.limit) {
			this.quill.deleteText(this.options.limit, length);

			return this.options.limit;
		}

		return length || '';
	}

	update() {
		const length = this.calculate();

		this.container.innerHTML = `${length}`;
	}
}

export default wordCounter;
