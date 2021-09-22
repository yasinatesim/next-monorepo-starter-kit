import React from 'react';
import cls from 'classnames';

import { Logo, Facebook, Apple, Google } from '../../../components/icon';
import Button from '../../../components/button';
import Input from '../../../components/input';

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

        <div className={s.divider}>
          <span className={s.dividerTitle}>veya</span>
        </div>

        <Input label="E-posta adresi veya kullanıcı adı" placeholder="E-posta adresi veya kullanıcı adı" />
        <Input label="Parola" placeholder="Parola" error="Bu bir hata" />
      </div>
    </>
  );
}

export default Login;
