import React from 'react';

export default ({activity, key}) => {
    let c = "activity";
    if(activity.hasOwnProperty("first") && activity.first){
        c = "activity first";
    }
    switch (activity.type) {
        case "rfid":
            switch (activity.value.type){
                case "item":
                    return <div className={c} key={key}>Item {activity.value.item.name} identified</div>;
                case "user":
                    return <div className={c} key={key}>User {activity.value.user.name} identified</div>;
                default:
                    return <div className={c} key={key}>Unknown user or item.</div>;
            }
        case "weight":
            let weight = Math.floor(activity.value.value);
            return <div className={c} key={key}>Box weight changed to {weight}</div>;
        case "activity":
            return <div className={c} key={key}>The box was moved</div>;
        default:
            return <div className={c} key={key}>Unknown activity</div>
    }
}