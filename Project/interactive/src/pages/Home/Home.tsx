import React from 'react'
//import { Link } from 'react-router-dom'
import Logo from "../../assets/ProjectLogo.png"
import Exit from "../../assets/logout.png"

export default function Home(){
    return (
        <>
        
                    <p className="self-center text-xl tracking-wide text-justify font-sourceSerifPro">
                        IntARactive Models
                    </p>
                    <div className = "h-16">
                        <img src ={Logo} alt = "img" className = "w-16 lg:w-32" />
                    </div>
                    <div className = "h-16">
                        <img src ={Exit} alt = "img" className = "w-16 lg:w-32" />
                    </div>
                
        </>
    )
}