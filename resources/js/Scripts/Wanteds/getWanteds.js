export function  getWanteds(wantedsList){
    return  axios.get('/api/wanted')
        .then(res => res.data.data);
}
