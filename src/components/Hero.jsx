import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.jpg";


function Hero() {

  return (

    <section className="
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
    ">


      {/* Background Glow */}

      <div className="
        absolute
        top-20
        left-20
        w-72
        h-72
        bg-cyan-400
        rounded-full
        blur-[120px]
        opacity-20
      ">
      </div>


      <div className="
        absolute
        bottom-20
        right-20
        w-72
        h-72
        bg-blue-500
        rounded-full
        blur-[120px]
        opacity-20
      ">
      </div>



      <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-10
        items-center
        relative
        z-10
      ">


        {/* LEFT SIDE */}

        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:1
          }}

        >


          <h3 className="
            text-cyan-400
            text-xl
          ">
            Hi, I'm
          </h3>



          <h1 className="
            text-5xl
            md:text-7xl
            font-bold
            mt-3
          ">

            Chamidu
            <br/>
            Dayan
            <br/>
            Chathuranga

          </h1>



          <TypeAnimation

            sequence={[
              "Software Engineering Undergraduate",
              2000,
              "Full Stack Developer",
              2000,
              "Java & Spring Boot Developer",
              2000,
              "AI Content Creator",
              2000
            ]}

            wrapper="h2"

            speed={50}

            className="
              text-2xl
              text-cyan-300
              mt-5
              font-semibold
            "

          />



          <p className="
            text-gray-400
            mt-5
          ">

            Full Stack Developer | Java | Spring Boot | AI Creator

          </p>



          <div className="
            mt-8
            flex
            gap-5
          ">


            <button className="
              px-6
              py-3
              rounded-full
              bg-cyan-400
              text-black
              font-semibold
              hover:scale-110
              transition
            ">

              View Projects

            </button>



            <button className="
              px-6
              py-3
              rounded-full
              border
              border-cyan-400
              hover:bg-cyan-400
              hover:text-black
              transition
            ">

              Download CV

            </button>


          </div>


        </motion.div>





        {/* RIGHT SIDE PHOTO */}


        <motion.div

          initial={{
            opacity:0,
            scale:0.8
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
              y:[0,-15,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
              w-80
              h-80
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-600
              p-1
              shadow-[0_0_50px_rgba(6,182,212,0.5)]
            "

          >


            <img

              src={profile}

              alt="Chamidu"

              className="
                w-full
                h-full
                object-cover
                rounded-full
              "

            />


          </motion.div>



        </motion.div>


      </div>


    </section>

  )

}


export default Hero;