import Quill from 'quill';

import variable from '../appConfig';

const paragraphBreak = (range) => {
	const currentLeaf = variable.editor.getLeaf(range.index)[0];
	const nextLeaf = variable.editor.getLeaf(range.index + 1)[0];

	variable.editor.insertEmbed(range.index, 'paragraphBreak', true, Quill.sources.USER);

	/**
	 * insert a second break
	 *
	 * If nextLeaf equal to null, means at the end of editor
	 * or at the end of the parent element
	 */
	if (nextLeaf === null || (currentLeaf.parent !== nextLeaf.parent)) {
		variable.editor.insertEmbed(range.index, 'paragraphBreak', true, Quill.sources.USER);
	}

	/**
	 * move cusor forward after insert a break
	 */
	variable.editor.setSelection(range.index + 1, Quill.sources.SILENT);
};

export default paragraphBreak;
