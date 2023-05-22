


import './states.scss'
import {useState,useEffect} from 'react'

export default function States() {
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
    <div className='states'>
        <div className="wrapper">

        
            <div className="heading">
            Today Onboarding
            </div>
            <div className="contain">
                <div className="column">
                    <div className="number">
                    {states?.total}
                        
                    </div>
                    <div className="title">
                    Total

                    </div>
                </div>
                <div className="column">
                    <div className="number">
                    {states?.verified}
                        
                    </div>
                    <div className="title">
                    Verified

                    </div>
                </div>
                <div className="border">

                </div>
                <div className="column">
                    <div className="number">
                    {states?.pending}
                        
                    </div>
                    <div className="title">
                    Pending

                    </div>
                </div>
                <div className="border">
                    
                </div>
                <div className="column">
                    <div className="number">
                    {states?.failed}
                        
                    </div>
                    <div className="title">
                    Failed

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
