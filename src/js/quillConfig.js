import imageHandler from './handler/image';

export const whitList = {
	size: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
};

const options = {
	modules: {
		toolbar: {
			container: '#quill-toolbar',
			handlers: {
				image: imageHandler,
			},
		},
	},
	theme: 'snow',
};

export default options;
