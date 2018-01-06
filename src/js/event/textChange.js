import getData from '../data/get';

const textChange = (delta, oldDelta, source) => {
	console.log(`text change trigger by '${source}'`);

	console.log(getData());
};

export default textChange;
