import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: "lets's hit the beach",
        iconName: " massive sun icon"
    },
    winter: {
        text: "Burr It's cold",
        iconName: "icon-right massive snowflake icon"
    }
}

const getSeason = (lat, month) => {
    if (month>2 && month<9){
        return lat>0?'summer':'winter';
    } else {
        return lat>0? 'winter':'summer';
    }
}
 
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName}`}/>
          <h1>{text}</h1>
          <i className={`icon-right ${iconName}`}/>
        </div>
    )
}

export default SeasonDisplay
