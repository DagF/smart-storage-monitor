var boxes = [
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
];

var activity = [
    {
        "uuid": "0470cf5c-7eca-4f6e-8e55-5f24055da0dd",
        "box": "test",
        "created": "2017-03-23T13:57:49.453232Z"
    },
    {
        "uuid": "894790f3-2b0b-4b7b-a92a-b2b32a4104ff",
        "box": "abc",
        "created": "2017-03-24T09:07:36.614453Z"
    },
    {
        "uuid": "7a805314-baee-4a3b-980d-b5519f65c033",
        "box": "abc",
        "created": "2017-03-28T15:36:24.976186Z"
    },
    {
        "uuid": "7cf2bde3-58af-44ac-970c-886a21b0cf89",
        "box": "abc",
        "created": "2017-03-28T15:36:33.128516Z"
    },
    {
        "uuid": "5d6d1251-d9da-4cf4-bea2-b2a08396395a",
        "box": "abc",
        "created": "2017-03-28T15:36:37.411385Z"
    },
    {
        "uuid": "2465f2a7-0a28-4564-b907-e45f323acd91",
        "box": "abc",
        "created": "2017-03-28T15:37:17.720616Z"
    },
    {
        "uuid": "ac69361d-a9f7-4160-b198-068a2bb283ab",
        "box": "abc",
        "created": "2017-03-28T15:38:57.161597Z"
    },
    {
        "uuid": "d8ab555a-7a85-44d4-8994-423b278bac3d",
        "box": "abc",
        "created": "2017-03-28T15:38:59.602005Z"
    },
    {
        "uuid": "55176dfc-cb88-47c1-aa26-0fb38d8769f8",
        "box": "abc",
        "created": "2017-03-28T15:39:15.047488Z"
    },
    {
        "uuid": "9948efed-c2f3-4504-861b-51b55d4f2afe",
        "box": "abc",
        "created": "2017-03-28T15:39:33.844005Z"
    },
    {
        "uuid": "5e7a3a47-2e67-410b-b879-67025a87df0b",
        "box": "abc",
        "created": "2017-03-28T15:39:37.989318Z"
    },
    {
        "uuid": "55c59f94-85de-4f98-9d8c-3357289d7823",
        "box": "abc",
        "created": "2017-03-28T15:39:46.296288Z"
    },
    {
        "uuid": "c52c7fa8-00fa-4a7f-977f-30b9d01510ba",
        "box": "abc",
        "created": "2017-03-28T16:12:49.691095Z"
    }
];

