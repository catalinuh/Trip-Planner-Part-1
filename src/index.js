console.log("hello!");

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2F0YWxpbnVoIiwiYSI6ImNrZndxcGFnNDF1ZHcycW84dmQ1bW5kNnAifQ.569__A4CK5p3TKwMRAGUlQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});
