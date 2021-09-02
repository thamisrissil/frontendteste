import {Page, SiderBar, NavSearch, Filter} from './Components'

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