import { useEffect, useState } from 'react';
import s from './index.module.css';

export default function ToggleTheme() {
   const [toggle, setToggle] = useState(true);
   const currentTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : null;

   useEffect(() => {
      if (currentTheme) {
         document.documentElement.setAttribute('data-theme', currentTheme);
         if (currentTheme === 'dark') {
            setToggle(false); 
         }
      }
   }, [currentTheme]);

   const toggleTheme = () => {
      if (toggle) {
         document.documentElement.setAttribute('data-theme', 'dark');
         localStorage.setItem('theme', 'dark');
         setToggle(false);
      } else {
         document.documentElement.setAttribute('data-theme', 'light');
         localStorage.setItem('theme', 'light');
         setToggle(true);
      }
   };

   return (
      <div className={s.toggleThemeBox}>
         <div
            className={
               toggle
                  ? s.toggleThemeIconLight
                  :  s.toggleThemeIconDark
            }
         ></div>
         <div className={s.toggleThemeCheckedBox} onClick={toggleTheme}>
            <div
               className={toggle ? s.toggleThemeCheckLight : s.toggleThemeCheckDark}
            ></div>
         </div>
      </div> 
   );
}