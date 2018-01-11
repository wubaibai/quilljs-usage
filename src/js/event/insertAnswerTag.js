import variable from '../appConfig';

const insertAnswerTag = (answerSourceNumber, title) => {
	const range = variable.editor.getSelection();

	if (range) {
		variable.editor.insertEmbed(
			range.index,
			'answerTag',
			{
				rel: answerSourceNumber,
				title,
			}
		);
	}
};

export default insertAnswerTag;
