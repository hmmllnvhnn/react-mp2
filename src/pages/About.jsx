import { Tabs } from 'flowbite-react';
import Sidenav from '../components/Sidenav';

const About = () => {
  return (
    <div id='about' className='bg-black h-[710px]'>
      <div>
        <div>
          <Sidenav />
        </div>
        <div className='justify-center text-center bg-black pt-4 mb-[20px]'>
          <Tabs.Group
            aria-label='Pills'
            style='pills'
            className='flex justify-center'
          >
            <Tabs.Item title='ENHYPEN'>
              <div>
                <div className='flex min-h-screen items-center justify-center bg-black'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-130px] ml-[60px]'>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/EyyE4RbVEAIdk3C?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          Enhypen (Korean: 엔하이픈; Japanese: エンハイプン) is a South Korean boy band formed by Belift Lab, a joint venture between CJ ENM and Hybe Corporation,[3] through the 2020 survival competition show I-Land.
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FATK7bNVUAg_be2?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                          The group is composed of seven members: Heeseung, Jay, Jake, Sunghoon, Sunoo, Jungwon, and Ni-ki. They debuted on November 30, 2020, with the extended play (EP) Border: Day One.
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FVs_PrdUcAEmtyE?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Korean Albums</span>
                          <br />
                          Border: Day 1
                          <br />
                          Border: Carnival
                          <br />
                          Dimension: Dilemma
                          <br />
                          Dimension: Answer
                          <br />
                          Manifesto: Day 1
                          <br />
                          Dark Blood
                          <br />
                          <span className='text-red-400'>Japanese Albums</span>
                          <br />
                          Border: Hanakai
                          <br />
                          Dimension: Senkou
                          <br />
                          Sadame
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FvNhDR5agAEAtWj?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Twiter:</span>
                          <br />
                          ENHYPEN & ENHYPEN_members
                          <br />
                          <span className='text-red-400'>Instagram:</span> enhypen
                          <br />
                          <span className='text-red-400'>Facebook:</span> Enhypen
                          <br />
                          <span className='text-red-400'>Weverse:</span> ENHYPEN
                          <br />
                          <span className='text-red-400'>YouTube:</span>ENHYPENOFFICIAL
                          <br />
                          <span className='text-red-400'>TikTok:</span> enhypen
                        </p>
                      </div>
                    </div>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      ENHYPEN
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      MEMBERS
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      CAREER
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      OFFICIAL SNS
                    </h1>
                  </div>
                </div>
              </div>
            </Tabs.Item>

//

            <Tabs.Item title='Heeseung'>
              <div>
                <div className='flex min-h-screen items-center justify-center bg-black'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-130px] ml-[60px]'>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/EyTKkuEU4AAjK2P?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Birth Name:</span>
                          <br />
                          Lee Hee-seung (이희승)
                          <br />
                          <span className='text-red-400'>Birth Date:</span>
                          <br />
                          October 15, 2001
                          <br />
                          <span className='text-red-400'>Birth Place:</span>
                          <br />
                          Uiwang, Gyeonggi-do, South Korea
                          <br />
                          <span className='text-red-400'>National:</span> Korean
                          <br />
                          <span className='text-red-400'>Height:</span> 181 cm (5ft 11in)
                          <br />
                          <span className='text-red-400'>Blood Type:</span> A
                          <br />
                          <span className='text-red-400'>MBTI:</span> ENFP
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FATKIzCVcA89KLZ?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                          <span className='text-red-400'>Occupation:</span>
                          <br />
                          Singer, Dancer, & Artist
                          <br />
                          <span className='text-red-400'>Debut Date:</span>
                          <br />
                          November 30, 2020
                          <br />
                          <span className='text-red-400'>Years Active:</span>
                          <br />
                          2020-Present
                          <br />
                          <span className='text-red-400'>Agency:</span>
                          <br />
                          Hybe Labels & Belift Lab
                          <br />
                          <span className='text-red-400'>Associations:</span>
                          <br />
                          ENHYPEN & ILAND
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FVs_uIaUUAAsd2u?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Stage Name:</span>
                          <br />
                          Lee Heeseung
                          <br />
                          <span className='text-red-400'>Role:</span>
                          <br />
                          Center, Singer & Dancer
                          <br />
                          <span className='text-red-400'>Individual Color:</span> Red
                          <br />
                          <span className='text-red-400'>Emoji:</span> Hamster & Deer
                          <br />
                          <span className='text-red-400'>Motto:</span>
                          <br />
                          "To have passion all year round"
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FvNgk5MaAAAKEs7?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Hobbies:</span>
                          <br />
                          Singing, Playing Games & Playing Guitar and Piano
                          <br />
                          <span className='text-red-400'>Charming Points:</span>
                          <br />
                          Power Center, Big Ears, Perfect Pitch & Boyish Style
                        </p>
                      </div>
                    </div>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      BACKGROUND
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      CAREER
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      ENHYPEN
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      OTHERS
                    </h1>
                  </div>
                </div>
              </div>
            </Tabs.Item>

