import 'quill/dist/quill.snow.css';
import 'font-awesome/css/font-awesome.css';

import $ from 'jquery';
import Quill from 'quill';

import variable from './appConfig';
import options from './quillConfig';
import answerTagSample, {
	sampleWelcomeText,
	sampleStatementTitle,
	sampleQuoteContent,
} from './data/sample';
import textChange from './event/textChange';
import insertAnswerTag from './event/insertAnswerTag';
import sizeStyle from './register/sizeStyle';
import answerTagBlot from './register/answerTagBlot';

import '../css/index/welcome.css';
import '../css/quill/editor.css';
import '../css/theme/gray.css';

const mappingSampleHtml = [
	answerTagSample,
	sampleWelcomeText,
	sampleStatementTitle,
	sampleQuoteContent,
];

Quill.register(sizeStyle, false);
Quill.register(answerTagBlot);

variable.editor = new Quill('#editor-sample', options);

variable.editor.on('text-change', textChange);

$('#custom-button').on('click', () => insertAnswerTag('3', '你好嗎333?'));

$('.sample-selector').on('change', function () {
	const option = $(this).val();
	$('.before pre').text(mappingSampleHtml[option]);

	variable.editor.setContents([]);
	variable.editor.clipboard.dangerouslyPasteHTML(0, mappingSampleHtml[option]);

	const afterHtml = $('.ql-editor').html();
	$('.after pre').text(afterHtml);
});
