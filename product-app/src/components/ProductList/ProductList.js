import { React } from 'react';
import s from './ProductList.module.css';

const ProductList = props => {
    return (
        <div className={s.product_list}>
        <div className={s.title_wrapper}>
        <div className={s.title}>Title
        <div className={s.triangle_wrapper}>
        <span className={s.triangle_up} onClick={props.sortNameUp}></span>
        <span className={s.triangle_down} onClick={props.sortNameDown}></span>
        </div>   
        </div>
        <div className={s.price}>Price $
        <div className={s.triangle_wrapper}>
        <span className={s.triangle_up} onClick={props.sortPriceUp}></span>
        <span className={s.triangle_down} onClick={props.sortPriceDown}></span>
        </div>                
        </div>
        <div className={s.stock}>Stock
        <div className={s.triangle_wrapper}>
        <span className={s.triangle_up}  onClick={props.sortStockUp}></span>
        <span className={s.triangle_down} onClick={props.sortStockDown}></span>
        </div>    
        </div>
        </div>           
        </div>
        )
    };
    
    export default ProductList;