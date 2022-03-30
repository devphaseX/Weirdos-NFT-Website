import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/general/navigation.module.css';
import { PrimaryButton } from './Button';

const Navigation: FC = () => (
  <nav className={style.navigation}>
    <div className={style.logo}>W.</div>
    <ul className={style.routeNavigation}>
      <li className={style.routeItem}>
        <Link to="/home">Home</Link>
      </li>
      <li className={style.routeItem}>
        <Link to="/home">About</Link>
      </li>
      <li className={style.routeItem}>
        <Link to="/home">RoadMap</Link>
      </li>
      <li className={style.routeItem}>
        <Link to="/home">Showcase</Link>
      </li>
      <li className={style.routeItem}>
        <Link to="/home">Team</Link>
      </li>
      <li className={style.routeItem}>
        <Link to="/home">Faq</Link>
      </li>
    </ul>
    <div className={style.callToAction}>
      <PrimaryButton innerRoute href="">
        Connect Wallet
      </PrimaryButton>
    </div>
  </nav>
);

export default Navigation;
