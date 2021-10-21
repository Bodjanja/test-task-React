import React from 'react';
import Login from './Login';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch, useHistory } from 'react-router-dom';

const redux = require('redux');
const createStore = redux.createStore;

function App() {

  //Стейт авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();

  //Создаём редьюсер со значением логина в состоянии
  const reducer = (state = {login: 'developer21', password: '123456'}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  //Создвём хранилище
  const store = createStore(reducer);

  //Получаем стейт
  const data = store.getState();

  function handleLogin(login, password){
    if(login === data.login && password === data.password)
    {
      setLoggedIn(true)
      history.push('/profile')
    }
  }

  return (
    <div className="page">
      <Switch>

        <Route exact path='/'>
          <Login onLogin={handleLogin} dataCheck={loggedIn} profileData={data} />
        </Route>

        <ProtectedRoute exact path='/profile' component={Profile} loggedIn={loggedIn} profileData={data}>
        </ProtectedRoute>

      </Switch>
    </div>
  );
}

export default App;
