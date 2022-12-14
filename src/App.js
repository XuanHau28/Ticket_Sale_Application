import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import React from 'react';
import './App.css';
import Menu from "./components/Home/menu";
import Search from "./components/Home/search";
import Home from "./components/Home/Home";
import Management from './components/Management/Management';
import EventP from './components/Management/EventPakage'
import { Route, Routes } from 'react-router-dom';
import Check from './components/Check/Check';
import Services from './components/Services/Services';

const App = () => (
  <div className="container">
  <Row>
    <Col span={18} push={6}>
      <Search/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/management" element={<Management/>}></Route>
      <Route path="/check-ticket" element={<Check/>}></Route>
      <Route path="/services" element={<Services/>}></Route>      
      <Route path="/event-pakage" element={<EventP/>}></Route>
      </Routes>
    </Col>
    <Col span={6} pull={18}>
      <Menu />
    </Col>
  </Row>

  </div>
 
);

export default App;
