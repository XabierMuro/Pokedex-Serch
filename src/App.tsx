import './index.css'
import { Card } from './components/card/card'
import { Header } from './components/header/header'
import { SearchBar } from './components/searchBar/searchBar'
import { Footer } from './components/footer/footer'
import { LoadingCard } from './components/loadingCard/loadingCard'
function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <SearchBar></SearchBar>
        <div className="container_pokemon">
          <Card></Card>
          <LoadingCard></LoadingCard>
          <Card></Card>
          <LoadingCard></LoadingCard>
          <Card></Card>
          <LoadingCard></LoadingCard>
          <Card></Card>
          <LoadingCard></LoadingCard>
          <Card></Card>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
