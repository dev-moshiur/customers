


import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import './customers.scss'
export default function Customers() {
    const [customers, setCustomers] = useState([])

    const [page, setPage] = useState()
    const [pageNumber, setPageNumber] = useState(1)
    useEffect(() => {
        fetch(`https://fba52cb3-bc44-4df8-8483-c90b23931d85.mock.pstmn.io/api/v1/dashboard/customers`,{
            headers:{"x-api-key":"PMAK-641aa0e926dce84132b278dd-39882e4e5be8287ec6e539865649638afc"}
        })
        .then(res=>res.json())
        .then(data=>{setCustomers(data);console.log(data)})
        .catch(err=>console.log(err))

    }, [])

    const handlePrevious = () => {
        if (pageNumber == 1) {
        } else {
         
          setPageNumber((pre) => pre - 1);
        }
      };
      const handleNext = () => {
        if (Math.ceil(customers.length / 7) > pageNumber) {
          setPageNumber((pre) => pre + 1);
          
        }
      };
    
  return (
    <div className='customers'>
        <div className="wrapper">
            <div className="container">

           


        
                <div className="header">
                    <div className="col">
                    <input type="checkbox" name="" id="" /> <span>All</span>
                    </div>
                    <div className="col">
                        NID no.
                    </div>
                    <div className="col">
                        Customer Name
                    </div>
                    <div className="col">
                    Date
                    </div>
                    <div className="col">
                    Age
                    </div>
                    <div className="col">
                        Status
                    </div>
                    <div className="col">
                        Ditails
                    </div>

                </div>
                <div className="itemContainer">
                    {customers.slice((pageNumber - 1) * 7, pageNumber * 7).map(elm=>
                    <div className="item">
                        <div className="col">
                        <input type="checkbox" name="" id="" />
                        </div>
                        <div className="col">
                            {elm.nidNo}
                        </div>
                        <div className="col">
                            {elm.customerName}
                        </div>
                        <div className="col">
                        {new Date(elm.date).toLocaleDateString()}
                        </div>
                        <div className="col year">
                        {elm.age} Years
                        </div>
                        <div className={`col ${elm.status}`}>
                            {elm.status}
                        </div>
                        <div className="col details">
                            <Link to={`/profile/?id=${elm.nidNo}`}>
                            Ditails</Link>
                        </div>

                    </div>)}
                </div>
                <div className="pagination">
                <img
                onClick={handlePrevious}
                    className='image'
                    alt=""
                    src="/24-outlined--directions--chevron--left.svg"
                    />
                    <span className={pageNumber == 1 ? 'active':''} onClick={()=>setPageNumber(1)}>
                        1
                    </span>
                    {customers.length > 7 ? 
                        <span className={pageNumber == 2 ? 'active':''} onClick={()=>setPageNumber(2)}>
                            2
                        </span> : ''
                    }
                    {customers.length > 14 ? 
                        <span className={pageNumber == 3 ? 'active':''} onClick={()=>setPageNumber(3)}>
                            3
                        </span> : ''
                    }
                    {customers.length > 21 ? 
                        <span className={pageNumber == 4 ? 'active':''} onClick={()=>setPageNumber(4)}>
                            4
                        </span> : ''
                    }
                    {customers.length > 28 ? 
                        <span className={pageNumber == 5 ? 'active':''} onClick={()=>setPageNumber(5)}>
                            5
                        </span> : ''
                    }
                    {customers.length > 42 ? 
                        <span >
                            ...
                        </span> : ''
                    }
                    {customers.length > 35 ? 
                        <span className={pageNumber == Math.ceil(customers.length/7) ? 'active':''} onClick={()=>setPageNumber(Math.ceil(customers.length/7))}>
                            {Math.ceil(customers.length/7)}
                        </span> : ''
                    }

                    
                   
                <img
                    className='image'
                    alt=""
                    onClick={handleNext}
                    src="/24-outlined--directions--chevron--right.svg"
                    />

                </div>
            </div>
        </div>

    </div>
  )
}
