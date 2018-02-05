import imageHandler from './handler/image';
import paragraphBreakHandler from './handler/paragraphBreak';
import paragraphBreakMatcher from './matcher/paragraphBreak';

export const whitList = {
	size: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
};

const options = {
	theme: 'snow',
	modules: {
		toolbar: {
			container: '#quill-toolbar',
			handlers: {
				image: imageHandler,
			},
		},
		clipboard: {
			matchers: [
				['BR', paragraphBreakMatcher],
			],
		},
		keyboard: {
			bindings: {
				paragraphBreak: {
					key: 13,
					shiftKey: true,
					handler: (range) => paragraphBreakHandler(range),
				},
			},
		},
		imageResize: {
			modules: ['Resize', 'DisplaySize'],
			handleStyles: {
				backgroundColor: '#FFF',
				border: '#999 1px solid',
				borderRadius: '2px',
			},
			displayStyles: {
				backgroundColor: 'black',
				border: 'none',
				color: '#3DBA90',
			},
			overlayStyles: {
				border: 'none',
			},
		},
		wordCounter: {
			container: '.ql-word-count',
			limit: 200,
		},
	},
};

export default options;
