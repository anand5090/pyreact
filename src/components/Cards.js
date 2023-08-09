function Cards(props){
    return(
    <div className="card" style={{width: "18rem" }}>
   <img src={props.src} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.prag}</p>
    <a href="/" className="btn btn-primary">{props.btn}</a>
  </div>
 </div>
    );
}
export default Cards