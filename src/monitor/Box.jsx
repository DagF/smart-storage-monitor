import React from 'react';

import Activity from './Activity';

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
        return <Activity activity={activity} key={key} />
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