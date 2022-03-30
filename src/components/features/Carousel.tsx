import { FC } from 'react';
import { EffectCards, Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from '../../styles/general/_carousel.module.css';
import '../../styles/general/_carousel.module.css';
import { combineClasses } from '../../utils';

const imghrefs = Array.from({ length: 9 }, (_, i) => {
  return {
    path: `img/Nfts/bighead-${i + 1}.svg`,
    get filename() {
      return this.path.match(/(\w|-)+?\.\w+$/)![0];
    },
  };
});

const Carousel: FC = () => {
  return (
    <div>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ type: 'fraction' }}
        navigation={true}
        effect={'cards'}
        scrollbar={{ draggable: true }}
        modules={[EffectCards, Pagination, Autoplay, Navigation]}
        grabCursor={true}
        className={style.carousel}
      >
        {imghrefs.map((imgSrc) => {
          return (
            <SwiperSlide
              className={combineClasses([
                style['custom-swiper-button-next'],
                style['custom-swiper-slide'],
              ])}
              key={imgSrc.filename}
            >
              <img src={imgSrc.path} alt={imgSrc.filename} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
