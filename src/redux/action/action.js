import axios from 'axios'
import * as types from '../types/type'

const get_data = (data) => {
        return {
                type:types.GET_DATA,
                payload:data
        }
}
export const pre_get_data = () => {
        return dispatch => {
                axios.get('/api/products')
                .then(res => 
                        {dispatch(get_data(res.data.products.data))}
                        )
                
                .catch(err => console.log(err)
                )
        }
}
