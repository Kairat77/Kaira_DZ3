import Tovari from './tovari/tovari'
import './App.css'
import './productList/productList.css'
import ProductItem from './productItem/productItem'
import './productItem/productItem.css'


function App() {
  return (
    <div className="App">
     <ProductItem/>
     <Tovari/>
    </div>
  )
}

export default App
