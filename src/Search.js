import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React, { useRef, useState, useEffect } from "react";
import { useMainContext } from "./Hooks.js";
import './Map.css'
function Search(props) {
  const [storeSelection, setStoreSelection] = useState("All");
  const { crimeData, setSelectedCrime, setReRenderMarkers } = useMainContext();
  const [matchCrime, setMatchCrime] = useState(crimeData);

  const searchBox = useRef();
  const optionBox = useRef();

    const filterCrimeData = crimeData => {
      let filteredCrimeData = [...crimeData];
      if (storeSelection !== "All") {
        filteredCrimeData = filteredCrimeData.filter(
          (crime) => crime.description === storeSelection
        );
      }
     
      return filteredCrimeData;
    };

  const userSearch = (searchQuery, crimeData) => {
    let crimeMatch = [];
    let filteredCrimeData = filterCrimeData(crimeData)
    
    if (searchQuery.length > 0 && filteredCrimeData) {
      for (const crime in crimeData) {
        let crimeTitle = filteredCrimeData[crime].title.toLowerCase();
        if (crimeTitle.indexOf(searchQuery) !== -1) {
          crimeMatch.push(filteredCrimeData[crime]);
        }
      }
      if (crimeMatch.length === 0) {
        crimeMatch = [{ title: "no results", properties: [{ title: " "}] }];
      }
      setMatchCrime(crimeMatch);
    } else {
      setMatchCrime([filteredCrimeData]);
    }
  }
  useEffect(() => {
    let filteredCrimeData = filterCrimeData(crimeData);
    setReRenderMarkers (filteredCrimeData);
    userSearch(searchBox.current.value.toLowerCase(), filteredCrimeData);


  },
    [storeSelection])
 
  return (
    <>
      <section className="search-container">
        <header>Select Crimes By Type:</header>
            <select
            className="option-container"
            ref={optionBox}
            onChange={() => {
              setStoreSelection(optionBox.current.value);
            }}>
            <option value="All">All</option>
            <option value="Murder & Nonnegligent Manslaughter">
              Murder & Nonnegligent Manslaughter</option>
          <option value="Kidnapping/Abduction">Kidnapping/Abduction</option>
          <option value="Rape">Rape</option>
          <option value="Sodomy">Sodomy</option>
          <option value="Fondling">Fondling</option>
          <option value="Robbery">Robbery</option>
          <option value="Aggravated Assault">Aggravated Assault</option>
          <option value="Simple Assault">Simple Assault</option>
          <option value=" Intimidation"> Intimidation</option>
          <option value="Burglary/Breaking & Entering">
            Burglary/Breaking & Entering</option>
          <option value="Shoplifting">Shoplifting</option>
          <option value="Theft From Building">Theft From Building</option>
          <option value="Theft From Coin-Operated Machine or Device">
            Theft From Coin-Operated Machine or Device</option>
          <option value="Theft From Motor Vehicle">
            Theft From Motor Vehicle</option>
          <option value=" Theft of Motor Vehicle Parts or Accessories">{" "}
            Theft of Motor Vehicle Parts or Accessories</option>
          <option value="All Other Larceny">All Other Larceny</option>
          <option value="Motor Vehicle Theft">Motor Vehicle Theft</option>
          <option value=" Counterfeiting/Forgery">{" "}Counterfeiting/Forgery</option>
          <option value="False Pretenses/Swindle/Confidence Game">
            False Pretenses/Swindle/Confidence Game</option>
          <option value=" Credit Card/Automated Teller Machine Fraud">{" "}Credit Card/Automated Teller Machine Fraud</option>
          <option value=" Impersonation"> {" "}Credit Card/Automated Teller Impersonation</option>
          <option value="Welfare Fraud">Welfare Fraud</option>
          <option value="Wire Fraud">Wire Fraud</option>
          <option value="Identity theft">Identity theft</option>
          <option value="Embezzlement">Embezzlement</option>
          <option value=" Stolen Property Offenses">{" "}Stolen Property Offenses</option>
          <option value="Destruction/Damage/Vandalism of Property">Destruction/Damage/Vandalism of Property</option>
          <option value="Drug/Narcotic Violations">Drug/Narcotic Violations</option>
          <option value="Operating/Promoting/Assisting Gambling">Operating/Promoting/Assisting Gambling</option>
          <option value="Pornography/Obscene Material">Pornography/Obscene Material</option>
          <option value="Weapon Law Violations">Weapon Law Violations</option>
          <option value="Animal Cruelty"> Animal Cruelty</option>
        </select>
      </section>

      <section className="search-container">
        <p>Search</p>
        <input
          type="text"
          ref={searchBox}
          onKeyUp={() => {
            let searchQuery = searchBox.current.value.toLowerCase();
            setTimeout(() => {
              if (searchQuery === searchBox.current.value.toLowerCase()) {
                userSearch(searchQuery, crimeData);
              }
            }, 300);
          }}
          ref={searchBox}/>
      </section>

      <table className="search-table">
        <tr>
          <th style={{ width: "60%" }}>Title</th>
          <th style={{ width: "50%" }}>Location</th>
          <th style={{ width: "80%" }}>Date</th>
        </tr>
        {matchCrime.map(crime => {
          return (
            <tr key={crime.id}>
              <td>{crime.title}</td>
              <td>{crime.title}</td>
              {crime.title ? (
                <td>
                  <a
                    href="#"
                    onClick={() => {
                      setSelectedCrime(crime);
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
      </table>
     
    </>
  );
}
export default Search;
