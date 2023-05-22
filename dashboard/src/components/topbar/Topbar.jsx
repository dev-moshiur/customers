

import { Link } from 'react-router-dom'
import React from 'react'
import './topbar.scss'
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="left">
        <div className="logo">
          <Link to='/'>
            {/* <img src="/group-3.svg" alt="" /> */}
            <img src="/group-18760.svg" alt="" />
          </Link>
        </div>
        <div className="border">

        </div>
        <div className="intro">
          <div className="top">
          Admin

          </div>
          <div className="bottom">
          Managment
          
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/group-3.svg" alt="" />
        <img src="/-icon-log-out.svg" alt="" />
      </div>
    </div>
  )
}
