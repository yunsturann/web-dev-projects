import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L, { Icon, LatLngExpression } from "leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";

import markerIcon from "../public/icons/marker.png";

interface MarkerCluster {
  getChildCount: () => number;
}

// markers
const markers: { geocode: LatLngExpression; popUp: string }[] = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [39.846, 30.385],
    popUp: "Hello, I am Eskişehir",
  },
  {
    geocode: [39.9334, 32.8597],
    popUp: "Hello, I am Ankara",
  },
];

// custom Icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/3524/3524571.png",
  iconUrl: markerIcon,
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster: MarkerCluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: L.point(33, 33, true),
  });
};

const App = () => {
  return (
    <>
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png"
        /> */}
        <MarkerClusterGroup
          chunkedLoading // helps to load large data. increase performance
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>
                {/* TAKES ANY HTML */}
                {/* <h2>{marker.popUp}</h2> */}
                {marker.popUp}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default App;
