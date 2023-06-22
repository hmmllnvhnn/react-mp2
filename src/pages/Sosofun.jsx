import React from 'react'
import Sidenav from '../components/Sidenav'
import { AiFillYoutube } from '/node_modules/react-icons/ai'

const Sosofun = () => {
    return (
        <div id='sosofun' className='bg-black w-screen h-full scroll-smooth mb-[-200px]'>
            <div className='flex flex-cols w-screen h-screen'>
                <Sidenav />
                <span>
                    <div className='p-20 ml-[100px] w-full md:w-[400px]'>
                        <h1 className='text-white text-4xl mt-[-39.5px]'>SO SO FUN</h1>
                        <div className='bg-white rounded-lg shadow-lg'>
                            <img
                                src='https://pbs.twimg.com/media/FzIARpyaMAEkfL0?format=jpg&name=360x360'
                                className='rounded-t-lg'
                            />
                            <div className='p-6'>
                                <h2 className='font-bold mt-[-18px] mb-1 text-xl text-center px-2 text-red-900'>
                                    EPISODE 1
                                </h2>
                                <a href='https://youtu.be/y3fg7AFATA0'>
                                    <button
                                        onClick={'https://youtu.be/y3fg7AFATA0'}
                                        className='px-20 pt-1 pb-1 pl-8 pr-8 mb-[-20px] rounded-2xl cursor-pointer justify-center'
                                    >
                                        <div className='flex'>
                                            <AiFillYoutube className='text-4xl text-white' />
                                            <h2 className='text-white pt-2 ml-2'>Youtube</h2>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </span>
                <span>
                    <div className='p-20 ml-[-120px] w-full md:w-[400px]'>
                        {' '}
                        <div className='bg-white rounded-lg shadow-lg'>
                            <img
                                src='https://pbs.twimg.com/media/FzIATJhaYAATmGT?format=jpg&name=large'
                                className='rounded-t-lg'
                            />
                            <div className='p-6'>
                                <h2 className='font-bold mt-[-18px] mb-1 text-xl text-center px-2 text-red-900'>
                                    EPISODE 2
                                </h2>
                                <a href='https://youtu.be/g_NRiQ5k8nA'>
                                    <button
                                        onClick={'https://youtu.be/g_NRiQ5k8nA'}
                                        className='px-20 pt-1 pb-1 pl-8 pr-8 mb-[-20px] rounded-2xl cursor-pointer justify-center'
                                    >
                                        <div className='flex'>
                                            <AiFillYoutube className='text-4xl text-white' />
                                            <h2 className='text-white pt-2 ml-2'>Youtube</h2>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </span>
                <span>
                    <div className='p-20 ml-[-120px] w-full md:w-[400px]'>
                        {''}
                        <div className='bg-white rounded-lg shadow-lg'>
                            <img
                                src='https://pbs.twimg.com/media/FzIAUyUaYAELkCl?format=jpg&name=360x360'
                                className='rounded-t-lg'
                            />
                            <div className='p-6'>
                                <h2 className='font-bold mt-[-18px] mb-1 text-xl text-center px-2 text-red-900'>
                                    EPISODE 3
                                </h2>
                                <a href='https://youtu.be/9i8vhgF2H7w'>
                                    <button
                                        onClick={'https://youtu.be/9i8vhgF2H7w'}
                                        className='px-20 pt-1 pb-1 pl-8 pr-8 mb-[-20px] rounded-2xl cursor-pointer justify-center'
                                    >
                                        <div className='flex'>
                                            <AiFillYoutube className='text-4xl text-white' />
                                            <h2 className='text-white pt-2 ml-2'>Youtube</h2>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </span>
                <br />
                <span>
                    <div className='p-20 ml-[-120px] w-full md:w-[400px]'>
                        <div className='bg-white rounded-lg shadow-lg'>
                            <img
                                src='https://pbs.twimg.com/media/FzIAVfIaIAAPRKS?format=jpg&name=360x360'
                                className='rounded-t-lg'
                            />
                            <div className='p-6'>
                                <h2 className='font-bold mt-[-18px] mb-1 text-xl text-center px-2 text-red-900'>
                                    EPISODE 4
                                </h2>
                                <a href='https://youtu.be/J4Ih3CVmYwM'>
                                    <button
                                        onClick={'https://youtu.be/J4Ih3CVmYwM'}
                                        className='px-20 pt-1 pb-1 pl-8 pr-8 mb-[-20px] rounded-2xl cursor-pointer justify-center'
                                    >
                                        <div className='flex'>
                                            <AiFillYoutube className='text-4xl text-white' />
                                            <h2 className='text-white pt-2 ml-2'>Youtube</h2>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            <span>
                <div className='p-20 ml-[100px] mt-[-390px] w-full md:w-[400px]'>
                    <div className='bg-white rounded-lg shadow-lg'>
                        <img
                            src='https://pbs.twimg.com/media/FzIAWlUaIAA-EZS?format=jpg&name=large'
                            className='rounded-t-lg'
                        />
                        <div className='p-6'>
                            <h2 className='font-bold mt-[-18px] mb-1 text-xl text-center px-2 text-red-900'>
                                EPISODE 5
                            </h2>
                            <a href='https://youtu.be/5eFLHd6_pg4'>
                                <button
                                    onClick={'https://youtu.be/5eFLHd6_pg4'}
                                    className='px-20 pt-1 pb-1 pl-8 pr-8 mb-[-20px] rounded-2xl cursor-pointer justify-center'
                                >
                                    <div className='flex'>
                                        <AiFillYoutube className='text-4xl text-white' />
                                        <h2 className='text-white pt-2 ml-2'>Youtube</h2>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </span>
            <span>
                <div className='p-20 ml-[380px] mt-[-405px] w-full md:w-[400px]'>
                    <div className='bg-white rounded-lg shadow-lg'>
                        <img
                            src='https://pbs.twimg.com/media/FzIAXS9agAEfdmK?format=jpg&name=large'
                            className='rounded-t-lg'
                        />
                        <div className='p-6'>
                            <h2 className='font-bold mt-[-18px] mb-1 text-xl text-center px-2 text-red-900'>
                                EPISODE 6
                            </h2>
                            <a href='https://youtu.be/RCJhGNRzoMg'>
                                <button
                                    onClick={'https://youtu.be/RCJhGNRzoMg'}
                                    className='px-20 pt-1 pb-1 pl-8 pr-8 mb-[-20px] rounded-2xl cursor-pointer justify-center'
                                >
                                    <div className='flex'>
                                        <AiFillYoutube className='text-4xl text-white' />
                                        <h2 className='text-white pt-2 ml-2'>Youtube</h2>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </span>

        </div>
    )
}

export default Sosofun