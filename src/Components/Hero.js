import React from 'react'
import { FaFacebookF,FaTwitterSquare,FaGithub,FaStarOfLife,FaServer,FaAccusoft } from 'react-icons/fa';
import Typed from 'react-typed';



const Hero = () => {
  return (
    <section className='w-full md:h-screen py-16 bg-gray-800'>

        <main className='w-11/12 mx-auto grid md:grid-cols-2 gap-6 justify-between items-center'>

            {/* tittle section */}
            <div className='md:max-w-[450px] w-[300px] mx-auto justify-center items-center'>

            <Typed 
            className='text-3xl md:text-5xl font-bold text-white'
                    strings={['Data to enrich your']}
                    typeSpeed={90}
                    backSpeed={90}
                    loop
                /> <br />
                
                
                <span className='text-blue-800 text-3xl md:text-5xl font-bold'>online buisness</span>
                <p className='text-gray-400 text-lg'>Es und es gezeigt langst verklungen fuhlt die festzuhalten guten wie. Sich horen bringt ihr stunden gleich alten. Ich herz.</p>

                <p className='text-lg text-gray-300 my-4'>USED BY</p>

                <ul className='flex space-x-4 text-slate-300'>

                    <li className='flex items-center space-x-2'>
                       <FaServer/> <p>Staxx</p>
                    </li>

                    <li className='flex items-center space-x-2'>
                       <FaStarOfLife className='animate-spin'/> <p>Star Ai</p>
                    </li>

                    <li className='flex items-center space-x-2'>
                       <FaAccusoft/> <p>Accusoft</p>
                    </li>
                </ul>
            </div>


            {/* form section */}
            <div className='w-[400px] border rounded p-6 bg-slate-100 shadow shadow-green-300'>

                <p>Sign in with</p>

                <ul className='flex text-gray-600 justify-between space-x-1 my-2'>
                    <FaFacebookF className='border border-slate-400 w-full p-1 rounded' size={40}/>
                    <FaTwitterSquare className='border border-slate-400 w-full p-1 rounded' size={40}/>
                    <FaGithub className='border border-slate-400 w-full p-1 rounded' size={40}/>
                </ul>

                 <div className='flex items-center my-4'>
                 <hr className='w-40 border-red-300'/>
                 <span className='px-2 font-semibold text-2xl text-gray-600'>or</span>
                 <hr className='w-40 border-pink-300'/>
                 </div>

                <form className='space-y-2' action="">
                    
                    <input className='w-full rounded-lg border border-slate-400 py-2 px-2' type="text" placeholder='Write your name' />

                    <input className='w-full rounded-lg border border-slate-400 py-2 px-2' type="email" placeholder='Write your email' /><br />

                    <input className='w-full rounded-lg border border-slate-400 py-2 px-2' type="password" placeholder='Type your password' /><br />
                </form>

                <button className='w-full my-4 border bg-blue-800 py-2 rounded-md text-slate-200 font-semibold mb-4'>Create your account</button>

                <hr className='my-4 border-green-800'/>
                
                <p className='text-slate-500'>
                        By signing up, you agree to our <span className='text-blue-500'>Terms, Data Policy and Cookies Policy.</span>
                </p>
            </div>
        </main>
    </section>
  )
}

export default Hero