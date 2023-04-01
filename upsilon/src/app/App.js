import { BrowserRouter } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import Router from './Router';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import './App.scss';
import cn from "classnames";

const App = () => {
  const { isAuth } = useSelector(({ user }) => user);
  return (
    <>
      <BrowserRouter>
        <div className={cn('upsilon-app', {'upsilon-app-isAuth': isAuth})}>
          {isAuth && <Header />} 
          <div className="upsilon-app__container">
          <Router />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
