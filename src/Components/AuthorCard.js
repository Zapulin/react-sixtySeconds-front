import '../stylesheets/AuthorCard.css'

function AuthorCard(props) {
  return (
    <div className='content-card'>
      <img 
        className='img-card'
        src={require(`../Resources/images/img-card-${props.image}.png`)}
        alt='Card img' />
      <div className='content-text-card'>
        <p className='name-card'>
          <strong>{props.name}</strong> from {props.country}
        </p>
        <p className='role-card'>
          {props.role} at <strong>{props.company}</strong>
        </p>
        <p className='txt-card'>"{props.description}"</p>
      </div>  
    </div>
  );
}

export default AuthorCard;