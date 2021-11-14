

import { useState } from 'react'
import { Switch } from '@headlessui/react'


function MyToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-900' : 'bg-gray-200'
      } relative inline-flex flex-shrink-0 items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }  pointer-events-none inline-block h-6 w-6 transform bg-white rounded-full shadow-lg transition ease-in-out duration-200`}
      />
    </Switch>
  )
}

export default function Home() {
    var darkMode = "darka";
    // darkMode==true ? 
    return (
        <html class={darkMode}>
        <div>
            <h1>hello bor</h1>
            <button class="lg:dark:hover:bg-black ...">
                hello
            </button>

            <br></br>
            <div class="bg-white dark:bg-gray-800">
                <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
                <p class="text-gray-600 dark:text-gray-300">
                    Lorem ipsum...Yo boi!!
                </p>
            </div>
        </div>
        <div>{MyToggle()}</div>
        </html>
    )
}