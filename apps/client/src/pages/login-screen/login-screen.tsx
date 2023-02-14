import { LoginUserDto } from '@project/core';
import { ClientRoute } from '@project/shared-types';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from '../../components/page-header/page-header';
import { useLoginMutation } from '../../store/user-api';

export default function LoginScreen():JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();

  const navigate = useNavigate();

  const onSubmit = async (loginUserDto: LoginUserDto) => {
    const logged = await login(loginUserDto).unwrap();

    localStorage.setItem('token', logged.token);

    navigate(ClientRoute.Main);
  }

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      email: email,
      password: password,
    })
  }


  return(
    <div className="wrapper">
      <PageHeader user={undefined} />
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Войти</h1>
            <p className="login__text">Hовый пользователь? <a className="login__link" href={ClientRoute.Registration}>Зарегистрируйтесь</a> прямо сейчас</p>
            <form method="post" action="/" onSubmit={handleSubmit}>
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input onChange={(evt) => setEmail(evt.target.value)} value={email} type="email" id="email" name="email" autoComplete="off" required />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="passwordLogin">Введите пароль</label><span>
                  <input onChange={(evt) => setPassword(evt.target.value)} value={password} type="password" placeholder="• • • • • • • • • • • •" id="passwordLogin" name="password" autoComplete="off" required />
                  <button className="input-login__button-eye" type="button">
                    <svg width="14" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button></span>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <button className="button login__button button--medium" type="submit">Войти</button>
            </form>
          </section>
        </div>
      </main>
      <PageFooter />
    </div>    
  );
}