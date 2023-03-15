import React, { useState, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./Map.css";
import events from "./data.json";
import { Icon } from "@iconify/react";
import peopleRobbery from "@iconify/icons-fa6-solid/people-robbery";
import InfoBox from "./InfoBox";
import { useMainContext } from "./Hooks";
import LocateMarker from './LocateMarker.js'
import Date from "./Date.js";

const Marker = ({ children }) => children;

export default function GoogMap(center, eventData, lat, lng) {
  const { selectedEvent } = useMainContext();
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [infoBox, setInfoBox] = useState(null);


//JSON index
  const eventDataIndex = {
    '09A': "Murder & Nonnegligent Manslaughter",
    '100': "Kidnapping/Abduction",
    '11A': "Rape",
    '11B': "Sodomy",
    '11D': "Fondling",
    '120': "Robbery",
    "13A": "Aggravated Assault",
    "13B": "Simple Assault",
    "13C": "Intimidation",
    '220': "Burglary/Breaking & Entering",
    "23C": "Shoplifting",
    "23D": "Theft From Building",
    "23E": "Theft From Coin-Operated Machine or Device",
    "23F": "Theft From Motor Vehicle",
    "23G": "Theft of Motor Vehicle Parts or Accessories",
    "23H": "All Other Larceny",
    '240': "Motor Vehicle Theft",
    '250': "Counterfeiting/Forgery",
    "26A": "False Pretenses/Swindle/Confidence Game",
    "26B": "Credit Card/Automated Teller Machine Fraud",
    "26C": "Impersonation",
    "26D": "Welfare Fraud",
    "26E": "Wire Fraud",
    "26F": "Identity theft",
    '270': "Embezzlement",
    '280': "Stolen Property Offenses",
    '290': "Destruction/Damage/Vandalism of Property",
    "35A": "Drug/Narcotic Violations",
    "35B": "Drug Equipment Violations",
    "39B": "Operating/Promoting/Assisting Gambling",
    '370': "Pornography/Obscene Material",
    '520': "Weapon Law Violations",
    '720': "Animal Cruelty",
  };
  //array of keys
  let eventDataIndexNum = Object.keys(eventDataIndex);
  eventDataIndexNum = eventDataIndexNum.map((index) => Number(index));
 

  //geo feature
  const points = events && events.map((event) => ({
    type: "Feature",

    properties: {
      cluster: false,
      eventId: event.report_number,
      eventCode: event.code,
      eventTitle: event.description,
      eventDate: event.report_date,
      eventOffenseDate: event.offense_start,
      eventDay: event.week_day,
      eventLocation: event.location,
      eventLocationType: event.location_type,
      eventNeighborhood: event.neighborhood,
      eventVictims: event.victims,
      eventEvent_against: event.event_against,
      eventFirearm: event.firearm_involved,
      eventPress: event.press,
      eventSocial: event.social,
    },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(event.longitude), parseFloat(event.latitude)],
    },
  }));

  //cluster
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });
 //called when an a tag is clicked//
  useEffect(() => {
    if (selectedEvent !== null) {
      const [longitude, latitude] = selectedEvent.geometry.coordinates;
      mapRef.current.panTo({ lat: latitude, lng: longitude });
      mapRef.current.setZoom(10);
    }
  }, [selectedEvent]);

  return (
    <div style={{ height: "66vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_KEY }}
        defaultCenter={{ lat: 33.716073, lng: -84.353217 }}
        defaultZoom={12}
        mapTypeId="satellite"
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
          const clusterId = cluster.properties.eventCode;
          if (isCluster) {
            return (
              <Marker
                key={cluster.id}
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
                      supercluster.getClusterExpansionZoom(cluster.code),
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

          if (
            eventDataIndexNum.indexOf(clusterId) !== -1 &&
            cluster.geometry.coordinates.length === 2
          ) {
          }

          return (
            <LocateMarker
              lat={latitude}
              lng={longitude}
              id={clusterId}
              key={cluster.properties.eventId}
              onClick={() => {
                setInfoBox({
                  code: cluster.properties.eventCode,
                  id: cluster.properties.eventId,
                  description: cluster.properties.eventTitle,
                  reportDate: cluster.properties.eventDate,
                  offenseDate: cluster.properties.eventOffenseDate,
                  location: cluster.properties.eventLocation,
                  locationType: cluster.properties.eventLocationType,
                  neighborhood: cluster.properties.eventNeighborhood,
                  victims: cluster.properties.eventVictims,
                  eventAgainst: cluster.properties.Event_against,
                  firearm: cluster.properties.eventFirearm,
                  press: cluster.properties.eventPress,
                  social: cluster.properties.eventSocial,
                });
              }}
            />
          );
        })}
        
      </GoogleMapReact>
      {infoBox && <InfoBox className="infoBox" info={infoBox}></InfoBox>}
     
    </div>
  );

}