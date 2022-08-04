import React from 'react'
import '../Home/HomeStyle.css';
import Search from "../../assets/images/Search.svg";
import Mail from "../../assets/images/Mail.svg";
import Noti from "../../assets/images/Noti.svg";
export default function search() {
  return (
    <div className="search-noti">
    <div>
        <input className='Search' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
    </div>
    <div className="AccMailNoti">
        <ul>
            <li><img src={Mail} /></li>
            <li><img src={Noti} /></li>
            <li className="Account">
            </li>
        </ul>
    </div>
    </div>
  )
}
