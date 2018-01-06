import Quill from 'quill';
import variable from '../appConfig';

const imageHandler = () => {
	const range = variable.editor.getSelection();
	const imageUrl = 'https://www.surveycake.com/common/images/mail/logo.png';

	variable.editor.insertEmbed(range.index, 'image', imageUrl, Quill.sources.USER);
};

export default imageHandler;
