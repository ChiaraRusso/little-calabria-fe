import axios from 'axios';

const LITTLE_ITALY_REST_URL = "http://localhost:8080/";

class APIService {

    getAppetizers() {
        return axios.get(LITTLE_ITALY_REST_URL + "appetizers");
    }

    getFirstCourses() {
        return axios.get(LITTLE_ITALY_REST_URL + "firstCourses");
    }

    getSecondCourses() {
        return axios.get(LITTLE_ITALY_REST_URL + "secondCourses");
    }

    getPizze() {
        return axios.get(LITTLE_ITALY_REST_URL + "pizze");
    }

    getDesserts() {
        return axios.get(LITTLE_ITALY_REST_URL + "desserts");
    }
    
}
export default new APIService();