export const whitList = {
	size: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
};

export const options = {
	modules: {
		toolbar: '#quill-toolbar',
	},
	theme: 'snow',
};

export const htmlSample = `
	<div class="welcometext-content">
		<h1 class='tip'>我是H1</h1>
		<p class='subtitle'>我是P</p>
		<ul style="list-style-type:none; padding:0px; margin-left:0px; font-size:13.5px;">
			<li style="margin-bottom:6px;">第一個 li</li>
			<li style="margin-bottom:6px;">第二個 li</li>
			<li style="margin-bottom:6px;">第三個 li</li>
		</ul>
		<div style="font-size:88px;">有 Style 的 DIV</div>
		<img src='https://www.surveycake.com/common/images/mail/logo.png'/>
	</div>
`;

const variable = {
	editor: null,
};

export default variable;
