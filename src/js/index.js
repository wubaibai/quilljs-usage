import 'quill/dist/quill.snow.css';

import $ from 'jquery';
import Quill from 'quill';
import variable from './appConfig';
import options, { htmlSample } from './quillConfig';
import textChange from './event/textChange';
import insertAnswerTag from './event/insertAnswerTag';
import sizeStyle from './register/sizeStyle';
import AnswerTagBlot from './register/answerTagBlot';

import '../css/index/welcome.css';
import '../css/quill/editor.css';
import '../css/theme/gray.css';

Quill.register(sizeStyle, false);
Quill.register(AnswerTagBlot);

variable.editor = new Quill('#editor-sample', options);

variable.editor.clipboard.dangerouslyPasteHTML(0, htmlSample);

variable.editor.on('text-change', textChange);

$('#custom-button').on('click', () => insertAnswerTag('3', '你好嗎333?'));
