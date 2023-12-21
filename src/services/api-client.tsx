import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '14ff08775bc949b2b701f085db07482b'
    }
})