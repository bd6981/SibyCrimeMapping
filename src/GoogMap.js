import React, { useState, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./Map.css";
import crimes from "./data.json";
import { Icon } from "@iconify/react";
import peopleRobbery from "@iconify/icons-fa6-solid/people-robbery";
import InfoBox from "./InfoBox";
import { useMainContext } from "./Hooks";




const Marker = ({ children }) => children;

export default function GoogMap() {
  const mapRef = useRef()
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [infoBox, setInfoBox] = useState(null);
  const [loading, setLoading] = useState(false);
  const [renderEvent, setRenderEvent] = useState([]);
  const { setEventData, reRenderMarkers } = useMainContext();


  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await fetch("./data.json");
      if (response.ok) {
        const crimes = await response.json();
      }
      setEventData(crimes);
      setRenderEvent(crimes);
      setLoading(false);
    };

    fetchEvents(crimes);
  }, []);
  
  const points = crimes.map((crime) => ({
    // type: "FeatureCollection",
    // features: [{
        type: "Feature",
       
        properties: {
            cluster: false,
            crimeId: crime.report_number,
            crimeTitle: crime.description,
            crimeDate: crime.report_date,
            crimeOffenseDate: crime.offense_start,
            crimeDay: crime.week_day,
            crimeLocation: crime.location,
            crimeLocationType: crime.location_type,
            crimeNeighborhood: crime.neighborhood,
            crimeVictims: crime.victims,
            crimeCrime_against: crime.crime_against,
            crimeFirearm: crime.firearm_involved,
            crimePress: crime.press,
            crimeSocial: crime.social,
        },
         geometry: {
            type: "Point",
                coordinates: [parseFloat(crime.longitude), parseFloat(crime.latitude)],
        }
    


//   }]
}));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD2zMgWcSv5eO8fjUWF4b_hcbT6DPKc--A" }}
        defaultCenter={{ lat: 33.716073, lng: -84.353217 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
        onClick={() => {
          setInfoBox(null);
        }}
        onDrag={() => {
          setInfoBox(null);
        }}>
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}>
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.title),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}>
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`crime-${cluster.properties.crimeId}`}
              lat={latitude}
              lng={longitude}>
              <button
                className="crime-marker"
                onClick={() => {
                  setInfoBox({
                    id: cluster.properties.crimeId,
                    description: cluster.properties.crimeTitle,
                    reportDate: cluster.properties.crimeDate,
                    offenseDate: cluster.properties.crimeOffenseDate,
                    day: cluster.properties.crimeDay,
                    location: cluster.properties.location,
                    locationType: cluster.properties.crimeLocationType,
                    neighborhood: cluster.properties.crimeNeighborhood,
                    victim: cluster.properties.crimeVictims,
                    crimeAgainst: cluster.properties.crimeCrime_against,
                    firearm: cluster.properties.crimeFirearm,
                    press: cluster.properties.crimePress,
                    social: cluster.properties.crimeSocial
                  });
                }}>
                <Icon icon={peopleRobbery} alt="crime isnt good"></Icon>
              </button>
            </Marker>
          );
        })}
      </GoogleMapReact>
      {infoBox && <InfoBox className="infoBox" info={infoBox}></InfoBox>}
    </div>
  );
}