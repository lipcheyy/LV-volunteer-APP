<template>
    <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
export default {
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
            zoom: 13,
            center: [51.505, -0.09],
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        };
    },
};
</script>

<style scoped>
/* optional styles */
.l-map {
    height: 500px;
}
</style>
