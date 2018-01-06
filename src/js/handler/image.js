import 'vex-js/dist/css/vex.css';

import Quill from 'quill';
import vex from 'vex-js/dist/js/vex.combined';
import variable from '../appConfig';

import '../../css/vex-theme-custom.css';

vex.defaultOptions.className = 'vex-theme-custom';

const imageHandler = () => {
	const range = variable.editor.getSelection();

	vex.dialog.prompt({
		message: '請填入圖片網址',
		placeholder: 'https://',
		callback: (value) => {
			console.log(value);

			if (!value) {
				return;
			}

			variable
				.editor
				.insertEmbed(range.index, 'image', value, Quill.sources.USER);
		},
	});
};

export default imageHandler;
