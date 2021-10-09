import {Fragment} from 'react'
//import { Link } from 'react-router-dom'
import Exit from "../assets/logout.png"
import Logo from "../assets/ProjectLogo.png"

export default function Navbar(){
    return (
        <>
       <nav className="bg-white shadow-lg">
		<div className="max-w-6xl mx-auto px-4">
			<div className="flex justify-between">
				<div className="flex space-x-7">
					
					<div>
						<a href="#" className="flex items-center py-4 px-2">
							<img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
							<span className="font-semibold text-gray-500 text-lg">Navigation</span>
						</a>
					</div>
					
                    
					<div className="hidden md:flex items-center space-x-1">
						<a
							href=""
							className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                                Home
                        </a>
						<a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                                Mechanics
                        </a>
						<a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                                About
                        </a>
						<a
							href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                                Chatroom
                        </a>
					</div>
				</div>
			</div>
		</div>
	</nav>
        </>   
    )
}