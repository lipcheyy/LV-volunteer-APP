export function  getWanteds(wantedsList){
    return  axios.get('/api/wanteds')
        .then(res => res.data.data);
}
