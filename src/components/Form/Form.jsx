
const formSubmit = (e) => {
    e.preventDefault()
    console.log('works');
  }
  const postAdd = (e) =>{
    console.log(e.target.value);
  }

function Form(){
    return(
        <>
        <div className="cont">
        <form className='postForm'>
        <input className='form-control' placeholder="Что хотите написать" type="text" name="post" onChange={postAdd} />
        <button className="but" onClick={formSubmit}>Chek!</button>
        </form>
        </div>
        </>
        
    )
}

export default Form;