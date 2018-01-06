import Quill from 'quill';
import variable from '../appConfig';

const imageHandler = () => {
	const range = variable.editor.getSelection();

	/* eslint-disable no-alert */
	const imageUrl = window.prompt('請填入圖片網址');
	/* eslint-enable no-alert */

	variable.editor.insertEmbed(range.index, 'image', imageUrl, Quill.sources.USER);
};

export default imageHandler;
