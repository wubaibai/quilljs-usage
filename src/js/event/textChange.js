import $ from 'jquery';

const textChange = () => {
	$('.after pre').text($('.ql-editor').html());
};

export default textChange;
