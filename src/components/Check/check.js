import React from 'react';
import Search from "../../assets/images/Search.svg";
import '../Check/checkStyle.css'
import CheckList from './checklist.js';
export default function check() {
  return (
    <>
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Đối soát vé</h1>
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <ul className='check'>
            <li><button>Chốt đối soát </button></li>
        </ul>
        <CheckList />
    </div>
        {/* <div className='FilterTickets'>
          <h1>Lọc vé</h1>
        </div> */}
    </>
  )
}
