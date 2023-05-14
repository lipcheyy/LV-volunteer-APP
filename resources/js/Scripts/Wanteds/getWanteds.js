export function  getWanteds(wantedsList){
    return  axios.get('/api/wanted')
        .then(res=>{
            wantedsList=res.data.data
        })
}
