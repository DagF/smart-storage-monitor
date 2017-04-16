import React from 'react';
import {connect} from 'react-redux';

import Box from './Box'

class Monitor extends React.Component {
    componentDidMount() {
    }

    render() {
        let box = ["s002", "s001"];
        let boxes = box.map((name, i) => {

            let filteredActivities = this.props.activities.filter((activity) => {
                return activity.value.box === name;
            });
            return <Box key={i} name={name} activities={filteredActivities}/>
        });
        console.log(boxes);
        return (
            <div id="boxes">
                {boxes}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    //TODO: do this in the reducer
    //TODO: populate the rfid event with a user or a item in the reducer as well
    let activities = state.monitor.rfid.map(function (value) {
        return {
            type: "rfid",
            value: value,
            created: new Date(value.created),
        }
    });
    Array.prototype.push.apply(activities,
        state.monitor.weight.map(function (value) {
            return {
                type: "weight",
                value: value,
                created: new Date(value.created),
            }
        }));
    Array.prototype.push.apply(activities,
        state.monitor.activity.map(function (value) {
            return {
                type: "activity",
                value: value,
                created: new Date(value.created),
            }
        }));
    activities.sort(function (a, b) {
        return a.created - b.created;

    });
    return {
        users: state.monitor.users,
        items: state.monitor.items,
        boxes: state.monitor.boxes,
        rfid: state.monitor.rfid,
        weight: state.monitor.weight,
        activity: state.monitor.activity,
        activities,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Monitor);
