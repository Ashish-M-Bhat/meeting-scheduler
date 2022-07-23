import React, { createContext, useState } from 'react';


const room1Array = [
    {desc:'1v1', 'startTime':'09:00 am', 'endTime': '09:30 am'},
    {desc:'2v2', 'startTime':'08:00 pm', 'endTime': '10:00 pm'},
    {desc:'3v3', 'startTime':'09:35 pm', 'endTime': '10:45 pm'},
    {desc:'hehe', 'startTime':'09:10 am', 'endTime': '10:30 am'},
    {desc:'Secret Meeting', 'startTime':'10:00 am', 'endTime': '11:00 am'},
  ];

  const room2Array = [
    {desc:'1v1', 'startTime':'09:00 am', 'endTime': '09:30 pm'},
    {desc:'hehe', 'startTime':'09:10 am', 'endTime': '10:30 am'},
    {desc:'Secret Meeting', 'startTime':'10:00 am', 'endTime': '11:00 am'},
    {desc:'2v2', 'startTime':'08:00 pm', 'endTime': '10:00 pm'},
    {desc:'3v3', 'startTime':'10:00 pm', 'endTime': '10:45 pm'},
  ];
export const MeetingsArrayContext = createContext({
    meetingsArray:{}
});

/* meetingsArray will be an object of arrays
 meetingsArray = {
                    room1: [],
                    room2: [],
                  }
*/
const MeetingsArrayContextProvider = props => {
    const [meetingsArray, setMeetingsArray] = useState({'room1':room1Array, 'room2':room2Array});

  return (
    <MeetingsArrayContext.Provider value={{meetingsArray:meetingsArray}}>
        {props.children}
    </MeetingsArrayContext.Provider>
  )
}

export default MeetingsArrayContextProvider;