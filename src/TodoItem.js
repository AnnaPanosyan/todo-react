import React, { useState } from 'react'
import "./TodoItem.css"


function TodoItem({item, todoId,onDelete,onChange,edit}){
  const[text,setText]=useState(item.text)

  return ( 
    
    <div >
      {!item.editItem ?
      <div className='item'>
         <input className='checked'  type="checkbox" checked={item.complated} onChange={(e)=>{onChange({...item, complated: e.target.checked }, todoId)}} />
         <div className='todo'>{item.text}</div>
         <div className='btn'>
         <button className='edit'  onClick={()=>{edit({...item, editItem:!item.editItem}, todoId)}}>edit</button>
         <button  onClick={()=>{onDelete(item.id,todoId)}} className='delete'>X</button>
         </div>
         </div>:
         <div className='item'>
      
         <div className='todo'><input  className="input" type="text"  value={text} onChange={(e)=>{setText(e.target.value)}}/></div>
         <div className='btn'>
         <button className='edit'  onClick={()=>{edit({...item, editItem:!item.editItem, text:text}, todoId)}}>save</button>
       
         </div>
         </div>}
    </div>
  )
}

export default TodoItem