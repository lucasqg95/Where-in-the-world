export function setCountriesData( data ){
    return{
        type: 'SET_COUNTRIES_DATA',
        payload:{
            data
        }
    }
}

export function setFilter( filter ){
    return{
        type: 'SET_FILTER',
        payload:{
            filter
        }
    }
}

export function searchByName( searchText ){
    return{
        type: 'SEARCH_BY_NAME',
        payload:{
            searchText
        }
    }
}

export function switchColor(){
    return{
        type: 'SWITCH_COLOR'
    }
}