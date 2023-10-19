import React from "react";

const MenuCard = (props) => {
    const mystyle = {
        color: "red",
        fontWeight: "bold"
    }
    
    return (
        <>
            <section className="main-card--cointainer">
            {props.data.map((value)=>{
                const { id, name, category, image, description } = value;

                return(
                    <>
                    <div className="card-container" key={id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle" style={mystyle}>{category}</span>
                            <h2 className='card-title'>{name}</h2>
                            <span className='card-description subtle'>{description}</span>
                            <div className='card-read'>Read</div>
                        </div>
                        <img  src={image}alt='images' className='card-media'/>
                        <span className='card-tag subtle'>Order Now</span>
                    </div>

                </div>
                    </>
                );
            })}
            
            </section>
        </>
    )
}

export default MenuCard;