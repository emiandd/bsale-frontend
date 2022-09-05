import showCategories from '../utils/showCategories.js';
const url = 'https://bsale--back.herokuapp.com';

/* It get all categories from db when app starts */
const getAllCategories = () => {
	fetch(`${url}/categories`)
	.then(response => response.json())
	.then( data  => {
		showCategories(data);
		return 
	})
}

export default getAllCategories;