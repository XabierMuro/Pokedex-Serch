import './index.css'
import Card from './components/card/card'
import Header from './components/header/header'
import SearchBar from './components/searchBar/searchBar'
import Footer from './components/footer/footer'
function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <SearchBar></SearchBar>
        <div className="container_pokemon">
          <Card></Card>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
