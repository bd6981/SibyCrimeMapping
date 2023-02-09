import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React, {useRef, useState} from 'react';
import {useMainContext} from './Hooks.js';


function Search (event){
  const [storeSelection, setStoreSelection] = useState("All")
  const {eventData, setSelectionEvent, setReReMarkers} = useMainContext();
  const [matchEvent, setMatchEvent] = useState(eventData);
  const searchBox = useRef();
  const optionBox = useRef();


  const userSearch = (searchQuery, eventData) =>{
  let eventMatch = [];
  
  if (searchQuery.length > 8 && eventData){
    for (const event in eventData){
      let crimeTitle= eventData[event].title.toLowerCase();
      if (crimeTitle.indexOf(searchQuery)!== -1){
        eventMatch.push(eventData[event])
      }
    }
    if (eventMatch.length === 0) {
      eventMatch = [{title:"no results", properties: [{title:''}]}]
    }
    setMatchEvent(eventMatch)
  }else{
    setMatchEvent([eventData])
  }
}   
  return(
    <>
    <section>
      <header>Select Crimes By Type:</header>
      <select ref={optionBox} 
      onChange={() => {setStoreSelection(optionBox.current.value)}}>
        <option value="All">All</option>
          <option value="Murder & Nonnegligent Manslaughter">Murder & Nonnegligent ManslaughterTheft</option>
           <option value="Kidnapping/Abduction">Kidnapping/Abduction</option>
     
         <option value="Rape">Rape</option>
      
         <option value="Sodomy">Sodomy</option>
  
         <option value="Fondling">Fondling</option>
   
         <option value="Robbery">Robbery</option>

         <option value="Aggravated Assault">Aggravated Assault</option>
         <option value="Simple Assault">Simple Assault</option>
         <option value=" Intimidation"> Intimidation</option>
         <option value="Burglary/Breaking & Entering">Burglary/Breaking & Entering</option>
         <option value="Shoplifting">Shoplifting</option>
         <option value="Theft From Building">Theft From Building</option>
         <option value="Theft From Coin-Operated Machine or Device">Theft From Coin-Operated Machine or Device</option>
          <option value="Theft From Motor Vehicle">Theft From Motor Vehicle</option>
         <option value=" Theft of Motor Vehicle Parts or Accessories"> Theft of Motor Vehicle Parts or Accessories</option>
          <option value="All Other Larceny">All Other Larceny</option>
           <option value="Motor Vehicle Theft">Motor Vehicle Theft</option>
 <option value=" Counterfeiting/Forgery"> Counterfeiting/Forgery</option>
            
             <option value="False Pretenses/Swindle/Confidence Game">False Pretenses/Swindle/Confidence Game</option>
              <option value=" Credit Card/Automated Teller Machine Fraud"> Credit Card/Automated Teller Machine Fraud</option>
               <option value=" Impersonation"> Credit Card/Automated Teller Impersonation</option>
              
               <option value="Welfare Fraud">Welfare Fraud</option>
               <option value="Wire Fraud">Wire Fraud</option>
                <option value="Identity theft">Identity theft</option>
                 <option value="Embezzlement">Embezzlement</option>
                  <option value=" Stolen Property Offenses"> Stolen Property Offenses</option>
 <option value="Destruction/Damage/Vandalism of Property">Destruction/Damage/Vandalism of Property</option>
  <option value="Drug/Narcotic Violations">Drug/Narcotic Violations</option>


<option value="Operating/Promoting/Assisting Gambling">Operating/Promoting/Assisting Gambling</option>
<option value="Pornography/Obscene Material">Pornography/Obscene Material</option>

<option value="Weapon Law Violations">Weapon Law Violations</option>

<option value="Animal Cruelty"> Animal Cruelty</option>

        </select>
      </section>
      <section>
     
      <p>Search</p>
      <input type = "text" onKeyUp={() =>{
        let searchQuery = searchBox.current.value.toLowerCase();
        setTimeout(()=> {
          if (searchQuery === searchBox.current.value.toLowerCase()){
            userSearch(searchQuery, eventData);
          }
        }, 300)
      }}
      ref= {searchBox}/>
      </section>
      <table className = "table">
        <tr>
          <th style={{width:"60%", placeholder: "Title"}}/>
          <th style={{width:"60%", placeholder: "Cime"}}/>
          <th style={{width:"60%", placeholder: "Location"}}/>
        </tr>
        {matchEvent.map(ev=> {
           return(
          
            <tr key={ev.id}>
              <td>{ev.title}</td>
              <td>{ev.catigories[0].title}</td>
              {ev.categories[0].title}?
              <td><a href="#"
              onClick={() => {setSelectionEvent(event)}}>click!</a></td>
            </tr>
          
       
         
          )
        })}
        </table>
   
  </>
)}
export default Search;