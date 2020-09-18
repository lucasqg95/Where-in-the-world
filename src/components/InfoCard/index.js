import React from 'react'

import { numberWithCommas } from '../Utilities/index'
import { connect } from 'react-redux'

import './style.scss'

const InfoCard = ({ countrie, ShowDetails, theme }) => {

    let population = ""

    function handleDetails(){
        ShowDetails({
            countrie
        })
    }

    if(Object.keys(countrie).length !== 0 && countrie.constructor === Object)
        population = countrie.population

    return(
        <div className={`card ${theme ? '' : 'dark-theme-elements'}`} onClick={handleDetails}>

            <figure className="card_flag-content">
                <img className="card_flag" src={countrie.flag} alt="Coutrie flag"/>
                <figcaption className="card_caption"><span>See more</span></figcaption>
            </figure>
            

            <div className="card_info">
                <span className="card_info--name">{countrie.name}</span>
                <span className="card_info--population"><span className="card_sub-title">Population: </span>{numberWithCommas(population)}</span>
                <span className="card_info--region"><span className="card_sub-title">Region: </span>{countrie.region}</span>
                <span className="card_info--capital"><span className="card_sub-title">Capital: </span>{countrie.capital}</span>
            </div>
        </div>
    )
}

export default connect(state =>({
    theme: state.countries.themeColor
}))(InfoCard)