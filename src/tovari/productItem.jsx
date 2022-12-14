

function ProductItem({text, url}){
    return(
        <div className="button">
            <a href={url}> {text}</a>
        </div>
    )
}

export default ProductItem;