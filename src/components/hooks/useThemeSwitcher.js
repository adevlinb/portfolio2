import { useEffect, useState } from "react";


export default function useThemeSwitcher() {
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefer-color-scheme: dark)");
        const userPref = window.localStorage.getItem("theme");
        
        const handleChange = () => {
            let check;
            if(mediaQuery.matches) check = "dark";
            if(userPref === "dark") check = "dark";
            else check = "light";
            
            setMode(check);
            if (check === "dark") document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
            
            mediaQuery.addEventListener("change", handleChange);
        }
        
        handleChange();
        
        return () => mediaQuery.removeEventListener("change", handleChange);
        
    }, []);
    
    useEffect(() => {

        if(mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } 
        
        if (mode === "light") {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }

    }, [mode]);
    
    return [mode, setMode];
}
