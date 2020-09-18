import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import Search from '../../components/Search/index'
import Filter from '../../components/Filter/index'
import InfoCard from '../../components/InfoCard/index'
import DetailCoutrie from '../../components/DetailCountrie/index'

import { connect } from 'react-redux'
import { setCountriesData } from '../../store/actions/countries'

import './style.scss'

const Home = ({ searchArray, theme, dispatch }) =>{

    const [ hasCountries, setCountries ] = useState([{}])
    const [ hasDetail, setDetail ] = useState({})
    const [ isActive, setActive ] = useState(false)

    useEffect(()=>{
        async function loadCountries(){
            const res = await api.get('/')

            setCountries(res.data)
            dispatch(setCountriesData(res.data))
        }

        if(theme){
            console.log("luz")
        }else{
            console.log("noite")
        }

        
        loadCountries()
    },[dispatch, theme])

    useEffect(()=>{
        setCountries(searchArray)
    },[searchArray])

    //card function
    function ShowDetails(countrie){
        setDetail(countrie.countrie)
        setActive(true)
    }

    function backPage(){
        setActive(false)
    }

    return(
        <div className="home">
            
            <div className="home_filters">
                <Search />
                <Filter />
            </div>

            <div className="home_content" style={isActive? {display:"none"} : {display:"grid"}}>
                {hasCountries && hasCountries.map( (countrie, index) => (
                    <InfoCard 
                        key={index}
                        countrie={countrie} 
                        ShowDetails={ShowDetails}
                    />
                ))}
            </div>

            <DetailCoutrie details={hasDetail} active={isActive} backPage={backPage}/>
        </div>
    )
}

export default connect(state =>({
    searchArray: state.countries.search,
    theme: state.countries.themeColor
}))(Home) 