//

            <Tabs.Item title='Jay'>
              <div>
                <div className='flex min-h-screen items-center justify-center bg-black'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-130px] ml-[60px]'>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/EyTK_AhVoAApyVU?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Birth Name:</span>
                          <br />
                          Park Jong Seong (박종성)
                          <br />
                          <span className='text-red-400'>Birth Date:</span>
                          <br />
                          April 20, 2002
                          <br />
                          <span className='text-red-400'>Birth Place:</span>
                          <br />
                          Seattle, Washington, United States
                          <br />
                          <span className='text-red-400'>National:</span> Korean
                          <br />
                          <span className='text-red-400'>Height:</span> 178 cm (5ft 10in)
                          <br />
                          <span className='text-red-400'>Blood Type:</span> B
                          <br />
                          <span className='text-red-400'>MBTI:</span> ENFP
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FATKSUeVgAI3mA2?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                          <span className='text-red-400'>Occupation:</span>
                          <br />
                          Rapper, Singer, Dancer, & Artist
                          <br />
                          <span className='text-red-400'>Debut Date:</span>
                          <br />
                          November 30, 2020
                          <br />
                          <span className='text-red-400'>Years Active:</span>
                          <br />
                          2020-Present
                          <br />
                          <span className='text-red-400'>Agency:</span>
                          <br />
                          Hybe Labels & Belift Lab
                          <br />
                          <span className='text-red-400'>Associations:</span>
                          <br />
                          ENHYPEN & ILAND
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FVtAQd3UUAEOWD1?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Stage Name:</span>
                          <br />
                          Jay Park
                          <br />
                          <span className='text-red-400'>Role:</span>
                          <br />
                          Rapper & Singer
                          <br />
                          <span className='text-red-400'>Individual Color:</span> Green
                          <br />
                          <span className='text-red-400'>Emoji:</span> Black Cat
                          <br />
                          <span className='text-red-400'>Motto:</span>
                          <br />
                          "To have passion all year round"
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FvNgRsGacAE1dvC?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Hobbies:</span>
                          <br />
                          Playing Guitar, Fashion & Smelling Perfumes
                          <br />
                          <span className='text-red-400'>Charming Points:</span>
                          <br />
                          Sharp Jawline, Sharp Features, Tanned Skin & Piercing Eyes
                        </p>
                      </div>
                    </div>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      BACKGROUND
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      CAREER
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      ENHYPEN
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      OTHERS
                    </h1>
                  </div>
                </div>
              </div>
            </Tabs.Item>

