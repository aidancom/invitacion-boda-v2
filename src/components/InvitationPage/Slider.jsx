import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = () => {
  return (
    <div className='bg-[#C3AA92] p-6'>
      <div className='max-w-[1200px] m-auto'>
          <h3 className='text-center pb-5 text-2xl text-white font-bold'>Nuestra historia</h3>
          <div className='flex items-center'>
          <Splide
          options={{
            type: 'loop',
            perPage: 3,
            gap: '1rem',
            autoplay: true,
            rewind: true,
            speed: 1000,
            drag: true,
            breakpoints: {
               480: { perPage: 1 }
            }
          }}>
            <SplideSlide>
              <img className='w-full h-[650px] object-cover' src="../public/img/slider/slide1.jpg"/>
            </SplideSlide>
            <SplideSlide>
              <img className='w-full h-[650px] object-cover' src="../public/img/slider/slide2.jpg"/>
            </SplideSlide>
            <SplideSlide>
              <img className='w-full h-[650px] object-cover' src="../public/img/slider/slide3.jpg"/>
            </SplideSlide>
          </Splide>
          </div>

      </div>
    </div>
  )
}

export default Slider
