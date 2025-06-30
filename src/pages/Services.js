import React from 'react'

import { SiInfluxdb ,SiUml } from "react-icons/si";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { IoBarChartOutline } from "react-icons/io5";

function Services() {
  return (
   <div className="container">
<h1>Services</h1>

<div className='second-container'>

{/* <Menubar /> */}
<div className='tools'>



<div className="tool-boxes" onClick={()=>window.open("http://plantuml.internal-aumble.com/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000","_blank")}>
<SiUml className='icon'/>
<h3>PlantUML </h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://outline.internal-aumble.com/","_blank")}>
<IoBarChartOutline className='icon'/>
<h3>Outline </h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://openwebui.internal-aumble.com/auth?redirect=%2F","_blank")}>
<PiWebhooksLogoFill  className='icon'/>
<h3>OpenWebUI </h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://influxdb.internal-aumble.com/signin","_blank")}>
<SiInfluxdb className='icon'/>
<h3>InfluxDB </h3>
</div>
</div>
</div>
</div>
  )
}

export default Services;
