import React from 'react';

import Activity from './Activity';

const Box = ({name, activities}) => {

    let sub_a = activities;
    if(activities.length > 15){
        sub_a=activities.slice(activities.length-15,);
    }
    sub_a.map((item) => {item.first = false;} ,{});
    sub_a.reverse();
    if(sub_a.length > 0){
        sub_a[0].first = true;
    }
    let renderedActivities = sub_a.map((activity, key) => {
        return <Activity activity={activity} key={key} />
    });
    return (
        <div style={{width:'400px', margin:'0 auto'}} className="box">
            <h1>Box: {name}</h1>
            <h2>Activities</h2>
            <div className="activities">
                {renderedActivities}
            </div>
        </div>
    )
};

export default Box;