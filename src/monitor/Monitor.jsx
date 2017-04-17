import React from 'react';
import {connect} from 'react-redux';

import Box from './Box'

class Monitor extends React.Component {
    componentDidMount() {
    }

    render() {
        let box = ["s002","s004","s003", "s001"];
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
    return {
        users: state.monitor.users,
        items: state.monitor.items,
        boxes: state.monitor.boxes,
        rfid: state.monitor.rfid,
        weight: state.monitor.weight,
        activity: state.monitor.activity,
        activities: state.monitor.activities,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Monitor);
