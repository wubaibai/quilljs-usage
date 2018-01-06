import variable from '../appConfig';

const get = () => (
	variable.editor.getContents()
);

export default get;
