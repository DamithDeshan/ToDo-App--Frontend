import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) =>{
   axios
      .get(baseUrl)
      .then(({data})=>{
         //console.log("Data ----> ", data)
         setToDo(data)
      })
}

const addToDo = (text, setText, setToDo)=>{
   axios
      .post(`${baseUrl}/save`,{text})
      .then((data)=>{
         console.log(data)
         setText("")
         getAllToDo(setToDo)
         alert("Added Successfully...")
      }) 
      .catch((err)=>{
         console.log(err)
      })
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating)=>{
   axios
      .post(`${baseUrl}/update`,{_id :toDoId, text})
      .then((data)=>{
         setText("")
         setIsUpdating(false)
         getAllToDo(setToDo)
         alert("Update Successfully...")
      })
      .catch((err)=>{
         console.log(err)
      })
}

const deleteToDo = (_id, setToDo)=>{
   axios
      .post(`${baseUrl}/delete`,{_id})
      .then((data)=>{
         console.log(data)
         getAllToDo(setToDo)
         alert("Delete Successfully...")
      })
      .catch((err)=>{
         console.log(err)
      })
}

export {getAllToDo, addToDo, updateToDo, deleteToDo}