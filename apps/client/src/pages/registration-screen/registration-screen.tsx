import { CreateUserDto } from '@project/core';
import { ClientRoute } from '@project/shared-types';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from '../../components/page-header/page-header';
import { useRegisterUserMutation } from '../../store/user-api';

export default function RegistrationScreen():JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser] = useRegisterUserMutation();

  const navigate = useNavigate();

  const onSubmit = async (createUserDto: CreateUserDto) => {
    await registerUser(createUserDto).unwrap();

    navigate(ClientRoute.Login);
  }

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      email: email,
      name: name,
      password: password,
    })
  }

  return(
    <div className="wrapper">
      <PageHeader user={null} />
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Регистрация</h1>
            <form method="post" action="/" onSubmit={handleSubmit}>
              <div className="input-login">
                <label htmlFor="name">Введите имя</label>
                <input onChange={(evt) => setName(evt.target.value)} value={name} type="text" id="name" name="name"  autoComplete="off" required />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input onChange={(evt) => setEmail(evt.target.value)} value={email} type="email" id="email" name="email" autoComplete="off" required />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="password">Придумайте пароль</label><span>
                  <input onChange={(evt) => setPassword(evt.target.value)} value={password} type="password" placeholder="• • • • • • • • • • • •" id="password" name="password" autoComplete="off" required />
                  <button className="input-login__button-eye" type="button">
                    <svg width="14" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button></span>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <button className="button login__button button--medium" type="submit">Зарегистрироваться</button>
            </form>
          </section>
        </div>
      </main>
      <PageFooter />
    </div>    
  );
}