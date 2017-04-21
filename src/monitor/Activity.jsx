import React from 'react';

export default ({activity, key}) => {
    switch (activity.type) {
        case "rfid":
            switch (activity.value.type){
                case "item":
                    return <div key={key}>Item {activity.value.item.name} identified</div>;
                case "user":
                    return <div key={key}>User {activity.value.user.name} identified</div>;
                default:
                    return <div key={key}>Unknown user or item.</div>;
            }
        case "weight":
            let weight = Math.floor(activity.value.value);
            return <div key={key}>Box weight changed to {weight}</div>;
        case "activity":
            return <div key={key}>The box was moved</div>;
        default:
            return <div key={key}>Unknown activity</div>
    }
}