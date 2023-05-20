<template>
    <div class="main">
        <h1>КАРТА ВОЛОНТЕРСЬКИХ ЦЕНТРІВ В УКРАЇНІ</h1>
        <div id="map"></div>
        <a href="#" @click.prevent="saveMarkers" v-if="user_role===2">save</a>
    </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import api from '../../api'
export default {
    name: "MapIndex",
    data(){
        return{
            markers:new L.FeatureGroup(),
            marker:[],
            lat:'',
            lng:'',
            markerIconUrl: '',
            markerIconSize: [],
            markerIconAnchor: [],
            user_role:parseInt(localStorage.getItem('user_role'))
        }
    },

    mounted() {
        let map=L.map('map').setView([48.6208, 22.2879],13)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);

        this.loadMarkerIcon();

        this.markers.eachLayer((layer) => {
            let marker = L.marker(layer.getLatLng(), {icon: this.createMarkerIcon()});
            this.marker.push(marker);
        });

        map.on('click', this.addNewMarker).addLayer(this.markers);
        this.getMarkers();
    },
    methods:{
        addNewMarker(click){
            if (this.user_role===2){
                let marker = L.marker(click.latlng,{icon: this.createMarkerIcon()});
                this.markers.addLayer(marker)
                this.marker.push(marker);
            }
        },
        createMarkerIcon() {
            return L.icon({
                iconUrl: this.markerIconUrl,
                iconSize: this.markerIconSize,
                iconAnchor: this.markerIconAnchor
            });
        },
        loadMarkerIcon() {
            this.markerIconUrl = localStorage.getItem('markerIconUrl');
            this.markerIconSize = JSON.parse(localStorage.getItem('markerIconSize'));
            this.markerIconAnchor = JSON.parse(localStorage.getItem('markerIconAnchor'));
        },
        saveMarkers() {
            const coordinates = this.marker.map((marker) => marker.getLatLng());
            coordinates.forEach(coordinate=>{
                this.lat=coordinate.lat
                this.lng=coordinate.lng
            })
            api.post('/api/auth/markers',
                {lat:this.lat, lng:this.lng })
        },
        getMarkers(){
            api.get('/api/auth/markers')
                .then(res=>{
                    res.data.forEach(mark=>{
                        let markes=L.marker([mark.lat,mark.lng], {icon: this.createMarkerIcon()});
                        this.markers.addLayer(markes)
                    })
                })
        }
    }

}
</script>



<style scoped>
div{
    color: black;
}
    #map{
        width: 1200px;
        height: 600px;
    }
    .main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
