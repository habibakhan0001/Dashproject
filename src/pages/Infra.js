import React from 'react'

import {  SiPortainer ,SiGrafana ,SiNginxproxymanager, SiKeycloak ,SiTraefikproxy} from "react-icons/si";

function Infra() {
  return (
 <div className="container">
<h1>Infra</h1>

<div className='second-container'>

{/* <Menubar /> */}
<div className='tools'>



<div className="tool-boxes" onClick={()=>window.open("http://grafana.internal-aumble.com/login","_blank")}>
<SiGrafana  className='icon'/>
<h3>Grafana </h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://edge.internal-aumble.com/login","_blank")}>
<SiNginxproxymanager className='icon'/>
<h3>NginxRever-<br/>seProxy </h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://auth.internal-aumble.com/","_blank")}>
<SiKeycloak className='icon'/>
<h3>KeyCloak </h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://traefik.internal-aumble.com/dashboard/#/","_blank")}>
<SiTraefikproxy className='icon'/>
<h3>Traefik </h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://portainer.internal-aumble.com/#!/auth","_blank")}>
<SiPortainer className='icon'/>
<h3>Portainer </h3>
</div>


</div>
</div>
</div>
  )
}

export default Infra;
