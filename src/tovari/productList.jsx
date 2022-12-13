import ProductItem from "./productItem";

function ProductList(){
    const productItem = [
        {t: "Продукты на заказ", url: "https://dostavka312.kg"},
        {t: "Продукты для зимы", url: "https://www.championat.com"},
        {t: "вкусные продукты", url: "https://www.wonderzine.com"}
    ]
    return(
        <div className="center">
        <ul>
            {productItem.map(item =>
            <ProductItem text={item.t} url={item.url} />
            )}
        </ul>
        </div>
        
    )
}

export default ProductList;