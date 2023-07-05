import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import Button from "../components/Button";
import { useTheme } from "next-themes";

const Themes = () => {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    mounted && (
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} type="button" className="flex items-center">
        {
          theme === 'dark' ? (
            <>
              <FontAwesomeIcon icon={faMoon} className='mr-1 w-4' />
              <p>亮色模式</p>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSun} className='mr-1 w-4' />
              <p>暗色模式</p>
            </>
          )
        }
      </button>
    )
  )
}

export default Themes;