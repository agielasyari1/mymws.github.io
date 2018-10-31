var mymap = L.map('mapid').setView([-7.962987, 112.622500], 13);

// PLACE 1
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoieXVzdWZyaXphbGgiLCJhIjoiY2pubDh4ZDFtMDZqajNwbnppandja25nbCJ9.ULxqaXHPzFArFjMk7cdcxQ'
}).addTo(mymap);
var marker1 = L.marker([-7.962987, 112.622500]).addTo(mymap);
var circle1 = L.circle([-7.962987, 112.622500], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
marker1.bindPopup("<p align='center'><img src='../images/imgpeta/Ria-Djenaka.jpg' width='100%'><br><br><b>Tempat favorit : Teras Komika</b><br>Lat:-7.962987 Long:112.622500 <br><br> Jl. Jakarta No.28, Penanggungan, Klojen, Kota Malang, Jawa Timur 65113</p>").openPopup();

function onMapClick(e) {
    console.log("Peta diklik pada posisi " + e.latlng);
}
mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Lokasi yang dipilih: " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);