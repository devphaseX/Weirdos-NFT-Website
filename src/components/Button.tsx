import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/button.module.css';

interface ButtonProps {
  innerRoute?: boolean;
  href: string;
  customClassName: string;
}

type SpecializedButton = Omit<ButtonProps, 'customClassName'>;
type PrimaryButton = SpecializedButton;
type SecondaryButton = SpecializedButton;

const Button: FC<ButtonProps> = ({
  children,
  href,
  innerRoute,
  customClassName,
}) => {
  return (
    <button className={[style.button, customClassName].join(' ')}>
      {innerRoute ? (
        <Link to={href}>{children}</Link>
      ) : (
        <a href={href}>{children}</a>
      )}
    </button>
  );
};

const PrimaryButton: FC<PrimaryButton> = ({ children, ...rest }) => {
  return (
    <Button {...rest} customClassName={style.button__primary}>
      {children}
    </Button>
  );
};

const SecondaryButton: FC<SecondaryButton> = ({ children, ...rest }) => {
  return (
    <Button {...rest} customClassName={style.button__secondary}>
      {children}
    </Button>
  );
};

export { PrimaryButton, SecondaryButton };
export default Button;
