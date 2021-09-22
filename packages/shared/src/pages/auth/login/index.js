import React from 'react';

import { Logo, Facebook, Apple, Google } from '../../../components/icon';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Divider from '../../../components/divider';
import Checkbox from '../../../components/checkbox';

import s from './index.module.scss';

function Login() {
  const buttons = [
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
        <Logo width="200" height="66" />
      </div>
      <div className={s.content}>
        <h1 className={`h5 ${s.title}`}>Devam etmek için Spotify'da oturum aç.</h1>

        {buttons.map(({ text, icon, className }) => (
          <Button variant={className} key={className}>
            <span>{icon}</span>
            <span>{text}</span>
          </Button>
        ))}

        <Divider displayText />

        <Input name="email" label="E-posta adresi veya kullanıcı adı" placeholder="E-posta adresi veya kullanıcı adı" />
        <Input name="password" label="Parola" placeholder="Parola" error="Bu bir hata" />

        <Button variant="link" to="/login">
          Parolanı mı unuttun?
        </Button>

        <div>
          <Checkbox name="remember" label="Beni hatırla" />
          <div>sddsff</div>
        </div>

        <Divider />
      </div>
    </>
  );
}

export default Login;
