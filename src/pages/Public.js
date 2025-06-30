
import React from 'react'
import { SiZulip} from "react-icons/si";
import { BiTask } from "react-icons/bi";
import { SiThunderbird} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaGitlab } from "react-icons/fa6";


function Public() {
  return (
 
<div className="container">
<h1>Public</h1>

<div className='second-container'>

{/* <Menubar /> */}
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
</div>
</div>
</div>
  )
}

export default Public;
