
const INITIAL_STATE = {
    themeColor: true,
    filter: '',
    searchText: '',
    search: [{}],
    countries: [{}]
}

function countries(state=INITIAL_STATE, action){
    if(action.type === 'SET_COUNTRIES_DATA'){
        return {
            ...state, countries: action.payload.data
        }
    }

    if(action.type === 'SET_FILTER'){
        return { ...state, filter: action.payload.filter }
    }

    if(action.type === "SEARCH_BY_NAME"){
        return {
            ...state, 
            searchText: action.payload.searchText,
            search: state.countries.filter( countrie => {
                if(state.filter){
                    if(countrie.region.includes(state.filter))
                        return countrie.name.toLowerCase().includes(action.payload.searchText.toLowerCase())
                }else{
                    return countrie.name.toLowerCase().includes(action.payload.searchText.toLowerCase())
                }
            })
        }
    }
    
    if(action.type === "SWITCH_COLOR"){
        return { ...state, themeColor: !state.themeColor }
    }

    return state
}

export default countries