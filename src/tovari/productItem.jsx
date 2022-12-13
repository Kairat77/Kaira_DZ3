

function ProductItem({text, url}){
    return(
        <div className="button">
        <li> 
            <a href={url}> {text}</a>
        </li>
        </div>
    )
}

export default ProductItem;