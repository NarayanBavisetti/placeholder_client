import axios from 'axios';
import authHeader from './auth-header';

const createCourse = async (courseData) => {
	const response = await axios.post(`${process.env.REACT_APP_URL}/educator/course`, courseData, {
		headers: authHeader(),
	});
    console.log(response)
	if (response.data) {
	     console.log(response.data);
	}
	return response.data;
};

// const signInUser = async (userData) => {
// 	const response = await axios.post(`${process.env.REACT_APP_URL}/signin`, userData, {
// 		headers: authHeader(),
// 	});
// 	if (response.data) {
// 		localStorage.setItem('token', JSON.stringify(response.data.token));
// 		localStorage.setItem('data', JSON.stringify(response.data.data));
// 	}
// 	return response.data;
// };

// const logout = () => {
// 	localStorage.removeItem('token');
// 	localStorage.removeItem('data');
// };

const CourseAPI = {
	createCourse
};
export default CourseAPI;
