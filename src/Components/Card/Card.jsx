import "./Card.css"

const Card = (menu) => {
    return ( 
        menu.Cards.map((card)=>{
    return <>       
            <div className="menu-card">
            <img className='menu-card-img' src={card.source} alt={card.name} />
            <h3 className="menu-card-title">
                - {card.name} -
            </h3>
            <p className="menu-card-title">
                IDR {card.price} K
            </p>
            </div>
            </>
        })
    );
}

export default Card;