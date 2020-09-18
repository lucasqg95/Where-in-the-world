import React, { useState } from 'react'

import { connect } from 'react-redux'
import { searchByName } from '../../store/actions/countries'

import './style.scss'

const Search = ({dispatch, theme}) => {

    const [ hasSearchText, setSearchText ] = useState('')

    return (
        <div className={`search ${theme ? '' : 'dark-theme-elements'}`}>
            <svg className={theme ? '' : 'dark-icon'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><title>ionicons-v5-f</title><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" style={{fill:'none',strokeMiterlimit:10,strokeWidth:'32px'}} /><line x1="338.29" y1="338.29" x2="448" y2="448" style={{fill:'none',strokeMiterlimit:10,strokeWidth:'32px'}} /></svg>
            <input
                className={`search_input ${theme ? '' : 'dark-theme-elements'}`}
                type="text"
                placeholder="Search for a country..."
                value={hasSearchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                    dispatch(searchByName(e.target.value))
                }}
            >
            </input>
        </div>
    )
}

export default connect(state =>({
    theme: state.countries.themeColor
}))(Search)