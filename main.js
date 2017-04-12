var DOM = {
    CONTENT : document.getElementById("content"),
};


var m = boxes.reduce(function(dict, element){
    dict[element.name] = element;
    return dict;
}, {});

console.log(m);

var itemMap = items.reduce(function (dict, element) {
    dict[element.rfid] = element;
    return dict;
}, {});

var userMap = users.reduce(function (dict, element) {
    dict[element.rfid] = element;
    return dict;
}, {});

function isItem(rfid){
    return itemMap[rfid] !== undefined;
}

function isUser(rfid){
    return userMap[rfid] !== undefined;
}

function drawRFID(boxActivity) {
    console.log(boxActivity.value);
    var html = "<div>";
    if(isItem(boxActivity.value.value)){
        html += "Item " + itemMap[boxActivity.value.value].name + " was scanned";
    }
    else if(isUser(boxActivity.value.value)){
        html += "User " + userMap[boxActivity.value.value].name + " identified";
    }
    else{
        html += "Unknown entity was scanned.";
    }
    html += "</div>";
    return html;
}
function drawWeight(boxActivity) {
    var html = "<div>";
    html += "Box weight changed to: " + Math.floor(boxActivity.value.value);
    html += "</div>";
    return html;

}
function drawActivity(boxActivity) {
    var html = "<div>";
    html += "Box was active";
    html += "</div>";
    return html;
}
function drawBoxActivity(boxActivity) {
    var html = "";
    switch (boxActivity.type){
        case "rfid":
            html = drawRFID(boxActivity);
            break;
        case "weight":
            html = drawWeight(boxActivity);
            break;
        case "activity":
            html = drawActivity(boxActivity);
            break;
    }
    return html;
}
function drawActivities(boxActivities) {
    var html = "<h2>Activities</h2>";
    html += "<div class=activities>";
    for(var a = 0; a < boxActivities.length; a++){
        html += drawBoxActivity(boxActivities[a]);
    }
    html += "</div>";
    return html;
}
function drawBox(boxId, boxActivities){
    var html = "";
    html += "<div class=box>";
    html += "<h1>" + boxId + "</h1>";
    html += drawActivities(boxActivities);
    html += "</div>";
    return html;
}

function getBoxActivities(rfid, weight, activity, boxId) {
    var activities = rfid.filter(function(value){
        return value.box === boxId;
    }).map(function(value){
        return {
            type:"rfid",
            value: value,
            created:new Date(value.created),
        }
    });
    Array.prototype.push.apply(activities,
        weight.filter(function(value){
        return value.box === boxId;
    }).map(function(value){
        return {
            type:"weight",
            value: value,
            created:new Date(value.created),
        }
    }));
    Array.prototype.push.apply(activities,
        activity.filter(function(value){
        return value.box === boxId;
    }).map(function(value){
        return {
            type:"activity",
            value: value,
            created: new Date(value.created),
        }
    }));
    activities.sort(function (a,b) {
        return a.created - b.created;

    });
    return activities;
}
DOM.CONTENT.innerHTML += drawBox("s001", getBoxActivities(rfid, weight, activity, "s001"));
DOM.CONTENT.innerHTML += drawBox("s002", getBoxActivities(rfid, weight, activity, "s002"));
DOM.CONTENT.innerHTML += drawBox("s003", getBoxActivities(rfid, weight, activity, "s003"));
DOM.CONTENT.innerHTML += drawBox("s004", getBoxActivities(rfid, weight, activity, "s004"));