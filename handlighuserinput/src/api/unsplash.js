import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID fxar_VFNa-twBuLhJhBjt72cSVMVwNYwL7AJFJJv42U'
    }
})