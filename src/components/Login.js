import React, { useEffect } from "react";

export default function Login(props){

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [dataMatch, setDataMatch] = React.useState(false)

    function loginHandler(e){
        setLogin(e.target.value)
    }

    function passwordHandler(e){
        setPassword(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault();
        props.onLogin(login, password);
    }

    useEffect(()=>{//Устанавливаем стейт для определения состояния кнопки авторизации
        if(login === props.profileData.login && password === props.profileData.password){
            setDataMatch(true)
        } else{
            setDataMatch(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login, password] )

    return(
        <form className='form' onSubmit={submitHandler}>
            <input name='login' placeholder='login' onChange={loginHandler}></input>
            <input name='password' placeholder='password' type='password' onChange={passwordHandler}></input>
            <button type='submit' className={dataMatch ? 'button' : 'button-disabled'}>Войти</button>
        </form>
    )
}