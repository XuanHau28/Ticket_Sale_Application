import React from 'react';
import Search from "../../assets/images/Search.svg";
import Filter from '../../assets/images/Filter.svg';

export default function check() {
  return (
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Đối soát vé</h1>
        
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <ul className='check'>
            <li><button>Chốt đối soát </button></li>
        </ul>
    </div>
  )
}
