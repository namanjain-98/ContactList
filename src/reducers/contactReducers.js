const initialData = {
    list: [],
}

const contactReducers = (state=initialData, action) => {

    switch (action.type){

        case "ADD_CONTACT":  
        const {id,data} = action.payload;

        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }

        case "DELETE_CONTACT":  
        const updatedList = state.list.filter(item => item.id !== action.id)

        return{
            ...state,
            list:updatedList
        }

        case "REMOVE_ALL":  
        
        return{
            ...state,
            list:[]
        }

        default: return state;
    }
}


export default contactReducers;