//

            <Tabs.Item title='Jake'>
              <div>
                <div className='flex min-h-screen items-center justify-center bg-black'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-130px] ml-[60px]'>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/EyTK1BGVcAY4Xoz?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Birth Name:</span>
                          <br />
                          Sim Jae-yun (심재윤)
                          <br />
                          <span className='text-red-400'>Birth Date:</span>
                          <br />
                          November 15, 2002
                          <br />
                          <span className='text-red-400'>Birth Place:</span>
                          <br />
                          Seoul, South Korea
                          <br />
                          <span className='text-red-400'>National:</span> Korean-Australian
                          <br />
                          <span className='text-red-400'>Height:</span> 176 cm (5ft 9in)
                          <br />
                          <span className='text-red-400'>Blood Type:</span> O
                          <br />
                          <span className='text-red-400'>MBTI:</span> ESTJ
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FATJoaaVUA4uw2t?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                          <span className='text-red-400'>Occupation:</span>
                          <br />
                          Singer, Dancer, & Artist
                          <br />
                          <span className='text-red-400'>Debut Date:</span>
                          <br />
                          November 30, 2020
                          <br />
                          <span className='text-red-400'>Years Active:</span>
                          <br />
                          2020-Present
                          <br />
                          <span className='text-red-400'>Agency:</span>
                          <br />
                          Hybe Labels & Belift Lab
                          <br />
                          <span className='text-red-400'>Associations:</span>
                          <br />
                          ENHYPEN & ILAND
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FVtBTnHUEAEo8b5?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Stage Name:</span>
                          <br />
                          Jake Sim
                          <br />
                          <span className='text-red-400'>Role:</span>
                          <br />
                          Singer & Dancer
                          <br />
                          <span className='text-red-400'>Individual Color:</span> Orange
                          <br />
                          <span className='text-red-400'>Emoji:</span> Dog
                          <br />
                          <span className='text-red-400'>Motto:</span>
                          <br />
                          "To have passion all year round"
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FvNfvw6aQAAmFw1?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Hobbies:</span>
                          <br />
                          Playing with Layla his dog, Playing Violin & Talking about Math and Physics
                          <br />
                          <span className='text-red-400'>Charming Points:</span>
                          <br />
                          Chiselled Face, Australian Accent, Big Hands & Pouty Lips
                        </p>
                      </div>
                    </div>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      BACKGROUND
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      CAREER
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      ENHYPEN
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      OTHERS
                    </h1>
                  </div>
                </div>
              </div>
            </Tabs.Item>

//

            <Tabs.Item title='Sunghoon'>
              <div>
                <div className='flex min-h-screen items-center justify-center bg-black'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-130px] ml-[60px]'>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/EyTKKl8VgAQtV1u?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Birth Name:</span>
                          <br />
                          Park Sung-hoon (박성훈)
                          <br />
                          <span className='text-red-400'>Birth Date:</span>
                          <br />
                          December 8, 2002
                          <br />
                          <span className='text-red-400'>Birth Place:</span>
                          <br />
                          Namyangju, Gyeonggi, South Korea
                          <br />
                          <span className='text-red-400'>National:</span> Korean
                          <br />
                          <span className='text-red-400'>Height:</span> 180 cm (5ft 11in)
                          <br />
                          <span className='text-red-400'>Blood Type:</span> O
                          <br />
                          <span className='text-red-400'>MBTI:</span> ISTJ
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FATKjiPVQAAnvFM?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                          <span className='text-red-400'>Occupation:</span>
                          <br />
                          Singer, Dancer, Artist & Figure Skater
                          <br />
                          <span className='text-red-400'>Debut Date:</span>
                          <br />
                          November 30, 2020
                          <br />
                          <span className='text-red-400'>Years Active:</span>
                          <br />
                          2020-Present
                          <br />
                          <span className='text-red-400'>Agency:</span>
                          <br />
                          Hybe Labels & Belift Lab
                          <br />
                          <span className='text-red-400'>Associations:</span>
                          <br />
                          ENHYPEN & ILAND
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FVtA10VUcAEpy45?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Stage Name:</span>
                          <br />
                          Park Sunghoon
                          <br />
                          <span className='text-red-400'>Role:</span>
                          <br />
                          Visual, Singer & Dancer
                          <br />
                          <span className='text-red-400'>Individual Color:</span> Blue
                          <br />
                          <span className='text-red-400'>Emoji:</span> Penguin
                          <br />
                          <span className='text-red-400'>Motto:</span>
                          <br />
                          "To have passion all year round"
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FvNgto6aQAAQuFF?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Hobbies:</span>
                          <br />
                          Figuro Skating, Fishing & Fashion
                          <br />
                          <span className='text-red-400'>Charming Points:</span>
                          <br />
                          Snow-like Skin, Visuals & Smile
                        </p>
                      </div>
                    </div>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      BACKGROUND
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      CAREER
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      ENHYPEN
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      OTHERS
                    </h1>
                  </div>
                </div>
              </div>
            </Tabs.Item>

