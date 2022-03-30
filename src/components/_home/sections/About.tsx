import { FC } from 'react';
import style from '../../../styles/pages/home/sections/about.module.css';
import { SecondaryButton } from '../../Button';
import Carousel from '../../features/Carousel';

const About: FC = () => (
  <section className={style.about}>
    <div className={style.container}>
      <div className={style.self_contain}>
        <Carousel />
      </div>
      <div className={style.self_contain}>
        <div className={style.about_content}>
          <h2 className={style.about_content__title}>
            Welcome To The Weirdos Club.
          </h2>
          <p className={style.about_content__subtitle}>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </p>
          <p className={style.about_content__info}>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </p>
          <div className={style.callToAction}>
            <SecondaryButton innerRoute href="">
              Join our discord
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
