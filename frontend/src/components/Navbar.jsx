import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { usecart } from './ContextReducer'

const Navbar = () => {
    const navigate = useNavigate()
    const cartItems = usecart()
    const totalItems = cartItems.reduce((sum, item) => sum + Number(item.qty), 0)

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userEmail')
        navigate('/login')
    }

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <Link className="navbar-brand fs-1 fst-italic" to="/home">GoFood</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" aria-current="page" to="/home">Home</Link>
                                </li>
                                {(localStorage.getItem('authToken')) ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link active fs-5" aria-current="page" to="/myorders">My Orders</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active fs-5" aria-current="page" to="/cart">My Cart</Link>
                                        </li>
                                    </>
                                    : ""}
                            </ul>
                            {(!localStorage.getItem('authToken')) ?
                                <div className="d-flex">
                                    <Link className="btn bg-white text-success mx-1" aria-current="page" to="/login">Login</Link>
                                    <Link className="btn bg-white text-success mx-1" aria-current="page" to="/signup">Signup</Link>
                                </div>
                                :
                                <div>
                                    <div className="btn bg-white text-success mx-1">
                                        MyCart ({totalItems})
                                    </div>
                                    <div className="btn bg-danger text-white mx-1" onClick={handleLogout}>
                                        Logout
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar