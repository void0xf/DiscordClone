import Hero from '../../components/presentational/Hero';
import Navbar from '../../components/presentational/Navbar';
import LeftSideHero from '../../assets/banners/leftSideHero.svg';
import RightSideHero from '../../assets/banners/rightSideHero.svg';

const Home: React.FC = () => {

  return (
    <div>
      <div className="lg: w-full h-[633px] flex justify-center items-center overflow-hidden divWithSVGBackground bg-brandColor absolute top-0 z-0">
      </div>
      <div className='mx-auto min-h-[644px] max-w-6xl relative z-1 flex flex-col '>
        <Navbar />
        <div className='my-auto'>
        <Hero />
        </div>
        <div className='absolute z-0 bottom-3 -left-[29rem]'>
          <img src={LeftSideHero} alt="" height={610}/>
        </div>
        <div className='absolute z-0 bottom-3 -right-[28rem]'>
          <img src={RightSideHero} alt="" height={610}/>
        </div>
      </div>
      <section>
        
      </section>
    </div>
  );

}

export default Home
