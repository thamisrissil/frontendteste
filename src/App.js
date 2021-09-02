import { Page, SiderBar, NavSearch, Filter, Card, Pagination} from './Components'

function App() {

  return (

    <div className="wrapper d-flex">
      <SiderBar />
      <Page />
      <Filter />
      <NavSearch />
      <Card />
      <Pagination />
    </div>

  );
}

export default App;