import './dashboard.scss'
import Topbar from '../components/topbar/Topbar';
import Customers from './customers/Customers'
import { useState,useEffect } from "react";
import States from "../components/States";
const Desktop9 = () => {
  const [states, setStates] = useState()

  useEffect(() => {
    fetch(`https://fba52cb3-bc44-4df8-8483-c90b23931d85.mock.pstmn.io/api/v1/dashboard/stats`,{
        headers:{"x-api-key":"PMAK-641aa0e926dce84132b278dd-39882e4e5be8287ec6e539865649638afc"}
    })
    .then(res=>res.json())
    .then(data=>{setStates(data);console.log(data)})
    .catch(err=>console.log(err))

}, [])


  return (
    <div className="dashboard">
    
    
  
    <div style={{marginTop:'50px'}} className="heading mmm">
    Dashboard
    </div>
    <States/>
    <div className="heading">
    Customer List
    </div>
    <Customers/>
    </div>
    
  );
};

export default Desktop9;
