// 09A Murder & Nonnegligent Manslaughter
// 100 Kidnapping/Abduction
// 11A Rape
// 11B Sodomy
// 11D Fondling 
// 120 Robbery
// 13A Aggravated Assault
// 13B Simple Assault
// 13C Intimidation
// 220 Burglary/Breaking & Entering
// 23C Shoplifting
// 23D Theft From Building
// 23E Theft From Coin-Operated Machine or Device
// 23F Theft From Motor Vehicle
// 23G Theft of Motor Vehicle Parts or Accessories
// 23H All Other Larceny
// 240 Motor Vehicle Theft
// 250 Counterfeiting/Forgery
// 26A False Pretenses/Swindle/Confidence Game
// 26B Credit Card/Automated Teller Machine Fraud
// 26C Impersonation
// 26D Welfare Fraud
// 26E Wire Fraud
// 26F Identity theft
// 270 Embezzlement
// 280 Stolen Property Offenses
// 290 Destruction/Damage/Vandalism of Property
// 35A Drug/Narcotic Violations
// 35B Drug Equipment Violations
// 39B Operating/Promoting/Assisting Gambling
// 370 Pornography/Obscene Material
// 520 Weapon Law Violations
// 720 Animal Cruelty

import React from 'react';
import robberMask from '@iconify/icons-mdi/robber-mask';
import { Icon } from '@iconify/react';
import './Map.css'
import robberIcon from "@iconify/icons-game-icons/robber";
import shotgunRounds from '@iconify/icons-game-icons/shotgun-rounds';
import peopleRobbery from "@iconify/icons-fa6-solid/people-robbery";
import gameDie from "@iconify/icons-fluent-emoji/game-die";
import zonePersonAlertSharp from "@iconify/icons-material-symbols/zone-person-alert-sharp";


function LocateMarker ({lat, lng, onClick, id}) {
    let renderIcon = null;
    if (id === '09A') {
        renderIcon = shotgunRounds;
        //;Murder & Nonnegligent Manslaughter
    } else if (id === 100) {
        renderIcon = shotgunRounds
        //;Kidnapping/Abduction
    } else if (id === '11A') {
        renderIcon = zonePersonAlertSharp
        //;Rape
    }else if (id === '11B' ){
        renderIcon = robberMask
        //;Sodomy
    }else if (id === '11D'){
        renderIcon = robberMask
        //;Fondling 
    }else if (id === '120'){
        renderIcon = robberMask
        //;Robbery
    }else if (id === '13A'){
        renderIcon = robberMask
        //;Aggravated Assault
    }else if (id === '13B' ){
        renderIcon = peopleRobbery
        //;Simple Assault
    }else if (id === '13C'){
        renderIcon = peopleRobbery
        //;Intimidation
    }else if (id === '220' ){
        renderIcon = peopleRobbery
        //;Burglary/Breaking & Entering
    }else if (id === '23C'){
        renderIcon = robberMask
        //;Shoplifting
    }else if (id === '23D' ){
        renderIcon = robberMask;
        //;Theft From Building
    }else if (id === '23E' ){
        renderIcon = robberIcon;
        //;Theft From Coin-Operated Machine or Device
    }else if (id === '23F' ){
        renderIcon = robberIcon;
        //;Theft From Motor Vehicle
    }else if (id === '23G' ){
        renderIcon = robberIcon;
        //;Theft of Motor Vehicle Parts or Accessories
    }else if (id === '23H' ){
        renderIcon = robberIcon;
        //;All Other Larceny
    }else if (id === '240'){
        renderIcon = robberIcon;
        //;Motor Vehicle Theft
    }else if (id === '250' ){
        renderIcon = robberIcon;
        //;Counterfeiting/Forgery
    }else if (id === '26A' ){
        renderIcon = gameDie;
        //;False Pretenses/Swindle/Confidence Game
    }else if (id === '26B' ){
        renderIcon = robberMask
        //;Credit Card/Automated Teller Machine Fraud
    }else if (id === '26C' ){
        renderIcon = robberMask
        //;Impersonation
    }else if (id === '26D' ){
        renderIcon = robberMask
        //;Welfare Fraud
    }else if (id === '26E' ){
        renderIcon = robberMask
        //;Wire Fraud
    }else if (id === '26F' ){
        renderIcon = robberMask
        //;Identity theft
    }else if (id === '270' ){
        renderIcon = robberMask
        //;Embezzlement
    }else if (id === '280'){
        renderIcon = robberMask
        //;Stolen Property Offenses
    }else if (id === '290' ){
        renderIcon = robberMask
        //;Destruction/Damage/Vandalism of Property
    }else if (id === '35A' ){
        renderIcon = robberMask
        //;Drug/Narcotic Violations
    }else if (id === '35'){
        renderIcon = robberMask
        //;Drug Equipment Violations
    }else if (id === '39B' ){
        renderIcon = robberMask
        //;Operating/Promoting/Assisting Gambling
    }else if (id === '370' ){
        renderIcon = robberMask
        //;Pornography/Obscene Material
    }else if (id === '520' ){
        renderIcon = robberMask
        //;Weapon Law Violations
    }else if(id === '720' ){
        renderIcon = robberMask
        //;Animal Cruelty
    }
    return (
        <div onClick = {onClick} className= 'iconClick'>
            <button className='button'><Icon icon={renderIcon} height="30px" className= "custom"/>
            </button></div>
    );
}
export default LocateMarker;
