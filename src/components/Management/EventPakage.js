import React, { useEffect, useState, useRef } from 'react'
import Search from "../../assets/images/Search.svg";
import Filter from '../../assets/images/Filter.svg';
import '../Management/managementStyle.css'
import DataEvent from './DataEventPakage.js';
import Popup from './Popup.js';
import { NavLink } from 'react-router-dom';

export default function EventPakage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className='content'>
        <div className='event-package'>
        <h1 style={{ marginLeft:24}}>Danh sách vé</h1>
        <ul className='event'>
          <li className='active'><NavLink to='/management'>Gói gia đình</NavLink></li>
          <li><NavLink to='/event-pakage'>Gói sự kiện</NavLink></li>
        </ul>
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <section className='Filter'>
            <button   onClick={() => setButtonPopup(true)}><img src={Filter} />Lọc vé</button>
            <button>Xuất file </button>
        </section>
  
          
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
            </Popup>

   
            <DataEvent />
            </div>
    </div>
  )
}
