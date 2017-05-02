const initialState = {
    boxes: [
        {
            "uuid": "4cae8009-c088-4676-9b07-0da7dbbbec9a",
            "name": "test"
        },
        {
            "uuid": "91a337d1-9821-4348-b76e-074ee66cbed7",
            "name": "test2"
        },
        {
            "uuid": "686dda19-28d5-4335-8fd5-695318555a18",
            "name": "abc"
        },
        {
            "uuid": "ee319240-367d-4c85-993a-b8e9da1420f3",
            "name": "s001"
        },
        {
            "uuid": "d31d00b7-8ad3-45d4-9614-8c186cd839da",
            "name": "s002"
        },
        {
            "uuid": "c844e209-61fc-4571-870c-c28bbc19cdf0",
            "name": "s003"
        },
        {
            "uuid": "d1950acc-2f21-4c05-a405-55dcfbf4e7e1",
            "name": "s004"
        },
        {
            "uuid": "af1f422d-443d-48d6-9277-1c5405a1b299",
            "name": "s005"
        },
        {
            "uuid": "df90a806-4e0b-47a1-a935-f8b95040397d",
            "name": "s006"
        },
        {
            "uuid": "bf3ea9e4-82f3-48f5-a5d1-67da3e8d0317",
            "name": "s007"
        },
        {
            "uuid": "e8c861f6-323d-4f3a-bb7a-ace1d1822bc7",
            "name": "s008"
        },
        {
            "uuid": "c08965a1-eb93-44d2-993d-51d19a9227f6",
            "name": "s009"
        },
        {
            "uuid": "5e368ad6-3133-43da-959a-3cefe48b065a",
            "name": "s010"
        },
        {
            "uuid": "be7bccda-04de-431c-810b-9fcb8474c41d",
            "name": "s011"
        }
    ],
    items: [
        {
            "uuid": "ccbf95fd-4512-48fd-86ea-c1452c04bcfb",
            "name": "test",
            "description": "der",
            "created": "2017-04-02T14:10:10.169334Z",
            "weight": 8.0,
            "full_weight": 9.0,
            "empty_weight": 8.0,
            "type": "PAR",
            "rfid": "aa"
        },
        {
            "uuid": "a1f568f4-4a38-48e3-a506-fc6698adb5f9",
            "name": "test1",
            "description": "der",
            "created": "2017-04-02T14:10:18.165173Z",
            "weight": 8.0,
            "full_weight": 9.0,
            "empty_weight": 8.0,
            "type": "CON",
            "rfid": "ab"
        },
        {
            "uuid": "98b3c78c-73c3-472b-8d9b-a5a2d49dccf9",
            "name": "test2",
            "description": "der",
            "created": "2017-04-02T14:10:23.432586Z",
            "weight": 8.0,
            "full_weight": 9.0,
            "empty_weight": 8.0,
            "type": "TOO",
            "rfid": "bb"
        },
        {
            "uuid": "f34cce55-a232-4598-8c44-eadebcca7eb5",
            "name": "test3",
            "description": "der",
            "created": "2017-04-02T14:10:32.274484Z",
            "weight": 8.0,
            "full_weight": 9.0,
            "empty_weight": 8.0,
            "type": "PRO",
            "rfid": null
        }
    ],
    users: [
        {
            "uuid": "394579fa-8442-4842-a9a6-ff61a65f89ae",
            "name": "Dag",
            "rfid": "E2 46 4B A0",
            "created": "2017-04-02T14:09:47.311793Z"
        },
        {
            "uuid": "394579fa-8442-4842-a9a6-ff61a65f89ae",
            "name": "Sivert",
            "rfid": "5A AB 8F 61",
            "created": "2017-04-02T14:09:47.311793Z"
        }
    ],
    isFetching: false,
    events: []
};
// TODO: load boxes from server
// TODO: load items from server
// TODO: load users from server
initialState.userMap = initialState.users.reduce((map, user) => {
    map[user.rfid] = user;
    return map;
}, {});
initialState.itemMap = initialState.items.reduce((map, item) => {
    map[item.rfid] = item;
    return map;
}, {});

export default (state = initialState, action) => {


    switch (action.type) {
        case "fetch":
            return {...state, isFetching: true};
        case "gotdt":
            let events = action.events.map((event) => {
                if (event.type === "rfid") {
                    if (state.userMap[event.value.value]) {
                        event.value.type = "user";
                        event.value.user = state.userMap[event.value.value];
                    }
                    else if (state.itemMap[event.value.value]) {
                        event.value.type = "item";
                        event.value.item = state.itemMap[event.value.value];
                    }
                    else {
                        event.value.type = "unknown";
                    }
                }
                return event;
            });
            return {...state, isFetching: false, events: [...state.events, ...events]};
        case "dntgetdt":
            //dntgetdt
            return {...state, isFetching: false};
        default:
            return state;
    }
}