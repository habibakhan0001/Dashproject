import React from 'react';
import Menubar from "./Menubar";

import { SiZulip,SiInfluxdb ,SiUml,SiPortainer,SiThunderbird ,SiGrafana ,SiNginxproxymanager, SiKeycloak ,SiTraefikproxy} from "react-icons/si";
import { FaGitlab } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { IoBarChartOutline } from "react-icons/io5";


function Toolnest() {
return (
<div className="container">
<h1>Toolnest</h1>

<div className='second-container'>

<Menubar />
<div className='tools'>

<div className="tool-boxes" onClick={()=>window.open("https://zulip.aumble.com","_blank")}>
<SiZulip className='icon'/>
<h3>Zulip</h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://planka.internal-aumble.com","_blank")}>
<BiTask  className='icon'/>
<h3>Planka</h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("https://github.com/","_blank")}>
<FaGitlab className='icon' />
<h3>Gitlab</h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("https://www.thunderbird.net/en-US/","_blank")}>
<SiThunderbird className='icon' />
<h3>Thunder<br/>Bird</h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("https://aumble.com/","_blank")}>
<CgWebsite className='icon'/>
<h3>Aumble </h3>
</div>

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

export default Toolnest;
