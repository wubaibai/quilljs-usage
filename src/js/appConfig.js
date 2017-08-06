export const domain = process.env.NODE_ENV === 'PRODUCTION' ? 'www.example.com' : 'demoDomain.com';

// [{ script: 'sub' }, { script: 'super' }],
// [{ size: ['small', false, 'large', 'huge'] }],

const toolbarOptions = [
	[{ size: [] }, { header: [1, 2, 3, 4, 5, false] }],
	[
		'bold', 'italic', 'underline', 'strike',
		{ list: 'ordered' }, { list: 'bullet' },
		{ color: [] }, { background: [] },
		{ align: [] }, 'clean',
	],

	['blockquote', 'code-block'],
];

export const quillOptions = {
	modules: {
		toolbar: toolbarOptions,
	},
	theme: 'snow',
};

export const htmlTemplate = `
	<div class="welcometext-content">
		<h1>H1 兒</h1>
		<p>PPPP 兒</p>
		<ul style="list-style-type:none; padding:0px; margin-left:0px; font-size:13.5px;">
			<li style="margin-bottom:6px;">li</li>
			<li style="margin-bottom:6px;">li</li>
			<li style="margin-bottom:6px;">li</li>
		</ul>
		<div style="font-size:88px;">有 Style 的 DIV</div>
	</div>
`;

export default "this is app config";
