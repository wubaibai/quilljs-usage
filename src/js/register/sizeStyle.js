import Quill from 'quill';
import { whitList } from '../quillConfig';

const sizeStyle = Quill.import('attributors/style/size');
const sizeWhiteList = whitList.size.map((size) => `${size}px`);
sizeStyle.whitelist = sizeWhiteList;

export default sizeStyle;
