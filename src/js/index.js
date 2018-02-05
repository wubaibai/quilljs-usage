import 'quill/dist/quill.snow.css';
import 'font-awesome/css/font-awesome.css';

import $ from 'jquery';
import Quill from 'quill';
import imageResize from 'quill-image-resize-module';

import variable from './appConfig';
import options from './quillConfig';
import answerTagSample, {
	sampleWelcomeText,
	sampleStatementTitle,
	sampleQuoteContent,
	sampleCustomizeText,
	sampleCustomizeNewText,
} from './data/sample';
import textChange from './event/textChange';
import insertAnswerTag from './event/insertAnswerTag';
import wordCounter from './modules/wordCounter';
import sizeStyle from './register/sizeStyle';
import answerTagBlot from './register/answerTagBlot';
import customClassDiv from './register/customClassDiv';
import getData from './data/get';

import '../css/index/welcome.css';
import '../css/quill/editor.css';
import '../css/theme/gray.css';
import '../css/theme/whostone.css';

const mappingSampleHtml = [
	answerTagSample,
	sampleWelcomeText,
	sampleStatementTitle,
	sampleQuoteContent,
	sampleCustomizeText,
	sampleCustomizeNewText,
];

Quill.register(sizeStyle, false);
Quill.register(answerTagBlot);
Quill.register(customClassDiv);
Quill.register('modules/imageResize', imageResize);
Quill.register('modules/wordCounter', wordCounter);

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

$('.get-delta').on('click', () => {
	console.log(getData());
});
