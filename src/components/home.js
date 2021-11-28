

export default function Home() {
    return (
        <div id="home" class="bg-yellow-500 h-screen dark:bg-green-500"><br />
            <div class="px-8 lg:mx-40 my-40">
                {/* <div class="semicircle"></div>
                <div class="cyclender"></div> */}
                <div class="">
                    <div class="cursor-default">Hello I'm</div>
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