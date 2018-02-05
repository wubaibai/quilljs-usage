import Quill from 'quill';

const Delta = Quill.import('delta');

const paragraphBreak = () => {
	const newDelta = new Delta();
	newDelta.insert({ paragraphBreak: '' });

	return newDelta;
};

export default paragraphBreak;
