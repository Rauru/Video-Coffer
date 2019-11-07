import axios from 'axios';

export const videoSearch = (search) => ({
    type: 'FETCH_VIDEOS',
    payload: axios.get(`https://www.googleapis.com/youtube/v3/search?
                        part=snippet
                        &q=${search.keywords}
                        &key=AIzaSyDXLWlXz5NW8PIKVLh7VFpHrjz0Ox7OpqU
                        &maxResults=${search.maxResults}
                        &type=video
                      `)
});