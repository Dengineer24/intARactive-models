import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/ProjectLogoWhite.png"
import Exit from "../../assets/logout.png"

export default function Home(){
    return (
        <>
            <div className=" md:pt-6 bg-homeImg h-screen w-full">
                <div className="p-4 origin-bottom-right lg:mx-36 md:mx-8">
                    <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                        <div className="pr-4 md:flex md:flex-col md:justify-center align-middle pt-0">

                            <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-blue-dark font-Overpass md:text-4xl lg:text-7xl">IntARactive</h2>

                            <p className="self-center text-xl tracking-wide text-justify font-Overpass">
                                PlaceHolder text
                            </p>

                            <Link to="/mechanics" className="md:w-1/3">
                                <button className="self-center p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-Overpass md:w-full bg-blue-dark bg-blue-dark  hover:shadow-lg ">Explore</button>
                            </Link>

                        </div>

                        <div className="h-full">
                            <img src={Logo} alt="img" className="w-full lg:p-10" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}