import { AttendantsTable, AttendanceTable, WeeklyAttendaceFormTable } from './firebase'

const attendants = () => {
    AttendantsTable.set([{
        deviceID: 4,
        fullName: "Henok Dejen"
    },
    {
        deviceID: 4,
        fullName: "Henok Dejen"
    }, {
        deviceID: 4,
        fullName: "Henok Dejen"
    },
    {
        deviceID: 4,
        fullName: "Henok Dejen"
    }, {
        deviceID: 4,
        fullName: "Henok Dejen"
    },
    {
        deviceID: 4,
        fullName: "Henok Dejen"
    }]
    )
}

const attendance = () => {
    AttendanceTable.set({
        weekly: [{
            time: '2:30PM',
            attendanceList: [{
                deviceID: 'faksdfkasdjfj3425435',
                attendantName: 'Henok Dejen',
                hr: 3,
                minute: 4,
                late: 40,
                Date: '2018-09-12'
            },
            {
                deviceID: 'faksdfkasdjfj3425435',
                attendantName: 'Henok Dejen',
                hr: 3,
                minute: 4,
                late: 40,
                Date: '2018-09-12'
            },
            {
                deviceID: 'faksdfkasdjfj3425435',
                attendantName: 'Henok Dejen',
                hr: 3,
                minute: 4,
                late: 40,
                Date: '2018-09-12'
            },
            {
                deviceID: 'faksdfkasdjfj3425435',
                attendantName: 'Henok Dejen',
                hr: 3,
                minute: 4,
                late: 40,
                Date: '2018-09-12'
            },
            ]
        }]
    })
}

const attendanceForm = () => {
    WeeklyAttendaceFormTable.set([
        {
            day: 'Monday',
            forms: [
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
            ]
        },
        {
            day: 'Tuesday',
            forms: [
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
            ]
        },
        {
            day: 'Wednsday',
            forms: [
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
                {
                    hr: 3,
                    minute: 60,
                    latitude: 98,
                    longitude: 45,
                    timeDelta: 12,
                    locationDelta: 100
                },
            ]
        }
    ])
}

attendanceForm();