import React, { useState } from 'react';
import {
  Button 
} from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../app/store/userSlice';
import { useDispatch } from 'react-redux';
import { APP_NAME } from '../../app/constants';
import './RegisterPageUser.scss';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  email: Yup
    .string()
    .required('Поле не может быть пустым'),
  password: Yup
    .string()
    .required('Поле не может быть пустым')
    .min(6, 'Поле должно содержать не менее 6 символов'),
  confirmPassword: Yup
    .string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  userName: Yup
    .string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  userSurname: Yup
    .string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const RegisterPage = () => {
  const [email, setLoging] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setName] = useState('');
  const [userSurname, setSurname] = useState('');
  const history = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    dispatch(setUser({ userName: data.username, isAuth: true }));
    history('/login');
  }

  

  return (
    <section className='hero has-background-grey-lighter is-fullheight section-auth'>
      
      
      <form className='box box-login' onSubmit={handleSubmit(onSubmit)}>
        <div className='field field-button'>
        <div className='field'>
          <Button
            className='button is-fullwidth button-seeker'
            type='submit'>
              Соискатель
          </Button>
        </div>
        <div className='field'>
          <Button
            className='button is-fullwidth button-employer'
            type='submit'>
              Работодатель
          </Button>
        </div>

        </div>
      
        <div className='field field-login'>
        <div class="control">
          <input class="input" type="email" placeholder="Введите e-mail"></input>
        </div>
        </div>
        <div className='field field-login'>
        <div class="control">
          <input class="input" type="password" placeholder="Введите пароль"></input>
        </div>
        </div>
        <div className='field field-login'>
        <div class="control">
          <input class="input" type="confirm-password" placeholder="Повторите пароль"></input>
        </div>
        </div>
        <div className='field field-login'>
        <div class="control">
          <input class="input" type="name" placeholder="Ваше Имя"></input>
        </div>
        </div>
        <div className='field field-login'>
        <div class="control">
          <input class="input" type="surname" placeholder="Ваша фамилия"></input>
        </div>
        </div>
        <div className='field'>
          <Button
            className='button is-fullwidth button-registration'
            type='submit'>
              Зарегитрироваться
          </Button>
        </div>
      </form>
    </section>
    
  )
  }

export default RegisterPage;
