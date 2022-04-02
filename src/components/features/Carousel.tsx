import { FC } from 'react';
import { EffectCards, Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from '../../styles/general/_carousel.module.css';
import '../../styles/general/_carousel.module.css';
import { combineClasses, createRangeMap, analyseFilePath } from '../../utils';

const imghrefs = createRangeMap(9, function (index) {
  return analyseFilePath(`img/Nfts/bighead-${index + 1}.svg`);
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
