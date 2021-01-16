import { React } from 'react';
import s from './List.module.css';
const List = props => {
    return (
        <div className={s.list}>
        <div className={s.title}>{props.title}</div>
        <div className={s.price}>{props.price}</div>
        <div className={s.stock}>{props.stock}
        <span className={s.reduce} onClick={props.onReduce}></span>
        </div>
        </div>
        )
    };
    export default List