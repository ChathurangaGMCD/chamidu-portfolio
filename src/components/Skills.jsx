import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaHtml5
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiPython
} from "react-icons/si";


function Skills(){

const skills = [

{
name:"Java",
level:90,
icon:<FaJava/>
},

{
name:"Spring Boot",
level:85,
icon:<SiSpringboot/>
},

{
name:"React",
level:85,
icon:<FaReact/>
},

{
name:"JavaScript",
level:80,
icon:<SiJavascript/>
},

{
name:"Database",
level:85,
icon:<FaDatabase/>
},

{
name:"Python & AI",
level:75,
icon:<SiPython/>
},

{
name:"HTML & CSS",
level:90,
icon:<FaHtml5/>
},

{
name:"Git & GitHub",
level:80,
icon:<FaGitAlt/>
}

];


return(

<section
id="skills"
className="
min-h-screen
px-6
py-20
bg-black
"
>


<div className="
max-w-6xl
mx-auto
">


<motion.h2

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
text-4xl
md:text-5xl
font-bold
text-center
mb-12
"

>

My Technical Skills

</motion.h2>



<div className="
grid
md:grid-cols-2
gap-8
">


{

skills.map((skill,index)=>(


<motion.div

key={skill.name}

initial={{
opacity:0,
x:index%2===0 ? -50 : 50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}


className="
p-6
rounded-2xl
bg-white/5
border
border-white/10
backdrop-blur-lg
hover:border-cyan-400
transition
"

>


<div className="
flex
items-center
gap-4
mb-4
">


<div className="
text-4xl
text-cyan-400
">

{skill.icon}

</div>


<h3 className="
text-xl
font-semibold
">

{skill.name}

</h3>


</div>



<div className="
w-full
h-3
bg-gray-800
rounded-full
overflow-hidden
">


<motion.div

initial={{
width:0
}}

whileInView={{
width:`${skill.level}%`
}}

transition={{
duration:1
}}

className="
h-full
bg-gradient-to-r
from-cyan-400
to-blue-500
rounded-full
"

/>


</div>



<p className="
text-right
text-cyan-300
mt-2
">

{skill.level}

</p>



</motion.div>


))

}


</div>


</div>


</section>

)

}


export default Skills;