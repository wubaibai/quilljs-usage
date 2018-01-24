import variable from '../appConfig';

const insertAnswerTag = (answerSourceNumber, title) => {
	const range = variable.editor.getSelection();

	const insertIndex = range ? range.index : 0;

	variable.editor.insertEmbed(
		insertIndex,
		'answerTag',
		{
			rel: answerSourceNumber,
			title,
		}
	);
};

export default insertAnswerTag;
