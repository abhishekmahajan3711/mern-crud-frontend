import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function UpdateUser({value,handleChange,handleSubmit}) {




  return (
    <div className="modal fade" id="UpdateUserModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        

      <form onSubmit={handleSubmit} >
    <div className="mb-3">
      <label htmlFor="uname" className="form-label">Name</label>
      <input type="text" className="form-control" id="uname" name="name" value={value.name} onChange={handleChange} placeholder="Enter name" required />
    </div>
    <div className="mb-3">
      <label htmlFor="fathername" className="form-label">Father</label>
      <input type="text" className="form-control" id="father" name="fathername" value={value.fathername} onChange={handleChange} placeholder="Enter father's name" required />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="text" className="form-control" id="email" name="email" onChange={handleChange} value={value.email} placeholder="Enter email" required />
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">Phone</label>
      <input type="text" className="form-control" id="phone" name="phone" value={value.phone} onChange={handleChange} placeholder="Enter phone number" required />
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button>
      </div>
</form>



      </div>
    </div>
  </div>
</div>
  )
}
