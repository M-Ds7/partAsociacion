import React from 'react'
import Card from './Card'
import pelo from '../Img/Pelito.jpg'

const cards = [
    {
        id: 1,
        image: pelo,
        title: " Castracíon",
        name_company: " Guaguis",
        text: " Un evento en la que damos apoyo a perritos en castracion gratis",
        address: " Parque vicentenario, efrente del quiosco",
        te_number: 9612703005
    },
    {
        id: 2,
        image: pelo,
        title: " Castracíon",
        name_company: " Guaguis",
        text: " Un evento en la que damos apoyo a perritos en castracion gratis",
        address: " Parque vicentenario, efrente del quiosco",
        te_number: 9612703025
    }
]

const Cards = (props) => {
    return (
        <>
            <div className="container  justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        cards.map((card) => (
                            <div key={card.id} className="col-md-6">
                                <Card data={card} title={card.title} image={card.image} name_company={card.name_company} text={card.text} address={card.address} te_number={card.te_number} />
                            </div>
                        ))
                    }
                </div>
                <div className="container"></div>
            </div>
        </>
    )
}

export default Cards
