import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminders from './models/Reminders'
import ReminderService from './services/reminder'
import NewReminder from './components/NewReminder'
function App() {
  const [reminder, setReminder] = useState<Reminders[]>([]);
  
  useEffect(()=>{loadReminders()},[]);


  const loadReminders = async  ()=>{
    const reminders = await ReminderService.getReminders();
    setReminder(reminders)

  }


  const removeReminder= (id:number)=>{
    console.log(id)
    const result = reminder.filter(reminder =>reminder.id !== id)
    setReminder(result)
    setTimeout(()=>{
      alert(`reminder removed`)
    },1000)
  }

  const addReminder = async (title:string)=>{
    // console.log(title)
    const newReminders = await ReminderService.addReminder(title);
    setReminder([newReminders,...reminder])
    setTimeout(()=>{
      alert(`${title} added`)
    },1000)
    
  }
  return (
    <div className="App container-fluid flex-column align-items-center ">
      <NewReminder  onAddReminder={addReminder}/>
    <ReminderList items={reminder} onRemoveReminder={removeReminder} />

    </div>
    
    )
}

export default App