var rfid = [
    {
        "uuid": "1d038e08-2069-41bd-bedc-9f300d5eab64",
        "box": "test",
        "value": "hex value",
        "created": "2017-03-23T13:58:31.682002Z"
    },
    {
        "uuid": "96ad74f0-2f16-487d-abeb-9f30fe0178a2",
        "box": "abc",
        "value": "hex value",
        "created": "2017-03-24T09:07:53.089540Z"
    },
    {
        "uuid": "a86f417d-0c2f-4438-848a-cd6fa2620837",
        "box": "abc",
        "value": "hex value",
        "created": "2017-03-24T10:31:47.455653Z"
    },
    {
        "uuid": "1695e0d7-6c15-4dee-9aef-bd9001bc833c",
        "box": "abc",
        "value": "LOGUFH6S3QIIS78X",
        "created": "2017-03-28T15:36:38.557599Z"
    },
    {
        "uuid": "3a8fd746-c635-4ed5-a1fb-0f873565e7c3",
        "box": "abc",
        "value": "NUPCM7FYVUSRVIHO",
        "created": "2017-03-28T15:36:39.692304Z"
    },
    {
        "uuid": "a75400e9-6a27-4df0-a3a8-79af5de00041",
        "box": "abc",
        "value": "X11GQP6JNVHUZC97",
        "created": "2017-03-28T15:36:51.847198Z"
    },
    {
        "uuid": "ae51e464-e4fb-4f57-bc5b-7cecc1725599",
        "box": "abc",
        "value": "G0N94KKQQEJC1HT3",
        "created": "2017-03-28T15:38:56.013067Z"
    },
    {
        "uuid": "714bb2e9-08cb-4f0f-ab6d-8e48788c3e8c",
        "box": "abc",
        "value": "8TT6HTVALLERTMZV",
        "created": "2017-03-28T15:39:01.750457Z"
    },
    {
        "uuid": "78f5961c-cfbc-43cf-abcc-65b11ee63032",
        "box": "abc",
        "value": "0HEE9E7F311T4A65",
        "created": "2017-03-28T15:39:21.198460Z"
    },
    {
        "uuid": "4ffa7f8c-1db5-4b20-bdbe-062a44540a1f",
        "box": "abc",
        "value": "R8HXPIIHU0C33LFT",
        "created": "2017-03-28T15:39:50.458772Z"
    },
    {
        "uuid": "97359c2f-454d-4ca7-a0a6-330153a9c174",
        "box": "abc",
        "value": "R2Q4Y3EIXM8OUA2D",
        "created": "2017-03-28T15:39:51.603516Z"
    },
    {
        "uuid": "d87f56fa-8319-4e87-a94b-d3fc27465525",
        "box": "abc",
        "value": "G78Y4HJ6QLSCPJT9",
        "created": "2017-03-28T15:55:09.760486Z"
    },
    {
        "uuid": "61e52877-fe2d-463f-9ec3-a5cfc37b37aa",
        "box": "abc",
        "value": "LJOJVKJZJ2U881JW",
        "created": "2017-03-28T16:12:08.597409Z"
    },
    {
        "uuid": "7ffb15ed-06c5-49ca-bdd8-aedfb7b096ff",
        "box": "s001",
        "value": "E2 46 4B A0",
        "created": "2017-03-28T17:08:34.960770Z"
    },
    {
        "uuid": "9bc83645-3d9a-4701-abaa-801e3a4be4ab",
        "box": "s002",
        "value": "E2 46 4B A0",
        "created": "2017-03-28T17:11:00.697620Z"
    },
    {
        "uuid": "366acd4f-37a9-4993-a2ce-4617fc46406b",
        "box": "s003",
        "value": "5A AB 8F 61",
        "created": "2017-03-28T17:12:02.158814Z"
    },
    {
        "uuid": "8040f302-ad00-4902-9888-de5f6adb6fc1",
        "box": "s004",
        "value": "E2 46 4B A0",
        "created": "2017-03-28T17:14:17.704913Z"
    },
    {
        "uuid": "4815aca2-3740-4527-927f-7288f740888d",
        "box": "s005",
        "value": "5A AB 8F 61",
        "created": "2017-03-28T17:15:37.315191Z"
    },
    {
        "uuid": "fd2288b4-85e4-47f5-b47a-b18ab1295a2a",
        "box": "s006",
        "value": "5A AB 8F 61",
        "created": "2017-03-28T17:16:28.221122Z"
    },
    {
        "uuid": "9e6dc7e1-f982-4417-b031-7d3aae885737",
        "box": "s006",
        "value": "E2 46 4B A0",
        "created": "2017-03-28T17:16:44.853808Z"
    },
    {
        "uuid": "1a2781bc-cb53-44a3-bc22-982536448877",
        "box": "s009",
        "value": "5A AB 8F 61",
        "created": "2017-03-28T17:21:02.135853Z"
    },
    {
        "uuid": "f3788a79-1473-40df-b663-a3fd2fd92022",
        "box": "s009",
        "value": "E2 46 4B A0",
        "created": "2017-03-28T17:21:06.726697Z"
    }
];

var items = [
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
];

