import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt
} from "react-icons/fa";


function Contact(){

return(

<section
id="contact"
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
mb-6
">

Contact Me

</h2>



<p className="
text-gray-400
text-center
max-w-2xl
mx-auto
mb-12
">

Have a project idea or want to collaborate?
Feel free to contact me.

</p>



<div className="
grid
md:grid-cols-3
gap-8
">



{/* Email */}

<motion.div

whileHover={{
y:-10
}}

className="
p-8
rounded-2xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
text-center
"

>


<FaEnvelope
className="
text-cyan-400
text-4xl
mx-auto
mb-5
"
/>


<h3 className="
text-xl
font-semibold
">

Email

</h3>


<p className="
text-gray-400
mt-3
">

your-email@gmail.com

</p>


</motion.div>





{/* Location */}

<motion.div

whileHover={{
y:-10
}}

className="
p-8
rounded-2xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
text-center
"

>


<FaMapMarkerAlt
className="
text-cyan-400
text-4xl
mx-auto
mb-5
"
/>


<h3 className="
text-xl
font-semibold
">

Location

</h3>


<p className="
text-gray-400
mt-3
">

Sri Lanka

</p>


</motion.div>





{/* Social */}

<motion.div

whileHover={{
y:-10
}}

className="
p-8
rounded-2xl
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
gap-6
text-4xl
text-cyan-400
">


<a href="#">

<FaGithub/>

</a>


<a href="#">

<FaLinkedin/>

</a>


</div>



<h3 className="
text-xl
font-semibold
mt-5
">

Social

</h3>



<p className="
text-gray-400
mt-3
">

Let's connect

</p>


</motion.div>



</div>


</motion.div>


</div>


</section>

)

}


export default Contact;