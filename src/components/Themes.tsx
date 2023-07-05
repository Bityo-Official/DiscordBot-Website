import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import Button from "../components/Button";
import { useTheme } from "next-themes";

const Themes = () => {
  // const [cookie, setCookie] = useCookies<string>(['darkMode']);
  // console.log(cookie);

  // useEffect(() => {
  //   if (cookie.darkMode == 'true') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, []);

  const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);


  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        toggle
      </button>
      
      {/* <button onClick={() => setCookie('darkMode', 'true')} disabled={cookie.darkMode == 'true'} type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 disabled:dark:bg-gray-800 disabled:bg-gray-800 dark:border-gray-600 disabled:text-cyan-400 disabled:disabled:text-cyan-400 dark:text-white  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        <FontAwesomeIcon icon={faMoon} className='pl-1' />
        暗色模式
      </button>
      <button onClick={() => setCookie('darkMode', 'false')} disabled={cookie.darkMode == 'false'} type="button" className=" disabled:text-cyan-400 disabled:disabled:text-cyan-400 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white disabled:dark:bg-gray-200 disabled:bg-gray-200 rounded-r-md border border-gray-200 hover:bg-gray-100  hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <FontAwesomeIcon icon={faSun} className='pl-1' />
          亮色模式
        </button> */}
    </>
  )
}

export default Themes;