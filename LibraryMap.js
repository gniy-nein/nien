let map;
let mapOptions;

function initMap() {
    let nienLib = { lat: 13.646503041031412, lng: 100.4870527467352 };
    mapOptions = { zoom: 5, center: nienLib };
    map = new google.maps.Map(document.getElementById("mapDisplay"),
        mapOptions
    )
    shop = {
        position: { lat: 13.72492, lng: 100.26533 },
        title: "Bangkok"
    }
    myMarker = new google.maps.Marker(shop);
    myMarker.setMap(map);
    let shopList = [
        {
            position: { lat: 6.641499820530952, lng: 100.3790209714728},
            title: "Hatyai"
        },
        {
            position: { lat: 15.779331585332743, lng: 100.10537099842234 },
            title: "NakornSawan"
        },
        {
        }]
    for (let index = 0; index < shopList.length; index++) {
        myMarker = new google.maps.Marker(shopList[index]);
        myMarker.setMap(map);
    }
}