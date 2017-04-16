import React from 'react';

const Box = ({name, activities}) => {
    /*

     <div>

     <div>Box weight changed to: 353</div>
     <div>User Dag identified</div>
     <div>Box weight changed to: 727</div>
     <div>Box weight changed to: 555</div>
     <div>Box weight changed to: 3</div>
     <div>Box weight changed to: 613</div>
     <div>Box weight changed to: 732</div>
     </div>*/
    let renderedActivities = activities.map((activity, key) => {
        switch (activity.type) {
            case "rfid":
                return <div key={key}>User identified</div>;
            case "weight":
                let weight = Math.floor(activity.value.value);
                return <div key={key}>Box weight changed to {weight}</div>;
            case "activity":
                return <div key={key}>The box was moved</div>;
            default:
                return <div key={key}>Unknown activity</div>

        }
    });
    return (
        <div className="box">
            <h1>{name}</h1>
            <h2>Activities</h2>
            <div className="activities">
                {renderedActivities}
            </div>
        </div>
    )
};

export default Box;