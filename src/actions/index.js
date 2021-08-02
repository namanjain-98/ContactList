export const addContact = (data) => {
    return (
        {
            type : "ADD_CONTACT",
            payload: {
                id : new Date().getTime().toString(),
                data : data    
            }
        }
    )
}
export const deleteContact = (id) => {
    return (
        {
            type : "DELETE_CONTACT",
            id
        }
    )
}
export const removeAll = () => {
    return (
        {
            type : "REMOVE_ALL"
        }
    )
}