import React from 'react'
import '../Styles/Cards.css'


const Card = ({ title, image, name_company, text, address, te_number }) => {
    return (
        <>
            <div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {name_company} </h5>
                                <h6 className='card-title'> {title} </h6>
                                <p className="card-text"> {text} </p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                <p className="card-text">Dirección: {address} </p>
                                <p className="card-text">Numero de telefono: {te_number} </p>
                            </div>
                            <div className="text-center">
                                <a href="..." className='btn btn-outline-secondary'>Ver más...</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={image} className='img-fluid rounded-start' alt="logotipo de la empresa" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

//como realiar un plan de detecion de errores 