import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
            <p class="col-md-4 mb-0 text-body-secondary">© 2026 GoFood, Inc</p> 
            <Link to="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="Bootstrap"></Link> 
            </footer>
        </div>
    )
}

export default Footer