const Exbox = (props) => {
  return(
  <div className="ja pod gosar">
    <h1 className="text-white text-5xl">{props.titulo}</h1>
    {props.children}
  </div>
  )
}

export default Exbox;