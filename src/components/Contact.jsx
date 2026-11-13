import { motion } from "framer-motion";

import {
FaEnvelope,
FaGithub,
FaLinkedin,
FaMapMarkerAlt,
FaArrowRight
} from "react-icons/fa";


function Contact(){


const contacts=[

{
icon:<FaEnvelope/>,
title:"Email",
text:"your-chamidudayan2331@gmail.com",
link:"mailto:your-chamidudayan2331@gmail.com"
},


{
icon:<FaMapMarkerAlt/>,
title:"Location",
text:"Sri Lanka",
link:"#"
}

];



return(


<section

id="contact"

className="
min-h-screen
px-6
py-24
bg-black
flex
items-center
relative
overflow-hidden
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

viewport={{
once:true
}}

transition={{
duration:0.8
}}

>


<p className="
text-center
text-cyan-400
font-semibold
mb-3
">

✦ Get In Touch

</p>



<h2 className="
text-center
text-4xl
md:text-6xl
font-bold
mb-6
">


Let's build something

<span className="
text-cyan-400
">

 amazing

</span>


</h2>



<p className="
text-gray-400
text-center
max-w-2xl
mx-auto
mb-12
">

Have a project idea, internship opportunity,
or want to collaborate?
Feel free to reach out.

</p>




<div className="
flex
justify-center
mb-10
">


<div className="
px-5
py-2
rounded-full
bg-cyan-400/10
border
border-cyan-400/30
text-cyan-300
text-sm
">

🟢 Available for opportunities

</div>


</div>





<div className="
grid
md:grid-cols-3
gap-8
">



{


contacts.map((item)=>(


<motion.a

key={item.title}

href={item.link}

whileHover={{
y:-10,
scale:1.03
}}


className="
p-8
rounded-3xl
bg-white/5
backdrop-blur-xl
border
border-white/10
hover:border-cyan-400
transition
text-center
"

>


<div className="
text-cyan-400
text-4xl
flex
justify-center
mb-5
">

{item.icon}

</div>



<h3 className="
text-xl
font-bold
text-white
">

{item.title}

</h3>



<p className="
text-gray-400
mt-3
break-all
">

{item.text}

</p>



</motion.a>


))


}





<motion.div

whileHover={{
y:-10,
scale:1.03
}}

className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
text-center
"

>


<div className="
flex
justify-center
gap-8
text-4xl
text-cyan-400
">


<a

href="https://github.com/ChathurangaGMCD"

target="_blank"

>

<FaGithub/>

</a>



<a

href="https://www.linkedin.com/in/chamidu-dayan-91478a278"

target="_blank"

>

<FaLinkedin/>

</a>


</div>



<h3 className="
text-xl
font-bold
mt-5
">

Social Media

</h3>



<p className="
text-gray-400
mt-3
flex
justify-center
items-center
gap-2
">

Let's connect

<FaArrowRight/>

</p>



</motion.div>



</div>



</motion.div>


</div>


</section>


)

}


export default Contact;