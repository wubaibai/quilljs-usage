import imageHandler from './handler/image';

export const whitList = {
	size: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
};

export const htmlSample = `ABCDE
	<div class="welcometext-content">
		<h1 class='tip'>我是H1</h1>
		<div class='ansTag' rel='1' data-title='你好嗎1？'>你好嗎11？</div>
		<span class='ansTag' rel='2' data-title='你好嗎2？'>你好嗎22？</span>
		<a href='https://www.surveycake.com'>links</a>
		<p class='subtitle'>我是P <span style='color: red;'>AAA</span></p>
		<ul style="list-style-type:none; padding:0px; margin-left:0px; font-size:13.5px;">
			<li style="margin-bottom:6px;">第一個 li</li>
			<li style="margin-bottom:6px;">第二個 li</li>
			<li style="margin-bottom:6px;">第三個 li</li>
		</ul>
		<div style="font-size:88px;">有 Style 的 DIV</div>
		<img src='https://www.surveycake.com/common/images/mail/logo.png'/>
	</div>
`;

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
