import { Page, SiderBar, NavSearch, Filter } from './Components'

function App() {

  return (

    <div className="wrapper d-flex">
      <SiderBar />
      <Page />
      <Filter />
      <NavSearch />
    </div>

  );
}

export default App;