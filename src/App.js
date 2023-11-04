import React, { useEffect, useState } from "react";
import ToDo from "./comporents/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
   
   const [toDo, setToDo] = useState([])
   const [text, setText] = useState("")
   const [isUpdating, setIsUpdating] = useState(false)
   const [toDoID, setToDoId] = useState("")
   //console.log(toDo)
   
   useEffect(()=>{
      getAllToDo(setToDo)
   }, [])
   
   const updateMode = (_id, text)=>{
      setIsUpdating(true)
      setText(text)
      setToDoId(_id)
   }
   
   return (
      <div className = "grid justify-center">
         <div className = "p-5 m-5 text-4xl text-white bg-slate-800 w-[60vw] flex justify-center font-bold">ToDo App</div>
         <div className = "flex justify-center gap-5 m-5">
            <input 
               value={text} 
               onChange={(e)=> setText(e.target.value)} 
               type='text' 
               placeholder = 'Add ToDos...' 
               className = "border-b-2 w-[35vw] border-b-black visited:border-0 pl-5"
            />
            <button 
               className = "p-3 bg-slate-400 w-[10vw] justify-center flex text-black text-xl font-semibold rounded-2xl hover:bg-slate-800 hover:text-white" 
               onClick={isUpdating ? 
                  ()=>updateToDo(toDoID,text,setToDo,setText,setIsUpdating) 
               : 
                  ()=>addToDo(text,setText,setToDo)}
            >
               {isUpdating ? "Update" : "Add"}
            </button>
         </div>
         <div className = "grid justify-center t-5 ">
            
            {toDo.map((item)=>(
               <ToDo 
                  key={item._id} 
                  text={item.text}
                  updateMode={()=> updateMode(item._id,item.text)}
                  deleteMode={()=>deleteToDo(item._id, setToDo)}
               />
            ))}

         </div> 
      </div>
   );
}

export default App;
