 /* Second WebMap-New Wonder */

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVybjY2IiwiYSI6ImNsZG0xMjBqdTA0eWMzeG81Mzk4NjFsMWQifQ.9POsafO8U6TU5MkjHuOZMA'; // public map token from your Mapbox account 
const map = new mapboxgl.Map({
 container: 'NewWonder', // div container found 'NewWonder.html'
 style:'mapbox://styles/bern66/cle3kvhv9000101mrb2cnxhvg', //My custom style from mapbox
 center: [-88.56864508911947,20.682968095660243], // starting position is Chichen Itza
 zoom: 5, // zoom
});

map.on('load', () => {

    map.addSource('NewWonders', {
        type: 'geojson',
        data: {

           /*Geographic Locations of NewWonders*/
                "type": "FeatureCollection",
                "features": [
                  {
                    "type": "Feature",
                    "properties": {
                    "name": "Chichen Itza"
                    },
                    "geometry": {
                      "coordinates": [
                        -88.56864508911947,
                        20.682968095660243
                      ],
                      "type": "Point"
                    }
                  },
                  {
                    "type": "Feature",
                    "properties": {
                    "name":"Rome Colosseum"
                    },
                    "geometry": {
                      "coordinates": [
                        12.492206511865504,
                        41.89059299331748
                      ],
                      "type": "Point"
                    }
                  },
                  {
                    "type": "Feature",
                    "properties": {
                    "name":"Great Wall of China"
                    },
                    "geometry": {
                      "coordinates": [
                        116.53852172137641,
                        40.41626093595181
                      ],
                      "type": "Point"
                    }
                  },
                  {
                    "type": "Feature",
                    "properties": {
                    "name":"Christ the Redeemer"
                    },
                    "geometry": {
                      "coordinates": [
                        -43.21108192511821,
                        -22.952247416191398
                      ],
                      "type": "Point"
                    }
                  },
                  {
                    "type": "Feature",
                    "properties": {
                    "name":"Machu Picchu"
                    },
                    "geometry": {
                      "coordinates": [
                        -72.54527308136444,
                        -13.164173671354575
                      ],
                      "type": "Point"
                    }
                  },
                  {
                    "type": "Feature",
                    "properties": {
                    "name":"Petra"
                    },
                    "geometry": {
                      "coordinates": [
                        35.44445131861758,
                        30.32693480123848
                      ],
                      "type": "Point"
                    }
                  },
                  {
                    "type": "Feature",
                    "properties": {
                    "name":"Taj Mahal"
                    },
                    "geometry": {
                      "coordinates": [
                        78.04216158465852,
                        27.17466673736
                      ],
                      "type": "Point"
                    }
                  }
                ]
              }
            });
                
            
            map.addLayer({
                'id': 'NewWonders-pnts',
                'type': 'circle',
                'source': 'NewWonders',
                'paint': {
                    'circle-radius': 6,
                    'circle-color': '#016027'
                }
            });
//I do not undestand what I am doing wrong here to be quite honest. I have tried a lot of things and nothing shows up like I want to.
            map.addSource('Countries',{
                'type':'vector',
                'url': 'mapbox://bern66.beyvdrvw'   //tilset link from mapbox (insert). Created from shapefiles from
            })
            map.addLayer({
                'id': 'Countries-vect',
                'type': 'fill',
                'source': 'Countries', //Source ID
                'paint': {
                'fill-color': '#888888',
                'fill-opacity': 0.4,
                'fill-outline-color': 'black'
                },
                'source-layer': 'NewWonders1-2tkzn2' //name of layer. Get this from mapbox tileset page
                },
                'Countries-vect' //Drawing order 
                );
            

 /* ADD POPUPS TO THE NEW WONDERS POINTS LAYERS */
 map.on('click', 'NewWonders-pnts',  (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.name;

    // Pop-up formation for New Wonders
    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML('<h3>' + name + '</h3>')
        .addTo(map);
 });

})


        
