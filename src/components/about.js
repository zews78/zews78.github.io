
export default function About() {
    const backImg = "https://raw.githubusercontent.com/zews78/zews.in/master/public/profile_img.jpg?token=ANLZMGQGEFKVIJVLPBYFILDBTTT3Y";
    return (
        <div id="about" class="h-screen bg-purple-500"><br />
            <div class="p-2 lg:mx-8 text-yellow-400 lg:text-xl font-bold">About Me.</div>
            <div class="px-8 lg:mx-40 my-2 md:flex">
                {/* <div class="semicircle"></div>
                <div class="cyclender"></div> */}
                <div class="p-2 m-2 about md:w-2/4">
                    <div class="text-left"><p class="my-2">A prefinal-year Electonics and Comm. Engg. undergrad student at NIT Kurukshetra.</p>
                        <p class="my-2">I am Web Developer and Artificial Intelligence enthusiast who is open to collaborate and work on cool ideas.</p>
                        <p class="my-2">I like working with Web Technologies and Autonomy and I enjoy innovating and building new things.</p>        
                        </div>

                    <div class="my-2 lg:my-4 bg-black w-1/4 h-2"></div>
                    <div><p>More over you can also find me in sports complex playing badminton or football</p>
                    <p>x</p>
                    <p>y</p>
                    <p>z</p>
                    <p>z</p>

                    </div>

                </div>
                
                <div class="relative p-2 m-2 invisible md:visible opacity-80 hover:opacity-100 bg-cover bg-center  md:w-2/4 bg-black transform translate-x-3 translate-y-3 " >
                    <div class="absolute z-0 p-2 m-2 bg-gray-500 bg-cover bg-center md:w-full md:h-full transform translate-x-3 translate-y-3" style={{backgroundImage: `url(${backImg})`}}></div>
                </div>
                

                {/* <div class="circle1"></div>
                <div class="rectangle"></div>
                <br/>
                <div class="triangle"></div> */}

            </div>

        </div>

    )
}