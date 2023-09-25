
const Card = props => {
  
    const handleClick = (e) => {
      props.cardClicked(props.id);
    }
    return (
      <div className='card' title={props.original_title} data-id={props.id} onClick={handleClick}>
        <img src={props.poster_path !== 'N/A' ? `http://image.tmdb.org/t/p/w1280/${props.poster_path}` : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.original_title} data-id={props.imdbID} />
        
        <div class="show-credits">
              <p><strong>Title:</strong> {props.original_title}</p>
              <p><strong>popularity:</strong> {props.popularity || 'N/A '}</p>
              <p><strong>Year:</strong> {props.release_date}</p>
              <p><strong>Language:</strong> {props.original_language}</p>
             
            </div>
      </div>
    )
  }
  
export default Card