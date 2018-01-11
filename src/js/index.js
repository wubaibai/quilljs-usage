import 'quill/dist/quill.snow.css';

import Quill from 'quill';
import variable from './appConfig';
import options, { htmlSample } from './quillConfig';
import textChange from './event/textChange';
import sizeStyle from './register/sizeStyle';

import '../css/index/welcome.css';
import '../css/quill/editor.css';
import '../css/theme/gray.css';

Quill.register(sizeStyle, false);

variable.editor = new Quill('#editor-sample', options);

variable.editor.clipboard.dangerouslyPasteHTML(0, htmlSample);

variable.editor.on('text-change', textChange);
