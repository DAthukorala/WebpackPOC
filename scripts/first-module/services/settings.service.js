export default function settingsService() {
    var service = {
        getSettingsByType: getSettingsByType,
        getTypes: getTypes
    }
    return service;

    function getTypes() {
        return [{
                id: 1,
                name: "type one"
            },
            {
                id: 2,
                name: "type two"
            }
        ];
    }

    function getSettingsByType(type) {
        var data = getSettings(); //this can be the filtered db call
        var filtered = data.filter(x => x.DashBoardSettingSubMenusSettingType === type);
        return filtered;
    }

    function getSettings() {
        return [{
                "SettingMenuID": 61,
                "SettingMenuDisplayName": "Add / Edit / Delete Appointment Reminder Templates",
                "EMRWebDashBoardMenuDescription": "oreitgvirgu orirohoi tthr h t htfhjk blklhg jh lh jhohjioth jnblgkhjj gjkl hgkhjkjfg",
                "DashBoardSettingSubMenusSettingType": "1",
                "DashBoardSettingMenuCustomizationInfoID": 148,

            },

            {
                "SettingMenuID": 45,
                "SettingMenuDisplayName": "Add / Edit Buildings / Wings-ward / Rooms / Bed Details (inpatient only)",
                "EMRWebDashBoardMenuDescription": "This menu is used to Add / Edit Buildings / Wards / Rooms / Bed Details for Inpatient.",
                "DashBoardSettingSubMenusSettingType": "1",
                "DashBoardSettingMenuCustomizationInfoID": 136,

            },

            {
                "SettingMenuID": 47,
                "SettingMenuDisplayName": "Add / Edit User Defined Health Care Item HCI and link to static HCI if needed",
                "EMRWebDashBoardMenuDescription": "fkjdgjk hhnjkbnbdfbkfd gkhkljhklfgjklgjhklgjhlklgjhkjkjftgkhjgjhfhkfjfg",
                "DashBoardSettingSubMenusSettingType": "1",
                "DashBoardSettingMenuCustomizationInfoID": 138,

            },
            {
                "SettingMenuID": 22,
                "SettingMenuDisplayName": "Add / Edit Appointment Visit Types",
                "EMRWebDashBoardMenuDescription": "kdfjhgr fjghfjghfdjkghjk jkfhgjfdhgjdfkkdg jkfghkfjdhgdfjkgdk kjfhgfdjkghfjgd",
                "DashBoardSettingSubMenusSettingType": "2",
                "DashBoardSettingMenuCustomizationInfoID": 118,
            },
            {
                "SettingMenuID": 69,
                "SettingMenuDisplayName": "Appointment Scheduler Generation",
                "EMRWebDashBoardMenuDescription": "This setting is used to add / edit / delete the appointment scheduler generation details",
                "DashBoardSettingSubMenusSettingType": "2",
                "DashBoardSettingMenuCustomizationInfoID": 155,
            }
        ];
    }

}