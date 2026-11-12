import { motion } from "framer-motion";


function Projects(){

const projects = [

{
title:"User Management Dashboard",
description:
"Full stack user management system with pagination, sorting and backend API.",
tech:"Java | Spring Boot | MySQL"
},


{
title:"Smart Grocery AI Assistant",
description:
"AI based grocery assistant to help users with smart shopping suggestions.",
tech:"Python | AI | LLM"
},


{
title:"Online Grocery Ordering System",
description:
"E-commerce system for managing products, customers and orders.",
tech:"React | Java | Database"
}


];


return(

<section
id="projects"
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

My Projects

</motion.h2>



<div className="
grid
md:grid-cols-3
gap-6
">


{
projects.map((project)=>(


<motion.div

key={project.title}

whileHover={{
scale:1.05
}}

className="
p-6
rounded-2xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
"


>


<h3 className="
text-xl
font-bold
text-cyan-400
">

{project.title}

</h3>


<p className="
text-gray-400
mt-4
">

{project.description}

</p>


<p className="
text-sm
text-gray-500
mt-4
">

{project.tech}

</p>



<button className="
mt-6
px-5
py-2
rounded-full
border
border-cyan-400
hover:bg-cyan-400
hover:text-black
transition
">

View Project

</button>



</motion.div>


))

}


</div>


</div>


</section>

)

}


export default Projects;