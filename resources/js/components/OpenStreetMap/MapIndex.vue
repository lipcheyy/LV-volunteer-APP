<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
import MapComponent from "./MapComponent";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
export default {
    name: "MapIndex",
    components: {MapComponent},
    mounted() {
        let map=L.map('map').setView([48.6208, 22.2879],13)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);
    }

}
</script>

<style scoped>
    #map{
        height: 600px;
    }
</style>
