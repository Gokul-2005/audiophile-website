import style from './App.module.css';
import Body from './Body/Body';
import Header from './Header/Header';
import SideNavBar from './SideNavBar/SideNavBar';

function App() {
  return (
    <div className={style.App} id={style.App}>
      <Header/>
      <SideNavBar />
      <Body />
    </div>
  );
}

export default App;
