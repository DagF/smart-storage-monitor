import React from "react";
import {connect} from "react-redux";

import Box from "./Box";
import {dataFetch} from "./MonitorActions";

//http://notjoshmiller.com/ajax-polling-in-react-with-redux/

class Monitor extends React.Component {
    componentDidMount() {
        clearTimeout(this.timeout);

        if (!this.props.isFetching) {
            this.startPoll();
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }


    startPoll() {
        this.props.dataFetch("1970-01-01T17:21:02.135853Z");
        /*this.timeout = setTimeout(() => {
            this.startPoll()
        }, 1000);*/
    }

    render() {
        let box = ["s002", "s004", "s003", "s001"];
        let boxes = box.map((name, i) => {
            let filteredActivities = this.props.events.filter((activity) => {
                console.log(activity.box + " === " + name + " = " + activity.box === name)
                return activity.box === name;
            });
            return <Box key={i} name={name} activities={filteredActivities}/>
        });
        console.log(boxes)
        return (
            <div id="boxes">
                {boxes}
            </div>

        )
        //test
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.monitor.users,
        items: state.monitor.items,
        boxes: state.monitor.boxes,
        events: state.monitor.events,
        isFetching: state.monitor.isFetching,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dataFetch: (newer_than) => {
            dataFetch(dispatch, newer_than);
        }
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Monitor);
