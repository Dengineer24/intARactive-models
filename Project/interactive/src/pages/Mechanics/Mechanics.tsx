import React from 'react'
import { Link } from "react-router-dom"
import SpureGearImg from "../../assets/spure_gear.jpeg"
import TurbofanImg from "../../assets/Turbofan_Engine.jpeg"
import F6BoxerImg from "../../assets/F6_Boxer.jpeg"
import CombustionImg from "../../assets/internal_combustion_engine.jpeg"
import V8Img from "../../assets/v8.jpeg"

export default function Mechanics() {

    return (
        <div className="pt-6 bg-homeImg">
            <div className="grid w-full py-10 place-items-center text-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                    Select Mechanical Parts
                </h1>
                <div className="inline-flex h-1 bg-blue-dark rounded-full w-72"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

                <Link to='/turbofan'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-dark rounded-lg" alt="" src=
                                {TurbofanImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Turbofan Engine</div>
                        </div>
                    </div>
                </Link>

                <Link to='/combustionengine'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-dark rounded-lg" alt="" src=
                                {CombustionImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Internal Combustion Engine</div>
                        </div>
                    </div>
                </Link>

                <Link to='/v8'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-dark rounded-lg" alt="" src=
                                {V8Img} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">V8 Pontiac</div>
                        </div>
                    </div>
                </Link>

                <Link to='/f6boxer'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-dark rounded-lg" alt="" src=
                                {F6BoxerImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">F6 Boxer</div>
                        </div>
                    </div>
                </Link>

                <Link to='/spuregear'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-dark rounded-lg" alt="" src={SpureGearImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Spure Gear</div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
