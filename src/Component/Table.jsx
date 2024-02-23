import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Table({Updateuserid,DeleteUserId}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function Fetchdata() {
      try {
        const fetchUser = await axios.get("http://localhost:4000/api/get")
        const response = fetchUser.data
        setData(response);
      } catch (error) {

      }
    }
    Fetchdata();
  }, [data])


  return (
    <div className="container mt-5">
      <h2 className="mb-4">Manage Employees</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.user?.map((elem, id) => {
            return (
              <tr>
                <td>{elem.name}</td>
                <td>{elem.fathername}</td>
                <td>{elem.email}</td>
                <td>{elem.phone}</td>
                <td>
                  <div style={{display:"flex",gap:"5px"}}>
                  <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#UpdateUserModal" onClick={() => Updateuserid(elem._id)}>
                    Update
                  </button>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DeleteUserModal" onClick={()=> DeleteUserId(elem._id)}>
                    Delete
                  </button>
                  </div>
                </td>
              </tr>

            )
          })}

        </tbody>
      </table>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddUserModal">
        Add New Employee
      </button>
    </div>

  )
}
