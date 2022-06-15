import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers : {
        Authorization: 'Client-ID tY95JUGmgfbL7EVUvsnk2pjXLEM_72dNoO5g143_iGI'
    }
})