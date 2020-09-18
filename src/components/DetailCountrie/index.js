import React from 'react'

import { numberWithCommas } from '../Utilities/index'
import { connect } from 'react-redux'

import './style.scss'

const DetailCoutrie = ({details, active, backPage, countriesArray, theme}) => {
    
    let population = ""
    let languages = ""
    let topLevelDomain = ""
    let currenciesArray = ""

    if(Object.keys(details).length !== 0 && details.constructor === Object){
        details.languages.map( language => languages = languages + language.name + ", ")
        details.currencies.map( currencies => currenciesArray = currenciesArray + currencies.name+ ", ")
        topLevelDomain = details.topLevelDomain.toString()
        population = details.population
    }
    
    return(
        <div className={`detail ${ active ? 'active' : ''} ${theme ? '' : 'dark-theme'}`}>
            <div className="detail-container">
                <div className="detail_back-button"
                    onClick={()=>{
                        backPage() 
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><title>ionicons-v5-a</title><polyline className={theme ? '' : 'dark-icon'} points="244 400 100 256 244 112" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/><line className={theme ? '' : 'dark-icon'}  x1="120" y1="256" x2="412" y2="256" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/></svg>
                    <span>Back</span>
                </div>

                <div className="detail_content">
                    <img src={details.flag} alt="Countrie Flag" className="detail_content-details--flag"/>

                    <div className="detail_content-details">
                        <h2 className="detail_content-details--title-name">{details.name}</h2>

                        <div className="detail_info">
                            <div className="detail_info-1">
                                <span className="detail_info--native-name"><span className="detail_info--sub-titles">Native Name: </span>{details.nativeName}</span>
                                <span className="detail_info--popilation"><span className="detail_info--sub-titles">Population: </span>{numberWithCommas(population)}</span>
                                <span className="detail_info--region"><span className="detail_info--sub-titles">Region: </span>{details.region}</span>
                                <span className="detail_info--sub-region"><span className="detail_info--sub-titles">Sub Region: </span>{details.subregion}</span>
                                <span className="detail_info--capital"><span className="detail_info--sub-titles">Capital: </span>{details.capital}</span>
                            </div>
                            <div className="detail_info-2">
                                <span className="detail_info--top-love"><span className="detail_info--sub-titles">Top Love Domain: </span>{topLevelDomain}</span>
                                <span className="detail_info--currencie"><span className="detail_info--sub-titles">Currencies: </span>{currenciesArray.slice(0, ((currenciesArray.length)-2))}</span>
                <span className="detail_info--languages"><span className="detail_info--sub-titles">Languages: </span>{languages.slice(0, ((languages.length)-2))}</span>
                            </div>
                        </div>

                        <div className="detail_border-countries">
                            <span className="detail_border-countries--sub-titles">Border Countries: </span>

                            { details.borders && details.borders.map( (borderCountrie, index) => {
                                
                                const borderFilter = countriesArray.filter( countrie => countrie.alpha3Code.includes(borderCountrie))
                                
                                return(
                                    <div className="border-countrie" style={theme? {border:"1px solid #111517"} : {border:"1px solid #fff"}} key={index}>
                                        <span className="border-countrie_name">{borderFilter[0].name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(state =>({
    countriesArray: state.countries.countries,
    theme: state.countries.themeColor
}))(DetailCoutrie)