//

            <Tabs.Item title='Sunoo'>
              <div>
                <div className='flex min-h-screen items-center justify-center bg-black'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-130px] ml-[60px]'>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://i.pinimg.com/564x/7b/6c/7a/7b6c7a8806b70a0d5572252652436be2.jpg'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Birth Name:</span>
                          <br />
                          Kim Sun-woo(김선우)
                          <br />
                          <span className='text-red-400'>Birth Date:</span>
                          <br />
                          June 24, 2003
                          <br />
                          <span className='text-red-400'>Birth Place:</span>
                          <br />
                          Suwon, Gyeonggi, South Korea
                          <br />
                          <span className='text-red-400'>National:</span> Korean
                          <br />
                          <span className='text-red-400'>Height:</span> 174 cm (5ft 9in)
                          <br />
                          <span className='text-red-400'>Blood Type:</span> O
                          <br />
                          <span className='text-red-400'>MBTI:</span> ENFP
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FATKZECVgAgSPhO?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                          <span className='text-red-400'>Occupation:</span>
                          <br />
                          Singer, Dancer, & Artist
                          <br />
                          <span className='text-red-400'>Debut Date:</span>
                          <br />
                          November 30, 2020
                          <br />
                          <span className='text-red-400'>Years Active:</span>
                          <br />
                          2020-Present
                          <br />
                          <span className='text-red-400'>Agency:</span>
                          <br />
                          Hybe Labels & Belift Lab
                          <br />
                          <span className='text-red-400'>Associations:</span>
                          <br />
                          ENHYPEN & ILAND
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FVtAm2xUYAAOBde?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Stage Name:</span>
                          <br />
                          Kim Sunoo
                          <br />
                          <span className='text-red-400'>Role:</span>
                          <br />
                          Singer & Dancer
                          <br />
                          <span className='text-red-400'>Individual Color:</span> Pink
                          <br />
                          <span className='text-red-400'>Emoji:</span> Fox
                          <br />
                          <span className='text-red-400'>Motto:</span>
                          <br />
                          "To have passion all year round"
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FvNfYAaaQAIs1lh?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Hobbies:</span>
                          <br />
                          Taking Pictures, Playing Games & Listening to Music
                          <br />
                          <span className='text-red-400'>Charming Points:</span>
                          <br />
                          Eye Smile, Facial Expression, Eye Shape & Cheek Dimples
                        </p>
                      </div>
                    </div>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      BACKGROUND
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      CAREER
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      ENHYPEN
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      OTHERS
                    </h1>
                  </div>
                </div>
              </div>
            </Tabs.Item>

//

            <Tabs.Item title='Jungwon'>
              <div>
                <div className='flex min-h-screen items-center justify-center bg-black'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-130px] ml-[60px]'>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/EyTKWu3UUAEy0JL?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Birth Name:</span>
                          <br />
                          Yang Jung-won (양정원)
                          <br />
                          <span className='text-red-400'>Birth Date:</span>
                          <br />
                          February 9, 2004
                          <br />
                          <span className='text-red-400'>Birth Place:</span>
                          <br />
                          Gwanak-gu, Seoul, South Korea
                          <br />
                          <span className='text-red-400'>National:</span> Korean
                          <br />
                          <span className='text-red-400'>Height:</span> 175 cm (5 ft 9 in)
                          <br />
                          <span className='text-red-400'>Blood Type:</span> AB
                          <br />
                          <span className='text-red-400'>MBTI:</span> ISTJ
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FATJg2IVEAQtDYu?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                          <span className='text-red-400'>Occupation:</span>
                          <br />
                          Singer, Dancer, & Artist
                          <br />
                          <span className='text-red-400'>Debut Date:</span>
                          <br />
                          November 30, 2020
                          <br />
                          <span className='text-red-400'>Years Active:</span>
                          <br />
                          2020-Present
                          <br />
                          <span className='text-red-400'>Agency:</span>
                          <br />
                          Hybe Labels & Belift Lab
                          <br />
                          <span className='text-red-400'>Associations:</span>
                          <br />
                          ENHYPEN & ILAND
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FVtBhNGUcAIbmhq?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Stage Name:</span>
                          <br />
                          Yang Jungwon
                          <br />
                          <span className='text-red-400'>Role:</span>
                          <br />
                          Leader, Singer & Dancer
                          <br />
                          <span className='text-red-400'>Individual Color:</span> Yellow
                          <br />
                          <span className='text-red-400'>Emoji:</span> Orange Cat
                          <br />
                          <span className='text-red-400'>Motto:</span>
                          <br />
                          "To have passion all year round"
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FvNgCQraEAACDrn?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Hobbies:</span>
                          <br />
                          Taekwondo, Dancing & Doing Live Streams
                          <br />
                          <span className='text-red-400'>Charming Points:</span>
                          <br />
                          Round Face, Eye Shape & Dimples
                        </p>
                      </div>
                    </div>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      BACKGROUND
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      CAREER
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      ENHYPEN
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      OTHERS
                    </h1>
                  </div>
                </div>
              </div>
            </Tabs.Item>

