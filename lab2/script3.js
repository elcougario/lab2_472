mapboxgl.accessToken = 'pk.eyJ1IjoiYmVybjY2IiwiYSI6ImNsZG0xMjBqdTA0eWMzeG81Mzk4NjFsMWQifQ.9POsafO8U6TU5MkjHuOZMA'; // public map token from your Mapbox account 
const map3 = new mapboxgl.Map({
 container: 'NewWonder', // div container found 'NewWonder.html'
 style:'mapbox://styles/bern66/cle3kvhv9000101mrb2cnxhvg', //Selects style from link in mapbox from your GeoJson upload (change style)
 center: [-88.56864508911947,20.682968095660243], // starting (change to center of the world)
 zoom: 9, // starting zoom
});

map.on('load', () => {

map.addSource('Countries',{
    'type':'vector',
    'url': 'mapbox://bern66.beyvdrvw'   //tilset link from mapbox (insert). Created from shapefiles from
})
map.addLayer({
    'id': 'Countries-vect',
    'type': 'fill',
    'source': 'Countries', //must match source ID from addSource method
    'paint': {
    'fill-color': '#888888',
    'fill-opacity': 0.4,
    'fill-outline-color': 'black'
    },
    'source-layer': 'NewWonders1-2tkzn2' //name of layer. Get this from mapbox tileset page
    },
    'Countries-vect' //Drawing order - place below points
    )
});
