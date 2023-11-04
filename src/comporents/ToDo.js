import React from 'react'

import {AiOutlineEdit, AiFillDelete} from  'react-icons/ai'

const ToDo = ({text, updateMode, deleteMode})=> {
   return (
      <div className = "flex justify-between w-[40vw] m-3 p-3 bg-slate-500 rounded-lg ">
         <div className = "">{text}</div>
         <div className = "flex gap-5">
            <AiOutlineEdit fontSize={25} onClick={updateMode} className='text-black cursor-pointer'/>
            <AiFillDelete fontSize={25} onClick={deleteMode} className='text-black cursor-pointer'/>
         </div>
      </div>
   )
}

export default ToDo

