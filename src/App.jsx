import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js';
import UserTable from "./assets/Table/UserTable";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div>
      <UserTable />
      <Toaster></Toaster>
    </div>
  )
}
