import axios from 'axios'
const KEY = 'AIzaSyAx-_4mXsGXKFdSLb4rJshH36wULOXfs1s';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type:'videos',
        maxResults: 5,
        key: KEY,
    }
})