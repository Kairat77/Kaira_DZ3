import ProductItem from "../productItem/productItem";


function ProductList(){
    const formSubmit = (e) => {
        e.preventDefault()
        console.log('Add to Cart');
      }
    return(
    <div className="conteiner">
        
       <div className="card"> 
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGyAjbsxPxesUtOCpQ7s21x_FxvU22QW2qc88FuS23VXNTcdCd9VZleKvbfozlgHQx8o&usqp=CAU" alt="Lexsus" />
       <h1 data-text="Lexsus420">Lexsus420</h1>
       <p className="price">$10000</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, accusantium.</p>
       <p><button onClick={formSubmit}>Add to Cart</button></p>
       </div>

       <div className="card_2"> 
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGyAjbsxPxesUtOCpQ7s21x_FxvU22QW2qc88FuS23VXNTcdCd9VZleKvbfozlgHQx8o&usqp=CAU" alt="Lexsus" />
       <h1 data-text="Lexsus570">Lexsus 570</h1>
       <p className="price">$11000</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, accusantium.</p>
       <p><button onClick={formSubmit}>Add to Cart</button></p>
       </div>

       <div className="card"> 
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGyAjbsxPxesUtOCpQ7s21x_FxvU22QW2qc88FuS23VXNTcdCd9VZleKvbfozlgHQx8o&usqp=CAU" alt="Lexsus" />
       <h1 data-text="Lexsus220">Lexsus220</h1>
       <p className="price">$20000</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, accusantium.</p>
       <p><button onClick={formSubmit}>Add to Cart</button></p>
       
       </div>
    </div>

        
    )
}

export default ProductList;