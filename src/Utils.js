import {HOST} from './App'

// from http://dansnetwork.com/javascript-iso8601rfc3339-date-parser/
// eslint-disable-next-line
Date.prototype.setISO8601 = function (dString) {

    const regexp = /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/;

    if (dString.toString().match(new RegExp(regexp))) {
        let d = dString.match(new RegExp(regexp));
        let offset = 0;

        this.setUTCDate(1);
        this.setUTCFullYear(parseInt(d[1], 10));
        this.setUTCMonth(parseInt(d[3], 10) - 1);
        this.setUTCDate(parseInt(d[5], 10));
        this.setUTCHours(parseInt(d[7], 10));
        this.setUTCMinutes(parseInt(d[9], 10));
        this.setUTCSeconds(parseInt(d[11], 10));
        if (d[12])
            this.setUTCMilliseconds(parseFloat(d[12]) * 1000);
        else
            this.setUTCMilliseconds(0);
        if (d[13] !== 'Z') {
            offset = (d[15] * 60) + parseInt(d[17], 10);
            offset *= ((d[14] === '-') ? -1 : 1);
            this.setTime(this.getTime() - offset * 60 * 1000);
        }
    }
    else {
        this.setTime(Date.parse(dString));
    }
    return this;
};

// From http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

// eslint-disable-next-line
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

export function fetchContent(url, method, data, dispatch, success, fail) {
    const token = localStorage.getItem('token');
    if (!token && url !== 'auth/') throw new Error("You are not logged in!");
    let request = {
        headers: {
            'Content-Type': 'application/json'
        },
        method,

    };
    if(url !== 'auth/'){
        request['headers']['Authorization'] = 'Token ' + token;
    }
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