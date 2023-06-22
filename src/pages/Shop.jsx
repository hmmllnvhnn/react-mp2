import React from 'react'
import Sidenav from '../components/Sidenav'

const Shop = () => {
    return (
        <div>
            <div>
                <Sidenav />
                <div className='flex min-h-screen items-center justify-center bg-black h-[1500px] w-screen'>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-900px]'>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/14b5ac32c7d644b91954ccefed60396d.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    DARK BLOOD
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Random Versions: Full, Half, New
                                    <br />
                                    Price: $17.92
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/14857'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-DARK-BLOOD-(4th-Mini-Album)-i.279477055.22365986040?sp_atk=f6b05654-04ad-4ff9-8207-6d5d35b098d4&xptdk=f6b05654-04ad-4ff9-8207-6d5d35b098d4'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-PRE-ORDER-ENHYPEN-DARK-BLOOD-4TH-MINI-ALBUM--i.290678448.20579111897?sp_atk=0779c8ac-50c9-4b53-8c5a-3e15de9f179c&xptdk=0779c8ac-50c9-4b53-8c5a-3e15de9f179c'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/59625c3d2406b6b1260dc6f41f49af58.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    DARK BLOOD
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Included Versions: Full, Half, New
                                    <br />
                                    Price: $53.78
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/14856'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-DARK-BLOOD-(4th-Mini-Album)-(SET-VERSION)-i.279477055.21588062595?xptdk=08c7beb1-c0c4-4f48-b84b-632a1b120865'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-PRE-ORDER-ENHYPEN-DARK-BLOOD-4TH-MINI-ALBUM--i.290678448.20579111897?sp_atk=0779c8ac-50c9-4b53-8c5a-3e15de9f179c&xptdk=0779c8ac-50c9-4b53-8c5a-3e15de9f179c'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/cadace9f903aec7a9accb63adf96664f.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    DARK BLOOD
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Engene Random Versions: Heeseung, Jay, Jake, Sunghoon, Sunoo, Jungwon & Ni-ki
                                    <br />
                                    Price: $12.91
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/14859'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-DARK-BLOOD-(Engene-Ver.)-4th-Mini-Album-i.279477055.23540511705?sp_atk=2e0b2b98-e315-472d-a2ed-0414d6cb5c23&xptdk=2e0b2b98-e315-472d-a2ed-0414d6cb5c23'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-PRE-ORDER-ENHYPEN-DARK-BLOOD-ENGENE-VER.--i.290678448.23665980432?xptdk=bd0229a8-9376-4a88-9941-e170dfc77cb1'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/5446b38ba65851b88bd77018e657e4e7.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    DARK BLOOD
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Engene Included Versions: Heeseung, Jay, Jake, Sunghoon, Sunoo, Jungwon & Ni-ki
                                    <br />
                                    Price: $90.39
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/14858'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-DARK-BLOOD-(Engene-Ver.)-4th-Mini-Album-i.279477055.23540511705?sp_atk=2e0b2b98-e315-472d-a2ed-0414d6cb5c23&xptdk=2e0b2b98-e315-472d-a2ed-0414d6cb5c23'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-PRE-ORDER-ENHYPEN-DARK-BLOOD-ENGENE-VER.--i.290678448.23665980432?xptdk=bd0229a8-9376-4a88-9941-e170dfc77cb1'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    //


                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-[-50px] ml-[-1220px]'>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/1d51d4166f99c57f60753ef2d78da8d0.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    DARK BLOOD
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Weverse Album Versions
                                    <br />
                                    Price: $10.40
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/15194'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-PRE-ORDER-ENHYPEN-DARK-BLOOD-WEVERSE-VER.--i.290678448.17097441546?sp_atk=4216421b-6f6a-465f-b900-78dea9341473&xptdk=4216421b-6f6a-465f-b900-78dea9341473'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/c502ae3267c1c85fbc5cf550d839d0c5.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    MANIFESTO: DAY 1
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Included:
                                    <br />
                                    Standard Versions: D, J, M
                                    <br />
                                    Engenes Versions: D, J, M
                                    <br />
                                    Price: $88.34
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/9101'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-Manifesto-Day-1-3rd-Mini-Album-i.279477055.21811601221?sp_atk=e6ef6da7-23c3-4c4d-b5a1-97901d0a61cf&xptdk=e6ef6da7-23c3-4c4d-b5a1-97901d0a61cf'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-ENHYPEN-MANIFESTO-DAY-1-REGULAR-VER.--i.290678448.21211506844?sp_atk=9d74e382-5a8c-48e6-afad-c0b5aa1b1668&xptdk=9d74e382-5a8c-48e6-afad-c0b5aa1b1668'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/1cf1d6dfa1c5f127fb340ae460aabd72.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    MANIFESTO: DAY 1
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Included Versions: D, J, M,
                                    <br />
                                    Price: $49.60
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/9098'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-Manifesto-Day-1-3rd-Mini-Album-i.279477055.21811601221?sp_atk=e6ef6da7-23c3-4c4d-b5a1-97901d0a61cf&xptdk=e6ef6da7-23c3-4c4d-b5a1-97901d0a61cf'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-ENHYPEN-MANIFESTO-DAY-1-REGULAR-VER.--i.290678448.21211506844?sp_atk=9d74e382-5a8c-48e6-afad-c0b5aa1b1668&xptdk=9d74e382-5a8c-48e6-afad-c0b5aa1b1668'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/2d9a8a948ae406d3f550cece42a93728.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    MANIFESTO: DAY 1
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Random Versions: D, J, M
                                    <br />
                                    Price: $16.53
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/9097'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-Manifesto-Day-1-3rd-Mini-Album-i.279477055.21811601221?sp_atk=e6ef6da7-23c3-4c4d-b5a1-97901d0a61cf&xptdk=e6ef6da7-23c3-4c4d-b5a1-97901d0a61cf'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-ENHYPEN-MANIFESTO-DAY-1-REGULAR-VER.--i.290678448.21211506844?sp_atk=9d74e382-5a8c-48e6-afad-c0b5aa1b1668&xptdk=9d74e382-5a8c-48e6-afad-c0b5aa1b1668'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    //

                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-[-980px] ml-[-1220px]'>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/af41ad93bc15f2cc179f445711647b5a.png?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    MANIFESTO: DAY 1
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Engene Version Set Includes: D, J, M
                                    <br />
                                    Price: $38.73
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/9100'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-Manifesto-Day-1-3rd-Mini-Album-(Engene-Version)-i.279477055.20611602719?sp_atk=79b9339d-163c-4925-8645-b9f8ea576428&xptdk=79b9339d-163c-4925-8645-b9f8ea576428'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-ENHYPEN-MANIFESTO-DAY-1-ENGENE-VER.--i.290678448.18611509821?sp_atk=892eaa4f-eb0a-405f-b8de-d53a4cc241e5&xptdk=892eaa4f-eb0a-405f-b8de-d53a4cc241e5'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/cbb0a509520b340d32863d8369c17787.jpg?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    DIMENSION: DELIMMA
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Included Versions: Scylla, Odysseus, Charybdis
                                    <br />
                                    Price: $49.70
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/5722'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-Dimension-Dilemma-1st-Album-i.279477055.10049724303?sp_atk=83294329-ccb0-4666-b2d5-6348fe1248cb&xptdk=83294329-ccb0-4666-b2d5-6348fe1248cb'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-ENHYPEN-DIMENSION-DILEMMA-1ST-STUDIO-ALBUM--i.290678448.13411425543?sp_atk=b1496a3a-53ab-4c3e-9f3a-427f1d9b98c6&xptdk=b1496a3a-53ab-4c3e-9f3a-427f1d9b98c6'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/5d4fe1daf1e0ac1f95e47f711dc08a14.jpg?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    DIMENSION: DILEMMA
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Random Versions: Scylla, Odysseus, Charybdis
                                    <br />
                                    Price: $16.62
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/5721'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/ENHYPEN-Dimension-Dilemma-1st-Album-i.279477055.10049724303?sp_atk=83294329-ccb0-4666-b2d5-6348fe1248cb&xptdk=83294329-ccb0-4666-b2d5-6348fe1248cb'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            C.N.A. Philippines
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-ENHYPEN-DIMENSION-DILEMMA-1ST-STUDIO-ALBUM--i.290678448.13411425543?sp_atk=b1496a3a-53ab-4c3e-9f3a-427f1d9b98c6&xptdk=b1496a3a-53ab-4c3e-9f3a-427f1d9b98c6'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                            <div className='h-96 w-72'>
                                <img
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                                    src='https://cdn-contents.weverseshop.io/public/shop/55a1c92b3be0e530aef3663b303d3d68.jpg?q=95&w=720'
                                    alt=''
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                                <h1 className='font-dmserif text-3xl font-bold text-white'>
                                    DIMENSION: DILEMMA
                                </h1>
                                <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Essential Version
                                    <br />
                                    Price: $11.05
                                </p>
                                <div>
                                    <a href='https://weverseshop.io/en/shop/GL_USD/artists/10/sales/5723'>
                                        <button className='rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            Weverse Shop
                                        </button>
                                    </a>
                                    <br />
                                    <a href='https://shopee.ph/NCAT-ON-HAND-ENHYPEN-DIMENSION-DILEMMA-ESSENTIAL-VER.--i.290678448.13722101819?sp_atk=976ece37-2d97-441e-ab6a-6e633677ab08&xptdk=976ece37-2d97-441e-ab6a-6e633677ab08'>
                                        <button className='rounded-full py-2 px-3.5 mt-2 font-com text-sm capitalize text-white shadow shadow-black/60'>
                                            N.Cat Philippines
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop