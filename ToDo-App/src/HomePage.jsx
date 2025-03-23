import React from "react";
import { useState, useEffect } from "react";

import TodoStore from "./Todo Store";


const Homepage = () => {
<div>

<button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New Schedule</button>

<button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2px-4 rounded">Create New List</button>

</div>


const Schedule = () => {
    const [scheduleData, setScheduleData] = useState([ 
        {
            category : ' Monthly Expenses',
            events: [
                {date: '28 March 2025', title: 'Retail Accounts', done: false},
                {date: '31 March 2025', title: 'Bills', done: false},
            ]
        },
   
   {
    category : 'Weekly Schedule',
    events: [
        {Day: 'Monday', time:'09:30 AM', titile: 'Work Meeting', done: false},
        {Day: 'Thurday', time:'19:00 AM', titile: 'Bible Study', done: false},
        {Day: 'Friday', time:'15:30 PM', titile: 'Lunch With Bestie', done: false},
        {Day: 'Sunday', time:'07:40 AM', titile: 'Church', done: false},
    ]
   },

   {
    category : 'Gym',
    events: [
        {Days: 'Monday, Wednesday, Friday', time:'05:00 AM', title:'Upper Body', done: false},
        {Days: 'Tuseday, Thursday', time:'05:00 AM', title:'Lower Body', done: false},
        {Days: 'Saturday', time:'07:00 AM', title:'Hiking', done: false},
    ]
   },

    ]);
    const [newSchdule, setNewSchedule] = useState('');
    const [showAddSchedule, setShowAddSchedule] = useState(false);

    const toggleDone = (categoryIndex, eventIndex) => {
        const updatedSchedule = [...scheduleData];
        updatedSchedule[categoryIndex].events[eventIndex].done = 
        !updatedSchedule[categoryIndex].events[eventIndex].done;
      setScheduleData(updatedSchedule);
    };

    const handleAddSchedule = () => {
        if (setNewSchedule.trim() === '') return;
        setScheduleData([
          ...scheduleData,
          { category: newCategory, events: [] },
        ]);
        setNewCategory('');
        setShowAddCategory(false);
      };

    return (
        <div className = " min-h-screen">
            <h1 ClassName = "text-xl font-bold">My Todo Lists & Schedules</h1>
            
            {scheduleData.map((category, catIndex) => ( 
                 <div
                 key={eventIndex}
                 className={`flex gap-4 p-3 border rounded cursor-pointer hover:bg-gray-50 {
                   event.done ? 'opacity-60 line-through' : ''
                 }`}
                 onClick={() => toggleDone(catIndex, eventIndex)}
               >
                 <input
                   type="checkbox"
                   checked={event.done}
                   onChange={() => toggleDone(catIndex, eventIndex)}
                 />
                 <div className="w-24 font-bold text-blue-600">{event.time}</div>
                 <div>{event.title}</div>
               </div>
             ))}
           </div>   
)

        }
    }          

    export default Homepage