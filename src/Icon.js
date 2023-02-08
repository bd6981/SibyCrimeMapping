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

function customMarkers ({lat, lng, onClick, id}) {
    let renderIcon = null;
    if (code === '09A'){
        renderIcon = robberMask
        //;Murder & Nonnegligent Manslaughter
    }else if (code === '100'){
        renderIcon = robberMask
        //;Kidnapping/Abduction
    }else if (code === '11A'){
        renderIcon = robberMask
        //;Rape
    }else if (code === '11B'){
        renderIcon = robberMask
        //;Sodomy
    }else if (code === '11D'){
        renderIcon = robberMask
        //;Fondling 
    }else if (code === '120'){
        renderIcon = robberMask
        //;Robbery
    }else if (code === '13A'){
        renderIcon = robberMask
        //;Aggravated Assault
    }else if (code === '13B'){
        renderIcon = robberMask
        //;Simple Assault
    }else if (code === '13C'){
        renderIcon = robberMask
        //;Intimidation
    }else if (code === '220'){
        renderIcon = robberMask
        //;Burglary/Breaking & Entering
    }else if (code === '23C'){
        renderIcon = robberMask
        //;Shoplifting
    }else if (code === '23D'){
        renderIcon = robberMask
        //;Theft From Building
    }else if (code === '23E'){
        renderIcon = robberMask
        //;Theft From Coin-Operated Machine or Device
    }else if (code === '23F'){
        renderIcon = robberMask
        //;Theft From Motor Vehicle
    }else if (code === '23G'){
        renderIcon = robberMask
        //;Theft of Motor Vehicle Parts or Accessories
    }else if (code === '23H'){
        renderIcon = robberMask
        //;All Other Larceny
    }else if (code === '240'){
        renderIcon = robberMask
        //;Motor Vehicle Theft
    }else if (code === '250'){
        renderIcon = robberMask
        //;Counterfeiting/Forgery
    }else if (code === '26A'){
        renderIcon = robberMask
        //;False Pretenses/Swindle/Confidence Game
    }else if (code === '26B'){
        renderIcon = robberMask
        //;Credit Card/Automated Teller Machine Fraud
    }else if (code === '26C'){
        renderIcon = robberMask
        //;Impersonation
    }else if (code === '26D'){
        renderIcon = robberMask
        //;Welfare Fraud
    }else if (code === '26E'){
        renderIcon = robberMask
        //;Wire Fraud
    }else if (code === '26F'){
        renderIcon = robberMask
        //;Identity theft
    }else if (code === '270'){
        renderIcon = robberMask
        //;Embezzlement
    }else if (code === '280'){
        renderIcon = robberMask
        //;Stolen Property Offenses
    }else if (code === '290'){
        renderIcon = robberMask
        //;Destruction/Damage/Vandalism of Property
    }else if (code === '35A'){
        renderIcon = robberMask
        //;Drug/Narcotic Violations
    }else if (code === '35B'){
        renderIcon = robberMask
        //;Drug Equipment Violations
    }else if (code === '39B'){
        renderIcon = robberMask
        //;Operating/Promoting/Assisting Gambling
    }else if (code === '370'){
        renderIcon = robberMask
        //;Pornography/Obscene Material
    }else if (code === '520'){
        renderIcon = robberMask
        //;Weapon Law Violations
    }else (code === '720'){
        renderIcon = robberMask
        //;Animal Cruelty
    }
    }
