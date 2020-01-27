import axios from 'axios';

export default axios.create({
	baseURL: 'https://api-product-test.herokuapp.com/'
});
