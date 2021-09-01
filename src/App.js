import './App.css';
import SiderBar from './SiderBar';
import Page from './Page';
import Filter from './Filter';
import NavSearch from './NavSearch/NavSearch';

const renderSideBar = <SiderBar />;
const renderPage = <Page />;
const renderFilter = <Filter/>;
const renderNavSearch = <NavSearch/>


function App() {
  return (
    <div className="wrapper d-flex">
      {renderSideBar}
      {renderPage}
      {renderFilter}
      {renderNavSearch}
    </div>
  );
}
export default App;