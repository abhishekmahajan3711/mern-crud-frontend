import React, { useState } from 'react'
import Table from '../../Component/Table';
import AddUser from '../../Component/AddUser';
import UpdateUser from '../../Component/UpdateUser';
import DeleteUser from '../../Component/DeleteUser';
import axios from 'axios';
import {toast} from 'react-hot-toast';

export default function UserTable() {

  const [uid,setUid]=useState("")

  const Updateuserid=(id)=>{
    setUid(id);
  
   }

   const [value,setValue]=useState({
    name:"",
    fathername:"",
    email:"",
    phone:""
  })

  const handleChange=(e)=>{
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
   }

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateUser = await axios.put(`http://localhost:4000/api/update/${uid}`, value);
      const response = updateUser.data;
      toast.success(response.message);
    } catch (error) {
      console.log(error);
    }
  }

  const [DeleteUid,setDeleteUid]=useState("");

  const DeleteUserId=(id)=>{
    setDeleteUid(id);
  }
  
  const handleDelete=async (e)=>{
    try {
        const deleteUser= await axios.delete(`http://localhost:4000/api/delete/${DeleteUid}`);
        const response=deleteUser.data;
        toast.success(response.message);

    } catch ( error) {
       console.log(error)
    }
  }


  return (
    <>
    <Table Updateuserid={Updateuserid} DeleteUserId={DeleteUserId}></Table>
    <AddUser></AddUser>
    <UpdateUser value={value} handleChange={handleChange} handleSubmit={handleSubmit}></UpdateUser>
    <DeleteUser handleDelete={handleDelete}></DeleteUser>
    </>
  )
}
