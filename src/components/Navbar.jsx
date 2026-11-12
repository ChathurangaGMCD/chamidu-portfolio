import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";


function Navbar(){

const [open,setOpen] = useState(false);


const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact"
];


return(

<nav className="
fixed
top-0
left-0
w-full
z-50
bg-black/40
backdrop-blur-lg
border-b
border-white/10
">


<div className="
max-w-6xl
mx-auto
flex
justify-between
items-center
px-6
py-5
">


{/* Logo */}

<h1 className="
text-2xl
font-bold
text-cyan-400
">

CHAMIDU.DEV

</h1>



{/* Desktop Menu */}

<div className="
hidden
md:flex
gap-8
text-gray-300
">


{
links.map((link)=>(

<a

key={link}

href={`#${link.toLowerCase()}`}

className="
hover:text-cyan-400
transition
cursor-pointer
"

>

{link}

</a>

))

}


</div>



{/* Mobile Button */}

<button

className="
md:hidden
text-3xl
text-cyan-400
"

onClick={()=>setOpen(!open)}

>

{
open ? <HiX/> : <HiMenu/>
}

</button>


</div>



{/* Mobile Menu */}

{

open && (

<div className="
md:hidden
bg-black/90
px-6
pb-6
">

{

links.map((link)=>(

<a

key={link}

href={`#${link.toLowerCase()}`}

className="
block
py-3
text-gray-300
hover:text-cyan-400
"

>

{link}

</a>

))

}

</div>

)

}


</nav>

)

}


export default Navbar;