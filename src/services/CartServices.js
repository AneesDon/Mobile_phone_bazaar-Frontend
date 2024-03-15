import { useDispatch } from "react-redux"
import { addProduct } from "../../store/cartSlice"


const addToCart = (product) => {
    const dispatch = useDispatch()      
     dispatch(addProduct(product))
}

export default addToCart