var weight = [
    {
        "uuid": "f96e340b-6ace-42ed-9a0b-bdbdf45e4f80",
        "box": "abc",
        "created": "2017-03-28T15:39:04.893602Z",
        "value": 564.0
    },
    {
        "uuid": "ea07c73d-a6f2-4823-817c-5dc241afd7f0",
        "box": "abc",
        "created": "2017-03-28T15:39:24.358087Z",
        "value": 753.0
    },
    {
        "uuid": "04d154f0-d969-4235-8e84-6cfc55ccca5d",
        "box": "abc",
        "created": "2017-03-28T15:39:32.699830Z",
        "value": 770.0
    },
    {
        "uuid": "5de337f1-567e-4321-b987-fddee6932f9b",
        "box": "abc",
        "created": "2017-03-28T15:39:40.136911Z",
        "value": 325.0
    },
    {
        "uuid": "6f906951-f4e1-4561-a54c-749593d1c318",
        "box": "abc",
        "created": "2017-03-28T15:55:00.696868Z",
        "value": 259.0
    },
    {
        "uuid": "96c4d3de-7ab9-49fe-bc1f-befea26c3a4d",
        "box": "abc",
        "created": "2017-03-28T15:55:14.223873Z",
        "value": 203.0
    },
    {
        "uuid": "c2659af8-726d-4cf3-9553-0a65ef30232c",
        "box": "abc",
        "created": "2017-03-28T15:55:17.290469Z",
        "value": 922.0
    },
    {
        "uuid": "d5c0c6e6-96d1-407c-9913-740fa93f09bf",
        "box": "abc",
        "created": "2017-03-28T16:17:54.796560Z",
        "value": 2766.17138671
    },
    {
        "uuid": "f06ed157-6475-47a8-92c7-e5e40f857c7d",
        "box": "abc",
        "created": "2017-03-28T16:17:56.323804Z",
        "value": 861.94000244
    },
    {
        "uuid": "15e46144-f79c-4d62-a400-e42b3e6657c2",
        "box": "abc",
        "created": "2017-03-28T16:17:57.800820Z",
        "value": 1.13846421
    },
    {
        "uuid": "258e01e8-35dd-41fb-8fbf-378734d095fe",
        "box": "abc",
        "created": "2017-03-28T16:17:59.850571Z",
        "value": 604.36346435
    },
    {
        "uuid": "7c430de9-da60-475e-8eb6-c09a01a41583",
        "box": "abc",
        "created": "2017-03-28T16:18:01.698860Z",
        "value": 730.03179931
    },
    {
        "uuid": "b5d94d78-2f66-4256-8b37-d5f92b37a992",
        "box": "abc",
        "created": "2017-03-28T16:18:47.317347Z",
        "value": 321.7607727
    },
    {
        "uuid": "c6e38784-5508-4cc3-a80a-0668740d3fe1",
        "box": "abc",
        "created": "2017-03-28T16:18:49.717189Z",
        "value": 1.23360705
    },
    {
        "uuid": "e573ecd8-b5b6-42c0-8405-30ac42313bb9",
        "box": "abc",
        "created": "2017-03-28T16:20:46.236506Z",
        "value": 4.41415977
    },
    {
        "uuid": "9d283d8b-c243-43d1-9df0-869a41439d18",
        "box": "abc",
        "created": "2017-03-28T16:20:47.791870Z",
        "value": 2.24165606
    },
    {
        "uuid": "63c58c2a-613e-4b89-a5e2-c7da61ac90ea",
        "box": "abc",
        "created": "2017-03-28T16:20:49.836897Z",
        "value": 3.76301217
    },
    {
        "uuid": "d18f6294-2598-4059-a830-95c2383c7602",
        "box": "abc",
        "created": "2017-03-28T16:20:53.375092Z",
        "value": 3.15084934
    },
    {
        "uuid": "80abca94-60de-4137-9d3f-1623a84c7f5e",
        "box": "abc",
        "created": "2017-03-28T16:21:25.425340Z",
        "value": 6.42236804
    },
    {
        "uuid": "6976ddcc-e6d0-4cac-ae03-e3c15add8d85",
        "box": "abc",
        "created": "2017-03-28T16:21:27.175376Z",
        "value": 1.86015691
    },
    {
        "uuid": "1e1182ed-e93c-4003-9aba-1a56a97ebdf1",
        "box": "abc",
        "created": "2017-03-28T16:21:28.729215Z",
        "value": 62.31897354
    },
    {
        "uuid": "96a271dc-1206-4bce-9b52-86fe0a6a5e82",
        "box": "abc",
        "created": "2017-03-28T16:21:30.282022Z",
        "value": 4.31576824
    },
    {
        "uuid": "48b3180e-0b2e-4590-9b1d-20647e070a1f",
        "box": "abc",
        "created": "2017-03-28T16:21:31.809373Z",
        "value": 259.42227172
    },
    {
        "uuid": "197124d8-73a1-433c-8123-5db311766ded",
        "box": "abc",
        "created": "2017-03-28T16:21:33.220314Z",
        "value": 310.40350341
    },
    {
        "uuid": "18e13f4d-1ad0-4925-943e-dc26e446db52",
        "box": "abc",
        "created": "2017-03-28T16:21:34.620217Z",
        "value": 2.28621077
    },
    {
        "uuid": "bb9df1dc-86fe-4017-87b3-f88453602db8",
        "box": "abc",
        "created": "2017-03-28T16:21:44.744708Z",
        "value": 2.58463406
    },
    {
        "uuid": "e831f6d5-fb8e-4741-a4d6-8f8611706e28",
        "box": "abc",
        "created": "2017-03-28T16:21:51.799522Z",
        "value": 6.58852052
    },
    {
        "uuid": "7fbf8158-4aec-4d09-84e4-6a47a14706c7",
        "box": "abc",
        "created": "2017-03-28T16:21:57.959977Z",
        "value": 9.6256628
    },
    {
        "uuid": "3ac2423d-0ebc-409f-8705-c12759742ca6",
        "box": "abc",
        "created": "2017-03-28T16:22:02.389746Z",
        "value": 11.32105922
    },
    {
        "uuid": "f9d46bdd-c182-4a02-9960-2a6b16de139f",
        "box": "abc",
        "created": "2017-03-28T16:22:03.855737Z",
        "value": 11.77681541
    },
    {
        "uuid": "7953478e-f099-4c6d-806e-7c17ca99390d",
        "box": "abc",
        "created": "2017-03-28T16:22:05.279394Z",
        "value": 6.63261079
    },
    {
        "uuid": "3822bc95-4393-4ee9-9619-708d20d52f43",
        "box": "abc",
        "created": "2017-03-28T16:22:12.163433Z",
        "value": 237.62438964
    },
    {
        "uuid": "4f3a82ae-9ab5-4719-9f44-509cd17cc112",
        "box": "abc",
        "created": "2017-03-28T16:22:13.347617Z",
        "value": 6.70779609
    },
    {
        "uuid": "791908bd-c80e-44f7-8c91-9275062c2385",
        "box": "abc",
        "created": "2017-03-28T16:22:27.111078Z",
        "value": 197.24624633
    },
    {
        "uuid": "32721fa4-59bd-41dc-96b0-c4f43a31c8b5",
        "box": "abc",
        "created": "2017-03-28T16:22:28.740040Z",
        "value": 330.83642578
    },
    {
        "uuid": "051a6dce-236e-4962-92b2-f1e4e12a075a",
        "box": "abc",
        "created": "2017-03-28T16:22:30.153271Z",
        "value": 6.8405323
    },
    {
        "uuid": "01d89342-c2b1-4ba6-bc7b-8b8749bb14bb",
        "box": "abc",
        "created": "2017-03-28T16:22:31.833748Z",
        "value": 350.17684936
    },
    {
        "uuid": "62daca1b-fec3-4da1-ac72-f7f8fdf7199d",
        "box": "abc",
        "created": "2017-03-28T16:22:33.259261Z",
        "value": 6.7514224
    },
    {
        "uuid": "a9c40ff7-0337-49bb-8430-f80cfbd925c8",
        "box": "abc",
        "created": "2017-03-28T16:22:34.969308Z",
        "value": 585.72296142
    },
    {
        "uuid": "63e0a6c2-3ad3-41f4-a60b-0b8779afac6d",
        "box": "abc",
        "created": "2017-03-28T16:22:36.371107Z",
        "value": 6.68551921
    },
    {
        "uuid": "4273ab86-e461-46ca-8bb4-4b10b04de002",
        "box": "abc",
        "created": "2017-03-28T16:22:37.789467Z",
        "value": 281.4137268
    },
    {
        "uuid": "b583b4b2-27d2-424c-bb32-fc0d264e98e7",
        "box": "abc",
        "created": "2017-03-28T16:22:39.209420Z",
        "value": 6.73193073
    },
    {
        "uuid": "2654b2d4-67f9-413d-8d4c-60bcc0389d69",
        "box": "abc",
        "created": "2017-03-28T16:23:38.890939Z",
        "value": 3.95144128
    },
    {
        "uuid": "2b81f899-7c27-4eef-a1b1-adfda2d64655",
        "box": "abc",
        "created": "2017-03-28T16:23:47.110396Z",
        "value": 1.60768055
    },
    {
        "uuid": "924544b9-9f02-4029-aa6f-2a66749e190c",
        "box": "abc",
        "created": "2017-03-28T16:23:54.083362Z",
        "value": -2.89790916
    },
    {
        "uuid": "e0a80b72-cfb1-4029-80bf-a2c7ee805f4c",
        "box": "abc",
        "created": "2017-03-28T16:25:53.071931Z",
        "value": 0.46179041
    },
    {
        "uuid": "0eecc9f7-7dd0-4ef1-9515-dce69b6511df",
        "box": "abc",
        "created": "2017-03-28T16:33:32.109921Z",
        "value": 3.6140325
    },
    {
        "uuid": "3bc71c48-f459-413f-b950-dac3045950b8",
        "box": "abc",
        "created": "2017-03-28T16:55:48.080297Z",
        "value": 32.26592636
    },
    {
        "uuid": "7271e232-4b7e-4b84-9822-cdad736b5f08",
        "box": "abc",
        "created": "2017-03-28T16:55:49.803738Z",
        "value": 6.67948579
    },
    {
        "uuid": "01254923-4ddb-49cd-82b2-567580270e4f",
        "box": "abc",
        "created": "2017-03-28T16:55:51.560945Z",
        "value": 93.19534301
    },
    {
        "uuid": "78e8e319-06a2-4d9d-868f-6403f92ab583",
        "box": "abc",
        "created": "2017-03-28T16:55:52.911585Z",
        "value": 2.96010017
    },
    {
        "uuid": "8a89e203-5416-491d-b22e-54651c19ce6e",
        "box": "abc",
        "created": "2017-03-28T17:02:21.321509Z",
        "value": 2768.18725585
    },
    {
        "uuid": "fa2b7a02-e4ec-47dc-8b6f-44005b3ff82a",
        "box": "abc",
        "created": "2017-03-28T17:02:23.045198Z",
        "value": 1850.65051269
    },
    {
        "uuid": "543480b9-5b8d-4ff2-a987-6cc7cdff1128",
        "box": "abc",
        "created": "2017-03-28T17:02:24.463507Z",
        "value": 0.73747248
    },
    {
        "uuid": "0f877a22-e4c9-47c1-bc5d-eda964f7bf17",
        "box": "abc",
        "created": "2017-03-28T17:02:25.868362Z",
        "value": -1.287444
    },
    {
        "uuid": "21d34d6d-2a39-488a-b8af-558b35805fe2",
        "box": "abc",
        "created": "2017-03-28T17:02:45.384057Z",
        "value": 3.22417902
    },
    {
        "uuid": "e65082e0-fd3d-4a49-a9d8-cc47b8c70ca8",
        "box": "abc",
        "created": "2017-03-28T17:02:58.007631Z",
        "value": 1.44106483
    },
    {
        "uuid": "a39bd5ae-81e5-4127-8969-5db04076d9d1",
        "box": "s001",
        "created": "2017-03-28T17:08:23.945222Z",
        "value": 209.91230773
    },
    {
        "uuid": "f1aec30c-358c-4852-84ed-5b83ce0c4c32",
        "box": "s001",
        "created": "2017-03-28T17:08:40.458553Z",
        "value": 80.79523468
    },
    {
        "uuid": "97c01fe8-2763-4c27-ba9e-19b4f66a876d",
        "box": "s001",
        "created": "2017-03-28T17:08:42.409357Z",
        "value": 3.76440429
    },
    {
        "uuid": "9e18e7a1-7238-43b5-8356-a3dc948efb50",
        "box": "s002",
        "created": "2017-03-28T17:10:49.635725Z",
        "value": 353.08776855
    },
    {
        "uuid": "41c1e230-595e-4a62-bfaf-878dae7fe9f4",
        "box": "s002",
        "created": "2017-03-28T17:11:02.739747Z",
        "value": 727.71905517
    },
    {
        "uuid": "ab158c2f-683d-48af-b2f7-23381d097599",
        "box": "s002",
        "created": "2017-03-28T17:11:04.336000Z",
        "value": 555.06610107
    },
    {
        "uuid": "72b5dd3b-8119-4a0f-aa91-0b4a541ab6e5",
        "box": "s002",
        "created": "2017-03-28T17:11:05.908514Z",
        "value": 3.91106319
    },
    {
        "uuid": "b344f4a0-f29b-42bc-a65c-0e534bdddc19",
        "box": "s002",
        "created": "2017-03-28T17:11:14.112834Z",
        "value": 613.03497314
    },
    {
        "uuid": "a18a2d62-cae7-405f-9fc3-453cfc78281c",
        "box": "s002",
        "created": "2017-03-28T17:11:15.942896Z",
        "value": 732.92034912
    },
    {
        "uuid": "afaf5e60-9321-4200-ae21-1e9cfb40aa92",
        "box": "s003",
        "created": "2017-03-28T17:12:06.077687Z",
        "value": 83.25549316
    },
    {
        "uuid": "19e0ac6a-4620-43a8-85a1-1289fcca8cbb",
        "box": "s003",
        "created": "2017-03-28T17:12:07.404831Z",
        "value": 1.87500858
    },
    {
        "uuid": "c0a41b4b-30af-4783-a1a0-69326c788fc6",
        "box": "s003",
        "created": "2017-03-28T17:13:03.604834Z",
        "value": 463.57263183
    },
    {
        "uuid": "52e19188-b114-45c8-85a0-c7184344246f",
        "box": "s003",
        "created": "2017-03-28T17:13:05.247206Z",
        "value": 731.78198242
    },
    {
        "uuid": "769bf753-a8a1-406d-98c4-bb5749ece7f3",
        "box": "s004",
        "created": "2017-03-28T17:14:19.289303Z",
        "value": 721.82019042
    },
    {
        "uuid": "843a5dc3-0fa3-4366-9d88-d4625a28829a",
        "box": "s004",
        "created": "2017-03-28T17:14:20.778359Z",
        "value": 724.78637695
    },
    {
        "uuid": "4010b7ea-4908-410a-b095-c9797a65f4e5",
        "box": "s004",
        "created": "2017-03-28T17:14:24.312323Z",
        "value": 132.22103881
    },
    {
        "uuid": "f575fdb5-45da-4dbe-a1d3-1e41309ae1b3",
        "box": "s004",
        "created": "2017-03-28T17:14:25.736386Z",
        "value": -1.64852247
    },
    {
        "uuid": "98efdb19-eddc-43f7-8549-c01a846e42a0",
        "box": "s004",
        "created": "2017-03-28T17:14:31.160553Z",
        "value": 115.85787963
    },
    {
        "uuid": "bdc243ec-2c69-4ff5-8522-78b55878e03e",
        "box": "s004",
        "created": "2017-03-28T17:14:33.665670Z",
        "value": 151.06350708
    },
    {
        "uuid": "1b6900aa-0e68-4779-9144-58085b4eb26b",
        "box": "s005",
        "created": "2017-03-28T17:15:28.171378Z",
        "value": 12.17641544
    },
    {
        "uuid": "98333abd-ca90-4b2b-a4cb-e183a7952526",
        "box": "s005",
        "created": "2017-03-28T17:15:30.258076Z",
        "value": 2.37949728
    },
    {
        "uuid": "70dab28f-d4c3-4ae4-badb-7fad9c555c89",
        "box": "s005",
        "created": "2017-03-28T17:15:55.241580Z",
        "value": 139.56050109
    },
    {
        "uuid": "6b94d6bc-d664-41ff-b6f4-9264bcd4dbcc",
        "box": "s005",
        "created": "2017-03-28T17:15:56.644802Z",
        "value": 153.1640625
    },
    {
        "uuid": "fbd6b656-9708-436d-89a6-5d7a3758c995",
        "box": "s006",
        "created": "2017-03-28T17:16:33.587411Z",
        "value": 4.57381391
    },
    {
        "uuid": "d1bc449f-e2f9-4e31-b55e-3e8a5c13e229",
        "box": "s006",
        "created": "2017-03-28T17:16:46.235644Z",
        "value": 0.70498461
    },
    {
        "uuid": "edbdb922-420e-425d-8c7b-e992214bdede",
        "box": "s009",
        "created": "2017-03-28T17:20:42.420708Z",
        "value": 599.41058349
    },
    {
        "uuid": "52934055-95ef-45e7-a31e-42365c4e2107",
        "box": "s009",
        "created": "2017-03-28T17:20:44.108238Z",
        "value": 728.5201416
    },
    {
        "uuid": "4163da17-3571-49b4-910f-3e5174b20b4d",
        "box": "s009",
        "created": "2017-03-28T17:20:45.558358Z",
        "value": 171.09825134
    },
    {
        "uuid": "6bc428b9-b53b-4c2e-b8c4-61f36ddbffde",
        "box": "s009",
        "created": "2017-03-28T17:20:48.202455Z",
        "value": 0.50773744
    },
    {
        "uuid": "8d4ccaa7-797f-4e44-be71-97a0efed52b2",
        "box": "s009",
        "created": "2017-03-28T17:20:50.500368Z",
        "value": 4.02569866
    },
    {
        "uuid": "5e60d138-9b0a-443a-a4d2-272a2eb7f871",
        "box": "s009",
        "created": "2017-03-28T17:21:08.172056Z",
        "value": -4.51394414
    },
    {
        "uuid": "5a122d54-f8ce-4940-ba29-779cd7c0ef01",
        "box": "s010",
        "created": "2017-03-28T17:54:10.894720Z",
        "value": 2615.30566406
    },
    {
        "uuid": "f42d7b78-4a29-4e0c-93ea-12d8435edcb5",
        "box": "s010",
        "created": "2017-03-28T17:54:12.481906Z",
        "value": 988.59686279
    },
    {
        "uuid": "17b7986e-d905-43c8-8845-2e9ba0c415ef",
        "box": "s010",
        "created": "2017-03-28T17:54:14.079743Z",
        "value": 4.0925312
    },
    {
        "uuid": "54efffc2-4779-459d-abe2-bcd846948836",
        "box": "s010",
        "created": "2017-03-28T17:55:17.754372Z",
        "value": 2079.66333007
    },
    {
        "uuid": "bb7c2e51-181b-44c1-8572-d1c3803d88a2",
        "box": "s010",
        "created": "2017-03-28T17:55:19.357662Z",
        "value": 1.03775227
    }
];


var users = [
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
];







