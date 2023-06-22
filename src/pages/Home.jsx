import Sidenav from '../components/Sidenav';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div id='home' className='bg-black h-[710px]'>
      <Sidenav />
      <section className='h-full max-h-[640px] mb-8 xl:mb-24 bg-zinc-950'>
        <div className='flex flex-col lg:flex-row bg-zinc-950'>
          <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:left justify-center flex-1 px-4 lg:px-0 bg-zinc-950'>
            <h1 className='text-4xl lg:text-[58px] text-white bg-zinc-950'>
              <span>This is ENHYPEN</span>
            </h1>
            <h2 className='text-2xl mt-2 ml-2 text-white bg-zinc-950'>
              They are the
              <TypeAnimation
                sequence={[
                  "Kpop's Powerhouse",
                  1000,
                  "Kpop's Fashion Icon",
                  1000,
                  "Kpop's Global Phenomenon",
                  1000,
                  'Legendary 4th Gen Group',
                  1000,
                ]}
                wrapper='div'
                cursor={true}
                style={{
                  fontSize: '1em',
                  display: 'inline-block',
                  marginLeft: '10px',
                  color: '#9B1C31',
                }}
                repeat={Infinity}
              />
            </h2>
          </div>
          <div className='hidden flex-1 lg:flex justify-center items-center mt-20 mr-16 bg-zinc-950 br-20'>
            <img
              className='w-[400px] h-[550px] rounded-lg mb-20 bg-zinc-950 shadow-lg shadow-red-900 shadow-left'
              src='https://pbs.twimg.com/media/FvsZMm_aAAk78LQ?format=jpg&name=4096x4096'
              alt=''
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
