// import {chartStyle} from  "./chart.css"
import "./chart.css"

export default function Home() {
    return (
        <div id="home" class="h-screen bg-gray-100 dark:text-yellow-500 dark:bg-gray-900"><br />
            <div class="path-move">

                <svg class="stroke-current text-black dark:text-yellow-500" viewBox="0 0 750 363">

                    <path class="path" d="M 0 350 Q 100 200 150 300 C 200 400 200 350 250 250 C 300 150 400 400 400 250 C 400 150 450 350 500 250 C 550 150 550 400 550 200 C 550 100 700 300 750 100 " />
                </svg>
            </div>
            <div class="px-8 lg:mx-40 move">
                {/* <div class="semicircle"></div>
                <div class="cyclender"></div> */}
                <div class="">
                    <div class="cursor-default ml-1">Hello I'm</div>
                    <div class="cursor-default"><b><p style={{ fontSize: "clamp(40px, 8vw, 80px)" }}>Sharique Alam</p></b></div>
                </div>
                <a href="/resume"><button class=" lg:text-lg text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Get my Resume
                </button></a>

                {/* <div class="circle1"></div>
                <div class="rectangle"></div>
                <br/>
                <div class="triangle"></div> */}

            </div>


        </div>

    )
}