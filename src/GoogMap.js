import React, { useState, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./Map.css";
import crimes from "./data.json";
import { Icon } from "@iconify/react";
import peopleRobbery from "@iconify/icons-fa6-solid/people-robbery";
import InfoBox from "./InfoBox";
import { useMainContext } from "./Hooks";
import LocateMarker from './LocateMarker.js'




const Marker = ({ children }) => children;

export default function GoogMap() {
    const {selectedEvent} = useMainContext()
  const mapRef = useRef()
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [infoBox, setInfoBox] = useState(null);
  const [loading, setLoading] = useState(false);
  const [renderEvent, setRenderEvent] = useState([]);
  const { setEventData, reRenderMarkers } = useMainContext();


  const eventDataIndex = {
    '09A': 'Murder & Nonnegligent Manslaughter',
    '100': 'Kidnapping/Abduction',
    '11A': 'Rape',
    '11B': 'Sodomy',
    '11D': 'Fondling', 
    '120': 'Robbery',
    '13A': 'Aggravated Assault',
    '13B': 'Simple Assault',
    '13C': 'Intimidation',
    '220': 'Burglary/Breaking & Entering',
    '23C': 'Shoplifting',
    '23D': 'Theft From Building',
    '23E': 'Theft From Coin-Operated Machine or Device',
    '23F': 'Theft From Motor Vehicle',
    '23G': 'Theft of Motor Vehicle Parts or Accessories',
    '23H': 'All Other Larceny',
    '240': 'Motor Vehicle Theft',
    '250': 'Counterfeiting/Forgery',
    '26A': 'False Pretenses/Swindle/Confidence Game',
    '26B': 'Credit Card/Automated Teller Machine Fraud',
    '26C': 'Impersonation',
    '26D': 'Welfare Fraud',
    '26E': 'Wire Fraud',
    '26F': 'Identity theft',
    '270': 'Embezzlement',
    '280': 'Stolen Property Offenses',
    '290': 'Destruction/Damage/Vandalism of Property',
    '35A': 'Drug/Narcotic Violations',
    '35B': 'Drug Equipment Violations',
    '39B': 'Operating/Promoting/Assisting Gambling',
    '370': 'Pornography/Obscene Material',
    '520': 'Weapon Law Violations',
    '720': 'Animal Cruelty'
  }
//array of keys 
let eventDataIndexNum = Object.keys(eventDataIndex);
eventDataIndexNum = eventDataIndexNum.map(index => Number(index));


//keyarray
//cluster
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
  //geo feature
  const points = crimes.map((crime) => ({
        type: "Feature",
       
        properties: {
            cluster: false,
            crimeId: crime.report_number,
            crimeCode: crime.code,
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

//cluster
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });
useEffect (() => {
    if (selectedEvent !== null){
        const [longitude, latitude] = selectedEvent.geometry[0].coordinates;
        mapRef.current.panTo({lat:latitude, lng:longitude});
        mapRef.current.setZoom(10);
    }
},[selectedEvent])
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD2zMgWcSv5eO8fjUWF4b_hcbT6DPKc--A" }}
        defaultCenter={{ lat: 33.716073, lng: -84.353217 }}
        defaultZoom={12}
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
           <Marker>
            <LocateMarker
              key={`crime-${cluster.properties.crimeId}`}
              lat={latitude}
              lng={longitude}>
              <button
                className="crime-marker"
                onClick={() => {
                  setInfoBox({
                    id: cluster.properties.crimeId,
                    code: cluster.properties.crimeCode,
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
                    <Icon icon={peopleRobbery}/>
                </button>
                <Icon icon={peopleRobbery}/>
            </LocateMarker>
        
        </Marker>
   
);
        })
    }
    
      </GoogleMapReact>
      {infoBox && <InfoBox className="infoBox" info={infoBox}></InfoBox>}
    </div>
    
  );
}