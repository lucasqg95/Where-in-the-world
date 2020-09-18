import React, { useState } from 'react'

import { connect } from 'react-redux'
import { setFilter, searchByName } from '../../store/actions/countries'

import './style.scss'

const Filter = ({searchText, dispatch, theme}) =>{

    const [ isSelect, setSelect ] = useState(false)
    const [ hasSelectedFilter, setSelectedFilter ] = useState('')

    function selectRegion(region){
        setSelectedFilter(region)
        dispatch(setFilter(region))
        dispatch(searchByName(searchText))
    }



    return(
        <div className={`filter ${theme ? '' : 'dark-theme-elements'}`} onClick={()=> setSelect(!isSelect)}>
            <span className="filter_title">{hasSelectedFilter || `Filter by Region`}</span>
            <svg className={theme ? '' : 'dark-icon'} aria-expanded={isSelect} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><title>ionicons-v5-a</title><polyline points="112 184 256 328 400 184" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/></svg>

            <div className={`filter-region ${isSelect ? "active": "disable"} ${theme ? '' : 'dark-theme-elements'}`}>
                <ul className="filter-region_dropdown-select">
                    { hasSelectedFilter && <li onClick={() => selectRegion('')}><span>Disable filter</span></li>}
                    <li onClick={() => selectRegion("Africa")}><span>Africa</span></li>
                    <li onClick={() => selectRegion("America")}><span>America</span></li>
                    <li onClick={() => selectRegion("Asia")}><span>Asia</span></li>
                    <li onClick={() => selectRegion("Europe")}><span>Europe</span></li>
                    <li onClick={() => selectRegion("Oceania")}><span>Oceania</span></li>
                </ul>
            </div>
        </div>
    )
}

export default connect(state =>({
    searchText: state.countries.searchText,
    theme: state.countries.themeColor
}))(Filter)