import Quill from 'quill';
import variable, { options, whitList, htmlSample } from './appConfig';
import textChange from './event/textChange';

import '../library/quill/quill.snow.css';
import '../css/index/welcome.css';
import '../css/quill/editor.css';

const sizeStyle = Quill.import('attributors/style/size');
const sizeWhiteList = whitList.size.map((size) => `${size}px`);
sizeStyle.whitelist = sizeWhiteList;
Quill.register(sizeStyle, false);

variable.editor = new Quill('#editor-sample', options);

variable.editor.clipboard.dangerouslyPasteHTML(0, htmlSample);

variable.editor.on('text-change', textChange);
