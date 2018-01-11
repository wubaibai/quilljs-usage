import 'quill/dist/quill.snow.css';

import Quill from 'quill';
import variable from './appConfig';
import options, { whitList, htmlSample } from './quillConfig';
import textChange from './event/textChange';

import '../css/index/welcome.css';
import '../css/quill/editor.css';
import '../css/theme/gray.css';

const sizeStyle = Quill.import('attributors/style/size');
const sizeWhiteList = whitList.size.map((size) => `${size}px`);
sizeStyle.whitelist = sizeWhiteList;
Quill.register(sizeStyle, false);

variable.editor = new Quill('#editor-sample', options);

variable.editor.clipboard.dangerouslyPasteHTML(0, htmlSample);

variable.editor.on('text-change', textChange);
