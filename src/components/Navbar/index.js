import React from 'react'


import { connect } from 'react-redux'
import { switchColor } from '../../store/actions/countries'

import './style.scss'
import FillMoonIcon from '../../assets/icons/moon.svg'
import MoonIcon from '../../assets/icons/moon-outline.svg'


const Navbar = ({ theme, dispatch }) =>{

    function switchTheme(){
        dispatch(switchColor())
        
        if(!theme){
            document.body.classList.remove('dark-theme')
        }else{
            document.body.classList.add('dark-theme')
        }
    }

    return(
        <header className={`navbar ${theme ? '' : 'dark-theme-elements'}`}>
            <div className="navbar_content">
                <div className="navbar_title">
                    <h1>Where in the world?</h1>
                </div>

                <div className="navbar_color-mode" onClick={switchTheme}>
                    <img className="navbar_color-mode--icon" src={theme ? MoonIcon : FillMoonIcon} alt="Moon Icon" />
                    <p className="navbar_color-mode--title">Dark Mode</p>
                </div>
           </div>
        </header>
    )
}

export default connect( state=>({
    theme: state.countries.themeColor
}))(Navbar) 