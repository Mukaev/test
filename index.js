var greenIcon = L.icon({
    iconUrl: 'image014.png',

    iconSize:     [38, 45], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var greenIcon1 = L.icon({
    iconUrl: 'image013.png',
    

    iconSize:     [38, 45], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var greenIcon2 = L.icon({
    iconUrl: 'image012.png',
    

    iconSize:     [38, 45], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var greenIcon3 = L.icon({
    iconUrl: 'image011.png',
   

    iconSize:     [38, 45], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var greenIcon4 = L.icon({
    iconUrl: 'image010.jpg',

    iconSize:     [38, 45], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var mymap = L.map('mapid',{ measureControl:true}).setView([47.23669, 39.712443], 100);



var marker1 = L.marker([47.23669, 39.712443],{icon:greenIcon}).addTo(mymap);
var marker2 = L.marker([47.23799, 39.711311],{icon:greenIcon1}).addTo(mymap);
var marker3 = L.marker([47.237669, 39.712288],{icon:greenIcon2}).addTo(mymap);
var marker4 = L.marker([47.23752, 39.711762],{icon:greenIcon3}).addTo(mymap);
var marker5 = L.marker([47.237291, 39.712384],{icon:greenIcon4}).addTo(mymap);
var markMas =[marker1,marker2,marker3,marker4,marker5]

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibDQ0NDRsIiwiYSI6ImNrNnl6eTFnYTA1bDAzb3J5MzNwd3oyNTQifQ.a9EfQrZ_f_wrDgKfPzyWRQ'
}).addTo(mymap);

marker1.bindPopup("<b>Главное здание</b><br>Добрый день").openPopup();
marker2.bindPopup("<b>Пункт 1 </b><br> ПМИ").openPopup();
marker3.bindPopup("<b>Пункт 2 </b><br>ФИИт").openPopup();
marker4.bindPopup("<b>Пункт 3 </b><br>Матмод").openPopup();
marker5.bindPopup("<b>Пункт 4 </b><br>Пед").openPopup();
//marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
function moveTo(cord,mark) {
    mymap.setView(cord,100)
for (let index = 0; index < markMas.length; index++) {
mark.bindPopup("<b>Hello world!</b><br> Пункт" +index ).openPopup();
}
}

mymap.on('click', onMapClick);