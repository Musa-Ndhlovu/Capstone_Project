import React from "react";
import { useState, useEffect } from "react";

import TodoStore from "./Todo Store";

const Homepage = () => {
return (

//HOMEPAGE BUTTONS
<div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
<h1 classname = "text-xl font-bold text-center mb-4" >ToDo Lists and Schedules</h1>


< div className = "flex gap-4">
<button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New Schedule</button>

<button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2px-4 rounded">Create New List</button>

</div>
</div>
)

// MY SCHEDULES
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
    const [newSchdule, setNewSchedule] = useState(" ");
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
        setNewCategory(" ");
        setShowAddCategory(false);
      };

    return (
        <div className = " min-h-screen">
            <h2 ClassName = "text-xl font-bold">My Schedules</h2>
            
        {scheduleData.map((category, catIndex) => ( 
            <div key={eventIndex} className="mb-6">

    {category.events.map((event, eventIndex) => (
      <div key = {eventIndex} 
      className = {`flex gap-4 p-3 border rounded cursor-pointer hover:bg-gray-50 {
        event.done ? 'opacity-60 line-through' : '' }`}

                 onClick={() => toggleDone(catIndex, eventIndex)}
               >

                 <input
                   type="checkbox"
                   checked={event.done}
                   onChange={() => toggleDone(catIndex, eventIndex)}
                 />

                 <div className="w-24 font-bold text-blue-600">{event.time || event.date || event.day}</div>
                 <div>{event.title}</div>
               </div>
             ))}
           </div> 
        )
      ) 
        }
      

//MY TODO LIST
const ToDoList = () => {
const [task, setTask] = useState ("")
const [tasks, setTasks] = useState([])

const handleInputChange = (e) => {
  setTask(e.target.value)
}

const addTask = () => {
  if (task.trim ()) {
    setTasks ([...tasks, {id: Date.now(), text: task, completed: false}])
    setTask("");
  }
}

const toggleCompletion = (id) => {
  setTasks (tasks.map((task) =>
  task.id === id ? {... task, completed: !task.completed} : task))
}

const removeTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

return (
  <div className = " flex flex-col items-center bg-gray-100 p-6 rounded-lg w-96 mx-auto mt-6">

    <h2 classname = "text-xl font-bold mb-4">To Do's</h2>

    <div className = "flex mb-4 w-full">
      <input
      type = "text"
      value = {task}
      onChange = {handleInputChange}
      className = "w-full p-2 border border-gray-300 rounded-md"
      placeholder = "Add Task..."
    />

<button 
          onClick={addTask} 
          className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>

        <ul className="w-full">
        {tasks.map((task) => (
          <li 
            key={task.id} 
            className={`flex items-center justify-between p-2 mb-2 border-b ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span 
              onClick={() => toggleCompletion(task.id)} 
              className="cursor-pointer"
            >
              {task.text}
            </span>
            <button 
              onClick={() => removeTask(task.id)} 
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
</div>
)

    )

    export default Homepage