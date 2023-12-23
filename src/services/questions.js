import Axios from 'axios';

const BASE_URL = 'http://localhost:8000';
export const fetchQuestions = async () => {
	try {
		const { data } = await Axios.get(`${BASE_URL}/questions`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
