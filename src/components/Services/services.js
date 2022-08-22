import React, {useState} from 'react';
import Search from "../../assets/images/Search.svg";
import '../Services/servicesStyle.css';
import ListTickets from './ListTickets'
import AddTicket from './AddTicket';
export default function Services() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div className='services'>
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Danh sách gói vé</h1>
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <section className='check'>
        <button>Xuất file</button>
        <button onClick={() => setButtonPopup(true)}>Thêm gói vé </button>
        </section>
        <ListTickets />
      
        <AddTicket trigger={buttonPopup} setTrigger={setButtonPopup} />
       
    </div>
    </div>
  )
}
