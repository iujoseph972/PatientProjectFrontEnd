import axios from 'axios';

const BASE_URL = 'https://localhost:7066'; // Use your API's base URL

export const getPatients = async () => {
    try {
       // console.log(`Bearer ${localStorage.getItem('jwtToken')}`);
        const response = await axios.get(`${BASE_URL}/patients`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting patients: ', error);
        throw error;
    }
};

export const getPatientById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/patients/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error getting patient with ID ${id}: `, error);
        throw error;
    }
};
