import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";


function Background(){

const particlesInit = async(engine)=>{
  await loadFull(engine);
};


return(

<Particles

className="fixed inset-0 -z-10"

init={particlesInit}

options={{
background:{
color:{
value:"#000000"
}
},

particles:{
number:{
value:60
},

size:{
value:2
},

move:{
enable:true,
speed:1
},

opacity:{
value:0.5
},

links:{
enable:true,
distance:150,
opacity:0.2
}

}

}}

/>

)

}


export default Background;