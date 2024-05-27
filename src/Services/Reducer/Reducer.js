import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant"
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
 
    //  console.log("Reducer", action.data)

    switch (action.type) {

        case ADD_TO_CART:
            console.log("reducer",action);
            return [ ...state,
                { cardData: action.data}]       
            break;
        case REMOVE_TO_CART:
           
            let result=action.data
            // console.log("reducerResult",result.course_id,"++",state.length);

            const indexToRemove = state.findIndex(item => item.cardData.course_id === result.course_id);
            console.log("IndexValue",indexToRemove)
            if (indexToRemove !== -1) {
                return [
                    ...state.slice(0, indexToRemove),
                    ...state.slice(indexToRemove + 1)
                ];
            } else {
                return state;
            }
        default:
            return state
    }


}