const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Marketing Meeting',
            location: 'Zoom',
            time: '1:00 PM'
        }
        resolve(meetingDetails);
    }
    else {
        reject(new Error('Meeting already scheduled'))
    }
});

const addToCalendar = meetingDetails => {
    const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    return Promise.resolve(calendar);
}


async function myMeeting(){ 
    try{
        const meetingDetails = await meeting;
        const message =  await addToCalendar(meetingDetails);
        console.log(message);
    } catch (err){
        console.log(err.message);
    }
}

myMeeting();