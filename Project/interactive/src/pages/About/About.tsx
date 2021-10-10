import React from 'react'
// style="top:5em;"
//{{&gt; "site-nav"}}

// menu
// <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>

/* back link
<div className="font-sans">
<span className="text-base text-purple-500 font-bold">&laquo;</span> <a href="#" className="text-base md:text-sm text-purple-500 font-bold no-underline hover:underline">Back Link</a>
<h1 className="font-sans break-normal text-gray-900 pt-6 pb-2 text-xl">Help page title</h1>
<hr className="border-b border-gray-400" />
</div>
*/

/* sample list
<ol>
               <li className="py-3"></li>
               <li className="py-3"></li>
               <li className="py-3"></li>
            </ol>
            */

export default function About() {
    return (
        <>

            
            <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-2">
         <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
            
            <div className="block lg:hidden sticky inset-0">
               <button id="menu-toggle" className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none">
                  <svg className="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
               </button>
            </div>
            <div className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" id="menu-content">
               <ul className="list-reset">
                  <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <a href="#" className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500">
                     <span className="pb-1 md:pb-0 text-sm text-gray-900 font-bold">Inspiration</span>
                     </a>
                  </li>
                  <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <a href="#" className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                     <span className="pb-1 md:pb-0 text-sm">What it does</span>
                     </a>
                  </li>
                  <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <a href="#" className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                     <span className="pb-1 md:pb-0 text-sm">Challenges </span>
                     </a>
                  </li>
                  <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <a href="#" className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                     <span className="pb-1 md:pb-0 text-sm">Analytics</span>
                     </a>
                  </li>
                  <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                     <a href="#" className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
                     <span className="pb-1 md:pb-0 text-sm">Payments</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
            
            
            
         <h1 className="py-2 font-semibold font-Overpass text-black text-lg">💡 Inspiration</h1>
            <p className="py-6 font-Overpass">
            &emsp; Our project strives to discover possible solutions to the question in the Education track: What can technology facilitate in helping parents in homeschooling their children?
	Mechanical engineering requires hands-on and visual experiments, yet students that take remote classes or homeschooled students face difficulties in understanding concepts because they do not have access to learning materials at home. And that is where IntARactive can help. 
            </p>
            
            
            <blockquote className="border-l-4 border-blue-dark italic my-8 pl-8 md:pl-12 font-Overpass">
            I do think that a significant portion of the population of developed countries, and eventually all countries, will have AR experiences every day, almost like eating three meals a day. It will become that much a part of you. —Tim Cook
                </blockquote>
            
            <hr className="border-b border-gray-400" />
            
            <p className="py-6 font-Overpass">
            Leave quetions/suggestions in the chatroom!
            </p>
            
         </div>
         
         
         <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 px-4 py-6">
            <span className="text-base text-blue-dark font-bold">&lt;</span> <a href="#" className="text-base md:text-sm text-blue-dark font-Overpass no-underline hover:underline">Back to Top</a>
         </div>
      </div>

        </>
    )
}
/* sample block code
<p className="py-6">Example code block:</p>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
				<code className="break-words whitespace-pre-wrap">
&lt;header className="site-header outer"&gt;
&lt;div className="inner"&gt;

&lt;/div&gt;
&lt;/header&gt;
				</code>
			</pre>
            
            */

/* no use
<div className="flex items-center">
               <svg className="h-16 fill-current text-gray-600 hover:shadow hover:bg-purple-100 hover:text-green-500 p-4 mr-2 border rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"/>
               </svg>
               <svg className="h-16 fill-current text-gray-600 hover:shadow hover:bg-purple-100 hover:text-red-500 p-4 mr-2 border rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"/>
               </svg>
               <div className="pl-4">
                  <p className="text-gray-800 font-bold">Did you find this article useful?</p>
                  <p className="text-xs text-gray-600 pt-2">0 out of 0 found this useful</p>
               </div>
            </div>*/