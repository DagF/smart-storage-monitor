import {HOST} from './../App'

const receiveData = (events) => {
    return {
        type: "gotdt",
        events
    }
};

const receiveDataFailed = () => {
    return {
        type: "dntgetdt"
    }
};



export const dataFetch = (dispatch, timestamp) => {
    fetchContent('box/events/?newer_than=' + timestamp, 'GET', {}, dispatch, receiveData, receiveDataFailed);
    dispatch({
        type: "fetch"
    });
};

export function fetchContent(url, method, data, dispatch, success, fail) {
    let request = {
        headers: {
            'Content-Type': 'application/json'
        },
        method,

    };
    if (method !== 'GET' && method !== 'get') {
        request['body'] = JSON.stringify({...data})
    }
    fetch(HOST + url, request).then((response) => {
        return response.json();
    }).then((json) => {
        dispatch(success(json));
    }).catch((e) => {
        console.log(e);
        dispatch(fail());
    });
}