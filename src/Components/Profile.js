import React from 'react'
import Cards from './Cards'

const Profile = ({ name_company, description, ImgEmpresa }) => {
    return (
        <>
            <div className="col-lg-12 md-3 mb-sm-0 ">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{name_company}</h1>
                                <p className="card-text">{description}</p>
                                <a href="./Account" className="btn btn-primary">Saber más...</a>{/*Enrutar haciia Account para ver la cuenta del rescatista*/}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={ImgEmpresa} className="img-fluid rounded-end" alt="Logo de la empresa" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-2 vh-100">
                <Cards />
            </div>

        </>
    )
}

export default Profile
