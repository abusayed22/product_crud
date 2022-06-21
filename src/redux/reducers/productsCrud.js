import * as types from '../types/type';


const intialState ={
        products:[]
}
        


const productsCrud = (state = intialState,action) => {
        switch (action.type) {
                case types.GET_DATA:
                        return {
                                ...state,
                                products:action.payload
                        }
                        break;
        
                default:
                        return state
                        break;
        }
}
export default productsCrud;
      
