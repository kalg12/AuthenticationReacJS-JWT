import React from 'react'
import '../components/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light navbar-space">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" width={26} height={24} className="d-inline-block align-text-top" alt='Logo'/>
                        Autenticación con React JS y JWT
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar