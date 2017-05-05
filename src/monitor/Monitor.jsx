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

        let lastItem = "1970-01-01T00:00:00.000000Z";
        if(this.props.events.length){
            lastItem =this.props.events[this.props.events.length - 1].created
        }
        this.props.dataFetch(lastItem);
        this.timeout = setTimeout(() => {
            this.startPoll()
        }, 1000);
    }

    render() {
        let box = ["s002"];
        let boxes = box.map((name, i) => {
            let filteredActivities = this.props.events.filter((activity) => {
                return activity.box === name;
            });
            return <Box key={i} name={name} activities={filteredActivities}/>
        });
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
