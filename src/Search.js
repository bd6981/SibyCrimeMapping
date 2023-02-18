import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React, { useRef, useState, useEffect } from "react";
import { useMainContext } from "./Hooks.js";
import './Map.css'
var event = require('./data.json')

function Search(props) {
  const [storeSelection, setStoreSelection] = useState("All");
  const { eventData, setSelectedEvent, setReRenderMarkers } = useMainContext();
  const [matchEvent, setMatchEvent] = useState(eventData);
  const [value, setValue] = useState("");

  
  const searchBox = useRef();
  const optionBox = useRef();


    const filterEventData = eventData => {  
      let filteredEventData = [];
      if (storeSelection !== "All") {
        filteredEventData = filteredEventData.filter(
          (event) => event.title === storeSelection
        );
      }
     
      return filteredEventData;
    };
//////////event handler on text input 2 arguments /////////////////////
  const userSearch = (searchQuery, eventData) => {
    let eventMatch = [];
    let filteredEventData = filterEventData(eventData)
    //---------------------------------------------------------------------//
    if (searchQuery.length > 0 && eventData) {
      for (const event in eventData) {
        let eventTitle = eventData[event].title.toLowerCase();
        if (eventTitle.indexOf(searchQuery) !== -1) {
          //event match will hold all matched data from loop//
          eventMatch.push(eventData[event]);
        }
      }
////////-------typed in something but didn't match--------//////////
    
      if (eventMatch.length === 0) {
        ///copying format from browser:formatted to retreve data from json///
        eventMatch = [{ title: "no results", properties: [{ title: " "}] }];
      }
      //store event match in this state//
      setMatchEvent(eventMatch);
    } else {
      //clears data from searchbox//
      setMatchEvent([eventData]);
    }
  }
  useEffect(() => {
    let filteredEventData = filterEventData(eventData);
    setReRenderMarkers (filteredEventData);
    userSearch(searchBox.current.value.toLowerCase(), filteredEventData);


  },
    [storeSelection])

  return (
    <>
      <header>
        <h5>Search Through Event Data:</h5>
      </header>
      <section className="search-container">
        <select
          className="option-container"
          ref={optionBox}
          onChange={() => {
            setStoreSelection(optionBox.current.value);
          }}>
          <option value="All">All</option>
          <option value="Murder & Nonnegligent Manslaughter">
            Murder & Nonnegligent Manslaughter
          </option>
          <option value="Kidnapping/Abduction">Kidnapping/Abduction</option>
          <option value="Rape">Rape</option>
          <option value="Sodomy">Sodomy</option>
          <option value="Fondling">Fondling</option>
          <option value="Robbery">Robbery</option>
          <option value="Aggravated Assault">Aggravated Assault</option>
          <option value="Simple Assault">Simple Assault</option>
          <option value=" Intimidation"> Intimidation</option>
          <option value="Burglary/Breaking & Entering">
            Burglary/Breaking & Entering
          </option>
          <option value="Shoplifting">Shoplifting</option>
          <option value="Theft From Building">Theft From Building</option>
          <option value="Theft From Coin-Operated Machine or Device">
            Theft From Coin-Operated Machine or Device
          </option>
          <option value="Theft From Motor Vehicle">
            Theft From Motor Vehicle
          </option>
          <option value=" Theft of Motor Vehicle Parts or Accessories">
            {" "}
            Theft of Motor Vehicle Parts or Accessories
          </option>
          <option value="All Other Larceny">All Other Larceny</option>
          <option value="Motor Vehicle Theft">Motor Vehicle Theft</option>
          <option value=" Counterfeiting/Forgery">
            {" "}
            Counterfeiting/Forgery
          </option>
          <option value="False Pretenses/Swindle/Confidence Game">
            False Pretenses/Swindle/Confidence Game
          </option>
          <option value=" Credit Card/Automated Teller Machine Fraud">
            {" "}
            Credit Card/Automated Teller Machine Fraud
          </option>
          <option value=" Impersonation">
            {" "}
            Credit Card/Automated Teller Impersonation
          </option>
          <option value="Welfare Fraud">Welfare Fraud</option>
          <option value="Wire Fraud">Wire Fraud</option>
          <option value="Identity theft">Identity theft</option>
          <option value="Embezzlement">Embezzlement</option>
          <option value=" Stolen Property Offenses">
            {" "}
            Stolen Property Offenses
          </option>
          <option value="Destruction/Damage/Vandalism of Property">
            Destruction/Damage/Vandalism of Property
          </option>
          <option value="Drug/Narcotic Violations">
            Drug/Narcotic Violations
          </option>
          <option value="Operating/Promoting/Assisting Gambling">
            Operating/Promoting/Assisting Gambling
          </option>
          <option value="Pornography/Obscene Material">
            Pornography/Obscene Material
          </option>
          <option value="Weapon Law Violations">Weapon Law Violations</option>
          <option value="Animal Cruelty"> Animal Cruelty</option>
        </select>
      </section>
{/*-------------------- /////////////////Search box/////////// --------------------*/}
      <section className="search-container">
        <input
          type="text"
          ref={searchBox}
          // value={value}
       
          placeholder={"Search"}
          onKeyUp={() => {
            let searchQuery = searchBox.current.value.toLowerCase();
            //want to wait for user to finish typing below will activate if nothing has been entered within 300 sec//
            setTimeout(() => {
              if (searchQuery === searchBox.current.value.toLowerCase()) {
                userSearch(searchQuery, eventData);
              }
            }, 300);
          }}
          // ref={searchBox}
        />
      </section>
{/*-------------- /////////////Search box end//////////// --------------------*/}
{/* ---------------------/////////////table headers//////////-------------- */}
      <table className="search-table">
        <tbody>
          <tr>
            <th style={{ width: "50%" }}>Title</th>
            <th style={{ width: "60%" }}>Location</th>
            <th style={{ width: "60%" }}>Date</th>
          </tr>
          {matchEvent.map((ev) => {
            return (
              <tr key={ev.id}>
                <td>{ev.title}</td>
                <td>{ev.title}</td>
                {ev.title ? (
                  <td>
                    <a
                      //if the search has no location it will take to blank//
                      href="#"
                      //on click will take user to selected event on map//
                      onClick={() => {
                        setSelectedEvent();
                      }}>
                      click!
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
{/* -----------------////////table end/////////////------------------ */}
    </>
  );
}
export default Search;
