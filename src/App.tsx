import './index.css'
import Card from './components/card/card'
import Header from './components/header/header'
import SearchBar from './components/searchBar/searchBar'
function App() {
  return (
    <>
      <Header></Header>

      <div className="container">
        <SearchBar></SearchBar>
        <Card></Card>
      </div>
    </>
  )
}

export default App
