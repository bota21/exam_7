import { React } from 'react';
import s from './ProductList.module.css';

const ProductList = () => {
    return (
        <div className={s.product_list}>
            <div className={s.title_wrapper}>
                <div className={s.title}>Title
                <span className={s.triangle_up}></span>
                </div>
                <div className={s.price}>Price $
                <div className={s.triangle_wrapper}>
                <span className={s.triangle_up}></span>
                <span className={s.triangle_down}></span>
                </div>                
                </div>
                <div className={s.stock}>Stock
                <span className={s.triangle_down}></span>
                </div>
            </div>           
        </div>
    )
};

export default ProductList;