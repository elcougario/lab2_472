mapboxgl.accessToken = 'pk.eyJ1IjoiYmVybjY2IiwiYSI6ImNsZG0xMjBqdTA0eWMzeG81Mzk4NjFsMWQifQ.9POsafO8U6TU5MkjHuOZMA'; // public map token from your Mapbox account 
const map = new mapboxgl.Map({
 container: 'OldWonder', // Add div container ID for your map
 style:'mapbox://styles/bern66/cle3kvhv9000101mrb2cnxhvg', //Selects style from link in mapbox from your GeoJson upload (change style)
 center: [31.13418908201885,29.979196055767687], // starting position [long itude, latitude]
 zoom: 9, // starting zoom
});


map.on('load', () => {

    map.addSource('OldWonders', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Great Pyramid of Giza"
                    },
                    "geometry": {
                        "coordinates": [
                            31.13418908201885,
                            29.979196055767687
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Lighthouse of Alexandria"
                    },
                    "geometry": {
                        "coordinates": [
                            29.824670493706265,
                            31.13829837181204
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Colossus of Rhodes"
                    },
                    "geometry": {
                        "coordinates": [
                            27.138905377715957,
                            36.613876220964556
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Mausoleum of Halicarnassus"
                    },
                    "geometry": {
                        "coordinates": [
                            27.42463668733174,
                            37.03670806086441
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Statue of Zeus at Olympia"
                    },
                    "geometry": {
                        "coordinates": [
                            21.629108782411294,
                            37.639406430375246
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Hanging Gardens of Babylon",
                    },
                    "geometry": {
                        "coordinates": [
                            44.419534620511,
                            32.5409001795539
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Temple of Artemis"
                    },
                    "geometry": {
                        "coordinates": [
                            27.363847085243833,
                            37.949680032722114
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    })

    map.addLayer({
        'id': 'OldWonder-pnts',
        'type': 'circle',
        'source': 'OldWonders',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }

//map.addSource -Old wonders country

    });

    /* ADD POPUPS TO THE OLD WONDERS POINTS LAYERS */
    map.on('click', 'OldWonder-pnts', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const name = e.features[0].properties.name;

        // Pop-up creation
        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML('<h3>' + name + '</h3>')
            .addTo(map);
    });

 })




