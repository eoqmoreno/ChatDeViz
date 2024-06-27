// imported services
import axios from 'axios';

export const client = axios.create({
    headers: { Authorization: `Bearer ${process.env.REACT_APP_CHATGPT_KEY}` }
})