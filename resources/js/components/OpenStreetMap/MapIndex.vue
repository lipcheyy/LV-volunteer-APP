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
export default {
    name: "MapIndex",
    data(){
        return{
            markers:new L.FeatureGroup(),
            marker:[]
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
    },
    methods:{
        addNewMarker(click){
            let marker=L.marker(click.latlng)
            this.markers.addLayer(marker)
        },
        saveMarkers() {
            // Відправляємо координати маркерів на сервер
            const data = this.marker.map((marker) => marker.getLatLng());
            api.post('/api/auth/markers', { markers: data }).then((response) => {
                alert('Маркери успішно збережено');
            });
        },
    }

}
</script>

<style scoped>
    #map{
        height: 600px;
    }
</style>
