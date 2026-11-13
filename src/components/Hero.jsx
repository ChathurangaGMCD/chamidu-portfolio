import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaReact,
} from "react-icons/fa";

import {
  SiSpringboot,
} from "react-icons/si";

import profile from "../assets/images/profile.jpg";


function Hero() {

return (

<section
id="home"
className="
relative
min-h-screen
flex
items-center
px-6
pt-20
overflow-hidden
bg-gradient-to-br
from-black
via-gray-950
to-blue-950
"
>


{/* Glow Background */}

<div className="
absolute
top-20
left-20
w-96
h-96
bg-cyan-400
rounded-full
blur-[150px]
opacity-20
"/>


<div className="
absolute
bottom-20
right-20
w-96
h-96
bg-blue-600
rounded-full
blur-[150px]
opacity-20
"/>



<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
relative
z-10
">


{/* LEFT */}

<motion.div

initial={{
opacity:0,
x:-80
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

>


<p className="
text-cyan-400
text-lg
mb-4
">

👋 Hello, I'm

</p>


<h1 className="
text-5xl
md:text-7xl
font-bold
leading-tight
">


Chamidu

<span className="
text-cyan-400
">

 Dayan

</span>


<br/>


<span className="
bg-gradient-to-r
from-cyan-400
to-blue-600
bg-clip-text
text-transparent
">

Software Engineer

</span>


</h1>




<TypeAnimation

sequence={[
"Software Engineering Undergraduate",
2000,
"Java Spring Boot Developer",
2000,
"React Full Stack Developer",
2000,
"Backend Developer",
2000
]}

wrapper="h2"

speed={50}

repeat={Infinity}

className="
text-xl
md:text-2xl
text-cyan-300
mt-6
font-semibold
"

/>



<p className="
text-gray-400
mt-6
max-w-xl
leading-8
">


Software Engineering undergraduate at
NSBM Green University.
Passionate about Java, Spring Boot,
React, databases and building scalable
modern software solutions.


</p>



{/* Tech badges */}

<div className="
flex
gap-4
mt-6
flex-wrap
">


<div className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white/10
border
border-white/10
">

<FaJava className="text-orange-400"/>

Java

</div>



<div className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white/10
border
border-white/10
">

<SiSpringboot className="text-green-400"/>

Spring Boot

</div>



<div className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white/10
border
border-white/10
">

<FaReact className="text-blue-400"/>

React

</div>


</div>





{/* Buttons */}

<div className="
mt-8
flex
gap-5
flex-wrap
">


<a

href="#projects"

className="
px-7
py-3
rounded-full
bg-cyan-400
text-black
font-bold
hover:scale-110
transition
"

>

View Projects 🚀

</a>



<a

href="/Chamidu_CV.pdf"

download

className="
px-7
py-3
rounded-full
border
border-cyan-400
hover:bg-cyan-400
hover:text-black
transition
"

>

Download CV

</a>


</div>



{/* Social */}

<div className="
flex
gap-5
mt-8
text-3xl
">


<a
href="https://github.com/ChathurangaGMCD"
target="_blank"
>

<FaGithub
className="
hover:text-cyan-400
transition
"
/>

</a>



<a
href="#"
>

<FaLinkedin

className="
hover:text-cyan-400
transition
"

/>

</a>



</div>


</motion.div>





{/* RIGHT IMAGE */}

<motion.div

initial={{
opacity:0,
scale:0.7
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
flex
justify-center
"

>


<motion.div

animate={{
y:[0,-20,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
relative
w-80
h-80
"

>


<div className="
absolute
inset-0
rounded-full
bg-cyan-400
blur-3xl
opacity-30
"/>



<img

src={profile}

alt="Chamidu"

className="
relative
w-full
h-full
object-cover
rounded-full
border-4
border-cyan-400
shadow-[0_0_50px_rgba(6,182,212,0.5)]
"

/>


</motion.div>


</motion.div>


</div>


</section>

)

}


export default Hero;