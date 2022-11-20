import React from 'react'
import "./style.css"

const Extra = () => {

    const funcH = () => {
        window.location.href = './MapsMain'
    }

    const show_nb = () => {
        let x = document.getElementsByClassName('nav_bar');
        x[0].classList.toggle('active');
    }

    return (
        <>
            <nav className="nav_bar" onClick={show_nb} >
                <div className="toogle_but">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul id="menu_1">
                    <li className="item">
                        <a href="/MapsMain"> Your Location </a>
                    </li>
                    <li className="item">
                        <a href="../contact_us/contact_us.html"> Contact us </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Extra