import React, { useState } from "react";

interface NewReminderProps{
    onAddReminder:(title:string)=>void;

}

const NewReminder = ( {onAddReminder}:NewReminderProps):JSX.Element => {
    const [title ,setTitle] = useState(' ');

    const handleSubmit = (e : React.FormEvent)=>{
        e.preventDefault();
        console.log(title)
        if(title !== ' ' )   {
            onAddReminder(title)
        }
        else{
            alert('enter then  title first')
        }
        setTitle(' ')

    }
  return (
    <form onSubmit={handleSubmit} >
        <div className="container-fluid ">
        <label htmlFor="title" className=" p-2 rounded-pill">New Reminder</label>
        <input type="text" id="title" className="form-control border-black " placeholder="add new reminder" value={title} onChange={e=> setTitle(e.target.value)}/>
        </div>
        <button className="btn btn-primary rounded-pill m-2 ">Add Reminder</button>
    </form>
  )
}

export default NewReminder