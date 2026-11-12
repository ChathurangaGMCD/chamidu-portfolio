import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";


function About(){

const stats = [
{
icon:<FaCode/>,
number:"10+",
title:"Projects"
},

{
icon:<FaLaptopCode/>,
number:"8+",
title:"Technologies"
},

{
icon:<FaGraduationCap/>,
number:"2+",
title:"Years Learning"
}

];


return(

<section
id="about"
className="
min-h-screen
px-6
py-20
bg-black
flex
items-center
"
>


<div className="
max-w-6xl
mx-auto
w-full
">


<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

viewport={{
once:true
}}

>


<h2 className="
text-4xl
md:text-5xl
font-bold
text-center
mb-8
">

About Me

</h2>



<p className="
text-gray-400
text-center
max-w-3xl
mx-auto
leading-8
mb-12
">

I'm Chamidu Dayan Chathuranga, a Software Engineering
undergraduate at NSBM Green University. I enjoy building
modern web applications, backend systems, and exploring
new technologies like Java, Spring Boot, React and AI.

</p>



<div className="
grid
md:grid-cols-3
gap-8
mb-12
">


{
stats.map((item,index)=>(


<motion.div

key={item.title}

whileHover={{
y:-10
}}

className="
p-8
rounded-2xl
bg-white/5
border
border-white/10
text-center
hover:border-cyan-400
hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
transition
"

>


<div className="
text-4xl
text-cyan-400
flex
justify-center
mb-4
">

{item.icon}

</div>



<h3 className="
text-4xl
font-bold
text-white
">

{item.number}

</h3>



<p className="
text-gray-400
mt-2
">

{item.title}

</p>



</motion.div>


))

}


</div>




<div className="
grid
md:grid-cols-3
gap-6
">


<div className="
p-6
rounded-2xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
">

<h3 className="
text-xl
text-cyan-400
font-semibold
">

Education

</h3>

<p className="
text-gray-400
mt-3
">

BSc (Hons) Software Engineering
<br/>
NSBM Green University

</p>

</div>



<div className="
p-6
rounded-2xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
">

<h3 className="
text-xl
text-cyan-400
font-semibold
">

Technical Focus

</h3>

<p className="
text-gray-400
mt-3
">

Java, Spring Boot, React,
Database Systems and Full Stack Development.

</p>

</div>




<div className="
p-6
rounded-2xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
">

<h3 className="
text-xl
text-cyan-400
font-semibold
">

Career Goal

</h3>

<p className="
text-gray-400
mt-3
">

Become a professional software engineer
and build impactful digital solutions.

</p>

</div>


</div>



</motion.div>


</div>


</section>

)

}


export default About;