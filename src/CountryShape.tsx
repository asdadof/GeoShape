import L from "leaflet";

let map: L.Map;
let countryLayer: L.LayerGroup | null = null;

// Function to fetch and display the shape of a country on a map
async function getCountryShape(countryCode: string) {

    //Retrieves the shape of the country based on the country code
    const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/world-administrative-boundaries/records?where=iso3='${countryCode}'`;

    //Saves and parse the JSON response
    const response = await fetch(url);
    const data = await response.json();

    //Initialize map, if not already
    if (!map) {

        //Customize the actual map
        map = L.map('map', {
            center: [20, 0],
            maxBounds: [[-90, -180], [90, 180]],
            maxBoundsViscosity: 1.0,
            minZoom: 2,
            maxZoom: 18
        });

        //Add a layer on top of the map (without labels)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
            noWrap: true,
            bounds: [[-90, -180], [90, 180]]
        }).addTo(map);
    } else {
        map.setView([20, 0], 2);
    }

    //Resets the countryLayer
    if (countryLayer) {
        map.removeLayer(countryLayer);
    }

    //Retrieves the selected color
    const chosenColor = localStorage.getItem('color');

    //Displays the country on the map with set colors
    if (data.results.length > 0) {
        const geoJson = data.results[0].geo_shape;

        countryLayer = L.geoJSON(geoJson, {
            style: {
                color: '#000000',
                opacity: 1,
                fillColor: chosenColor || '#000000',
                fillOpacity: 1,
            },
        }).addTo(map);
    } else {
        console.log('No data found');
    }
}

export { getCountryShape };
