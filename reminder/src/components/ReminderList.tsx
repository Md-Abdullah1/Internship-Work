import Reminders from "../models/Reminders"

interface ReminderListProps  {
    items:Reminders[];
    onRemoveReminder : (id:number)=> void;
}
const ReminderList = ({items,onRemoveReminder }:ReminderListProps) => {
    // console.log(items)
  return (
   <ul className="list-group bg-light border-2 p-2 border-black ">
    {items.map(item=>
      <li key={item.id} className="list-group-item bg-dark text-light text-capitalize  "><span>{item.title} </span>
      <button className="btn btn-primary mx-4 rounded-pill" onClick={()=>onRemoveReminder(item.id)}>Delete</button> </li>
    )}

   </ul>
  )
}

export default ReminderList