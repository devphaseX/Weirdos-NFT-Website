import { FC } from 'react';
import TypeWriter from 'typewriter-effect';
import style from '../../styles/typewriterContainer.module.css';
import { PrimaryButton } from '../Button';

const TypewriterContainer: FC = () => {
  return (
    <div className={style.typewriterContainer}>
      <div className={style.main_headline}>
        <h2>Discover a new era of cool</h2>
      </div>
      <div className={style.typewriterBox}>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="${style.text_1}">NFT.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                `<span class="${style.text_2}">Collectible Items.</span>`
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="${style.text_3}">Ape Killer.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
          options={{ autoStart: true, loop: true }}
        />
      </div>

      <h3 className={style.subTitle}>Bored of Apes?Try something new</h3>
      <PrimaryButton innerRoute href="">
        Explore
      </PrimaryButton>
    </div>
  );
};

export default TypewriterContainer;
