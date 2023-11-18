import axios from 'axios';

export const getFacturas = async () => {
    try {
        const response = await axios.get('https://recruiting.api.bemmbo.com/invoices/pending');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};