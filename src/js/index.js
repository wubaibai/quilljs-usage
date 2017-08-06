import Quill from 'quill';
import { quillOptions, htmlTemplate } from './appConfig';

import '../library/quill/quill.snow.css';
import '../css/index/welcome.css';

const initEditor = (sample) => (
	new Quill(sample, quillOptions)
);

const demoEditor = initEditor('#editor-sample');

demoEditor.clipboard.dangerouslyPasteHTML(0, htmlTemplate);

// demoEditor.insertEmbed(10, 'image', 'https://codemirror.net/doc/logo.png');
