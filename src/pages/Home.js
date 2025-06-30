
import "./Home.css";
import Menubar from "../components/Menubar";

import { SiZulip,SiInfluxdb ,SiUml,SiPortainer,SiThunderbird ,SiGrafana ,SiNginxproxymanager, SiKeycloak ,SiTraefikproxy} from "react-icons/si";
import { FaGitlab } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { IoBarChartOutline } from "react-icons/io5";

function Home() {
  return (
    <div className="container">
<p>Welcome To My Toolnest</p>

<div className='second-container'>

<Menubar />
<div className='tools'>

<div className="tool-boxes" onClick={()=>window.open("https://zulip.aumble.com","_blank")}>
<SiZulip className='icon'/>
<h4>Zulip</h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://planka.internal-aumble.com","_blank")}>
<BiTask  className='icon'/>
<h4>Planka</h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("https://github.com/","_blank")}>
<FaGitlab className='icon' />
<h4>Gitlab</h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("https://www.thunderbird.net/en-US/","_blank")}>
<SiThunderbird className='icon' />
<h3>Thunder<br/>Bird</h3>
</div>

<div className="tool-boxes" onClick={()=>window.open("https://aumble.com/","_blank")}>
<CgWebsite className='icon'/>
<h4>Aumble </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://grafana.internal-aumble.com/login","_blank")}>
<SiGrafana  className='icon'/>
<h4>Grafana </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://edge.internal-aumble.com/login","_blank")}>
<SiNginxproxymanager className='icon'/>
<h4>NginxRever-<br/>seProxy </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://auth.internal-aumble.com/","_blank")}>
<SiKeycloak className='icon'/>
<h4>KeyCloak </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://traefik.internal-aumble.com/dashboard/#/","_blank")}>
<SiTraefikproxy className='icon'/>
<h4>Traefik </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://portainer.internal-aumble.com/#!/auth","_blank")}>
<SiPortainer className='icon'/>
<h4>Portainer </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://plantuml.internal-aumble.com/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000","_blank")}>
<SiUml className='icon'/>
<h4>PlantUML </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://outline.internal-aumble.com/","_blank")}>
<IoBarChartOutline className='icon'/>
<h4>Outline </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://openwebui.internal-aumble.com/auth?redirect=%2F","_blank")}>
<PiWebhooksLogoFill  className='icon'/>
<h4>OpenWebUI </h4>
</div>

<div className="tool-boxes" onClick={()=>window.open("http://influxdb.internal-aumble.com/signin","_blank")}>
<SiInfluxdb className='icon'/>
<h4>InfluxDB </h4>
</div>
</div>
</div>
</div>
  )
}

export default Home
