import React from 'react';

import cls from 'classnames';

import Button from '@spotify-clone/shared/src/components/button';
import Checkbox from '@spotify-clone/shared/src/components/checkbox';
import Divider from '@spotify-clone/shared/src/components/divider';
import { Apple, Facebook, Google, Logo } from '@spotify-clone/shared/src/components/Icons';
import Input from '@spotify-clone/shared/src/components/input';

import { ButtonVariant } from '../../../components/Button/types';

import s from './Login.module.scss';

type Buttons = {
  text: string;
  className: ButtonVariant;
  icon: React.ReactNode;
}[];

const Login: React.FC = () => {
  const buttons : Buttons = [
    {
      text: 'Facebook ile devam et',
      icon: <Facebook width="18" height="16" />,
      className: 'facebook',
    },
    {
      text: 'Apple ile devam et',
      icon: <Apple width="18" height="16" />,
      className: 'apple',
    },
    {
      text: 'Google ile devam et',
      icon: <Google width="18" height="16" />,
      className: 'default',
    },
  ];

  return (
    <>
      <div className={s.head}>
        <Logo className={s.logo} width="200" height="66" />
      </div>
      <div className={s.content}>
        <h1 className={cls(s.title, 'h5')}>Devam etmek için Spotify'da oturum aç.</h1>

        {buttons.map(({ text, icon, className }) => (
          <div className={s.row} key={className}>
            <Button variant={className}>
              <span>{icon}</span>
              <span>{text}</span>
            </Button>
          </div>
        ))}

        <Divider displayText="veya" />

        <Input name="email" label="E-posta adresi veya kullanıcı adı" placeholder="E-posta adresi veya kullanıcı adı" />
        <Input name="password" label="Parola" placeholder="Parola" />

        <div className={s.row}>
          <Button variant="link" to="/login">
            Parolanı mı unuttun?
          </Button>
        </div>

        <div className={s.actions}>
          <Checkbox name="remember" label="Beni hatırla" />

          <div className={s.signin}>
            <Button>Oturum Aç</Button>
          </div>
        </div>

        <Divider />

        <div className={s.footer}>
          <h2 className={cls(s.account)}>Hesabın yok mu</h2>

          <Button variant="default" className={s.register}>
            Kayıt Ol
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
