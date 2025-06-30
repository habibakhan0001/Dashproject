import React, { useState } from 'react'
import { MdPublic,MdDns, MdCleaningServices } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';  

import { IoMenu } from "react-icons/io5"
function Menubar() {
  const [isOpen,setIsopen]=useState(false);
 
  const toggle=()=> {
    setIsopen(!isOpen)
  }

  return (
    <div className='sidebar'>
    
      <button onClick={toggle} className='sidebar-btn'>
<IoMenu  className='icon'/>
</button>
  

<div className={`menu-list ${isOpen ? 'show' : ''}`}>
  <ul>
   <li><Link to="/home">Home<IoMdHome className='ui-icon'/></Link> </li>
   <li><Link to="/public">Public <MdPublic  className='ui-icon'/> </Link></li>
   <li><Link to="/infra">Infra <MdDns className='ui-icon' /></Link></li>
    <li> <Link to="/services">Services <MdCleaningServices  className='ui-icon' /></Link></li>

  </ul>
</div>
    </div>
  ) 
}

export default Menubar;