//

            <Tabs.Item title='Ni-ki'>
              <div>
                <div className='flex min-h-screen items-center justify-center bg-black'>
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-[-130px] ml-[60px]'>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/EyTKttrU8AEYogo?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Birth Name:</span>
                          <br />
                          Nishimura Riki (西村 力)
                          <br />
                          <span className='text-red-400'>Birth Date:</span>
                          <br />
                          December 9, 2005
                          <br />
                          <span className='text-red-400'>Birth Place:</span>
                          <br />
                          Okayama, Japan
                          <br />
                          <span className='text-red-400'>National:</span> Japanese
                          <br />
                          <span className='text-red-400'>Height:</span> 183 cm (6ft 0in)
                          <br />
                          <span className='text-red-400'>Blood Type:</span> B
                          <br />
                          <span className='text-red-400'>MBTI:</span> ESFP
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FATJyEGUYAMjus1?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
                          <span className='text-red-400'>Occupation:</span>
                          <br />
                          Singer, Rapper, Dancer, & Artist
                          <br />
                          <span className='text-red-400'>Debut Date:</span>
                          <br />
                          November 30, 2020
                          <br />
                          <span className='text-red-400'>Years Active:</span>
                          <br />
                          2020-Present
                          <br />
                          <span className='text-red-400'>Agency:</span>
                          <br />
                          Hybe Labels & Belift Lab
                          <br />
                          <span className='text-red-400'>Associations:</span>
                          <br />
                          ENHYPEN & ILAND
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FVtAAJkVEAEsxhF?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Stage Name:</span> Ni-ki
                          <br />
                          <span className='text-red-400'>Role:</span>
                          <br />
                          Maknae, Rapper & Dancer
                          <br />
                          <span className='text-red-400'>Individual Color:</span> Purple
                          <br />
                          <span className='text-red-400'>Emoji:</span> Puma & Duck
                          <br />
                          <span className='text-red-400'>Motto:</span>
                          <br />
                          "To have passion all year round"
                        </p>
                      </div>
                    </div>
                    <div className='group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                      <div className='h-96 w-72'>
                        <img
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border-[3px] rounded-2xl border-red-900'
                          src='https://pbs.twimg.com/media/FvNfH6jaMAAsppA?format=jpg&name=4096x4096'
                          alt=''
                        />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80'></div>
                      <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                        <p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                          <span className='text-red-400'>Hobbies:</span>
                          <br />
                          Dancing, Painting, Bowling, Soccer, & Fishing
                          <br />
                          <span className='text-red-400'>Charming Points:</span>
                          <br />
                          Gaze, Facial Expression, Tall Figure & Box Smiles
                        </p>
                      </div>
                    </div>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      BACKGROUND
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      CAREER
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      ENHYPEN
                    </h1>
                    <h1 className='font-dmserif text-3xl font-bold text-white mt-[-10px]'>
                      OTHERS
                    </h1>
                  </div>
                </div>
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
};

export default About;
