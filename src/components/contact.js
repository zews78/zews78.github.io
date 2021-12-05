import { FaLinkedinIn } from 'react-icons/fa';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";


export default function Contact() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div id="contact" class="h-screen relative dark:bg-gray-900"><br />
            <div class="p-2 lg:mx-8 text-yellow-400 lg:text-xl font-bold">Contact.</div>
            <div class="px-8 lg:mx-40 my-2 dark:text-white">
                
                <div class="text-xl md:text-3xl">Let's Talk!</div>
                <br></br>
                <div class="md:w-3/5 tracking-wider leading-relaxed">Feel free to reach out if you want to build something together, have question, share your thoughts or just want to connect.</div>
                <div><br></br></div>
                <a href="mailto:shariquealam52@gmail.com"><button type="button" class="lg:text-lg text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Ping me</button></a>
                <div><br></br></div>


                <div class="flex">
                <a
                  href="https://github.com/zews78"
                >
                  <AiFillGithub class="text-4xl mr-2 hover:text-blue-700 text-blue-500"/>
                </a>
                                <a
                  href="https://twitter.com/shariquealam52"
                >
                  <AiOutlineTwitter class="text-4xl mr-2 hover:text-blue-700 text-blue-500"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/sharique-alam-4b0aa0195/"
                >
                  <FaLinkedinIn class="text-4xl mr-2 hover:text-blue-700 text-blue-500"/>
                </a>
                <a
                  href="https://www.instagram.com/i_m.sharique/"
                >
                  <AiFillInstagram class="text-4xl mr-2 hover:text-blue-700 text-blue-500"/>
                </a>
                </div>

            </div>

            <div class="text-center text-sm w-full absolute bottom-2 dark:text-white">
                <p>Made with <span class="text-base">♥️</span> by Sharique Alam</p>
                <p>Copyright © {year} zews</p>
            </div>

        </div>

    )
}