import { React } from 'react';
import s from './ProductForm.module.css';

const ProductForm = props => {
    return (
        <form>
        <div className={s.form}>
        <h2 className={s.title}>Create new product</h2>
        <div className={s.wrapper}>
        <input 
        type="text" className={s.input_title} placeholder='Title'
        onChange={props.changeName} value={props.valueName}
        />
        <input 
        type="text" className={s.input_price} placeholder='Price'
        onChange={props.changePrice} value={props.valuePrice}
        />
        <input 
        type="text" className={s.input_stock} placeholder='Stock availability'
        onChange={props.changeStock} value={props.valueStock}
        />
        </div>
        <button
        type='submit' className={s.submit}
        onClick={props.onSubmit}>
        Create product
        </button>
        </div>
        </form>
        )
    };
    export default ProductForm