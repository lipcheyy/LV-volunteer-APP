<template>
    <div>
        <div id="map"></div>
        <a href="#" @click.prevent="saveMarkers">save</a>
    </div>
</template>

<script>
import MapComponent from "./MapComponent";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import api from '../../api'
import {toString} from "lodash";
export default {
    name: "MapIndex",
    data(){
        return{
            markers:new L.FeatureGroup(),
            marker:[],
            lat:'',
            lng:''
        }
    },
    components: {MapComponent},
    mounted() {
        let map=L.map('map').setView([48.6208, 22.2879],13)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);
        map.on('click',this.addNewMarker).addLayer(this.markers)
        this.getMarkers()

    },
    methods:{
        addNewMarker(click){
            let marker = L.marker(click.latlng,{icon: L.icon({
                    iconUrl: 'storage/icons/pin.png',
                    iconSize: [30, 38],
                    iconAnchor: [16, 35]
                })});
            this.markers.addLayer(marker)
            this.marker.push(marker);
        },
        saveMarkers() {
            const coordinates = this.marker.map((marker) => marker.getLatLng());

            coordinates.forEach(coordinate=>{
                this.lat=coordinate.lat
                this.lng=coordinate.lng
            })
            console.log(this.lat,this.lng);
            api.post('/api/auth/markers',
                {lat:this.lat, lng:this.lng })
                .then((response) => {

            });
        },
        getMarkers(){
            api.get('/api/auth/markers')
                .then(res=>{
                    res.data.forEach(mark=>{
                        let markes=L.marker([mark.lat,mark.lng])
                        this.markers.addLayer(markes)
                    })
                })
        }
    }

}
</script>

<style scoped>
    #map{
        height: 600px;
    }
</style>
