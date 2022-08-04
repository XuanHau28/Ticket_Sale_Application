import React from 'react'
import Search from "../../assets/images/Search.svg";
export default function services() {
  return (
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Danh sách gói vé</h1>
        
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <ul className='check'>
            <li><button>Thêm gói vé</button></li>
        </ul>
    </div>
  )
}
