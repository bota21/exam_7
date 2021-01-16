import { React } from 'react';
import s from './Page.module.css'
import ProductList from '../../components/ProductList/ProductList';
import Form from '../../components/ProductForm/ProductForm';
const Page = () => {
    return (
        <div className={s.page}>
        <ProductList  title='HDD Seagate' price='250' stock='20'/>
        <div className={s.line}></div>
        <Form />
        </div>
        )
    }
    export default Page;