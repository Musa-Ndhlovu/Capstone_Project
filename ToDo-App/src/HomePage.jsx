import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'


const Homepage = () => {
return (

//HOMEPAGE BUTTONS
<div className="flex flex-col  items-center min-h-screen bg-gray-100 p-6">

<div className="absolute top-4 right-4">
        <ProfileButton />
      </div>

<h1 className = "flex items-center text-xl font-bold text-center mb-4" >
  ToDo Lists and Schedules</h1>

  < div className = "flex gap-4">
<button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Create New Schedule </button>

<button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Create New List</button>

</div>

<Schedule />
<ToDoList />
</div>
)
}

//PROFILE BUTTON THAT LEADS TO PROFILE PAGE WHEN CLICKED
const ProfileButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick = {() => navigate('/profile')} 
      className = " absolute top-4 right-4 p-2 bg-transparent border-none cursor-pointer"
    >
      <img 
        src = "5472d1b09d3d724228109d381d617326.jpeg" 
        alt = "ProfilePage" 
        className = "w-12 h-12 rounded-full border-2 border-gray-600 shadow-lg hover:shadow-xl transition"
      />
    </button>
  );
};

// MY SCHEDULES
const Schedule = () => {
    const [scheduleData, setScheduleData] = useState([ 
        {
            category : ' Monthly Expenses',
            events: [
                {date: 'Friday, 28 March 2025', title: 'Retail Account Payments: Foschini, Edgars...', done: false},
                {date: 'Monday, 31 March 2025', title: 'Bills: Electricity, Water, Rent...', done: false},
                {date: 'Wednesday, 02 April 2025', title: 'ALX Professional Foundations Payment', done: false}
            ]
        },
   
        {
          category : ' School Assessments',
          events: [
            {date: 'Sunday, 06 April 2025', title: 'Front End  Capstone Project Final Submisson', done: false},
            {date: 'Wednesday, 30 April 2025', title: 'Programming Assessment Submission', done: false},
            {date: 'Tuesday, 06 May 2025', title: ' Fetch certificate from the department', done: false},
          ]
        },

   {
    category : 'Weekly Schedule',
    events: [
        {date: 'Monday, 09:30 AM ',  title: 'Work Meeting', done: false},
        {date: 'Thurday, 19:00 AM',  title: 'Bible Study', done: false},
        {date: 'Frida, 15:30 PM',  title: 'Lunch With Bestie', done: false},
        {date: 'Sunday, 07:40 AM',  title: 'Church', done: false},
    ]
   },

   {
    category : 'Gym',
    events: [
        {date: 'Mon, Wed, Fri, 05:00 AM', title:'Upper Body', done: false},
        {date: 'Tue, Thurs, 05:00 AM', title:'Lower Body', done: false},
        {date: 'Saturday, 07:00 AM', title:'Hiking', done: false},
    ]
  }
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
        <div className = " min-h-screen p-6">
            <h2 className = "text-xl font-bold">My Schedules</h2>
            

        {scheduleData.map((category, catIndex) => ( 
            <div key={catIndex} className="mb-6">
             <h3 className="text-lg font-semibold text-blue-600">{category.category}</h3> 

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
        ))}
        </div> 
    ) 
}


      <br />
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
  setTasks(tasks.filter((task) => task.id !== id))};

return (
  <div className = " flex flex-col bg-gray-100 p-6 rounded-lg w-96 mx-auto mt-6">

    <h2 className = "text-xl font-bold mb-4">My To Do's</h2>

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
          className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
        >
          Add To-Do
        </button>
      </div>

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
              className="cursor-pointer">
              {task.text}
            </span>
            <button 
              onClick={() => removeTask(task.id)} 
              className="text-red-500 hover:text-red-700" >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
)
    
  }
    

    export default Homepage