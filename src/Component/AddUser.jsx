import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { toast } from 'react-hot-toast';


export default function AddUser() {

  const [value,setValue]=useState({
    name:"",
    fathername:"",
    email:"",
    phone:""
  })

   const handleChange=(e)=>{
    setValue({
      ...value,[e.target.name]:e.target.value
    })
   }

   const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
        const adduser= await axios.post('http://localhost:4000/api/create',value)
        const response=adduser.data
        if(response.success){
          toast.success(response.Message)
        }
    } catch (error) {
       console.log(error)
    }
   }



  return (
    <div className="modal fade" id="AddUserModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        

      <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name="name" value={value.name} onChange={handleChange} placeholder="Enter name" required />
    </div>
    <div className="mb-3">
      <label htmlFor="fathername" className="form-label">Father</label>
      <input type="text" className="form-control" id="father" name="fathername" value={value.fathername} onChange={handleChange} placeholder="Enter father's name" required />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={value.email} placeholder="Enter email" required />
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">Phone</label>
      <input type="tel" className="form-control" id="phone" name="phone" value={value.phone} onChange={handleChange} placeholder="Enter phone number" required />
    </div>
    {/* <button type="submit" className="btn btn-primary">Submit</button> */}

    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
      </div>
</form>



      </div>
      
    </div>
  </div>
</div>
  )
}
