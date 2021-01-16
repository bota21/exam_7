import { React, useState } from 'react';
import s from './Page.module.css'
import { v4 as uuidv4 } from 'uuid';
import ProductList from '../../components/ProductList/ProductList';
import ProductForm from '../../components/ProductForm/ProductForm';
import List from '../../components/List/List';
const Page = () => {
    const [product, setProduct] = useState([
        {id: uuidv4(), name: 'HDD Seagate 2TB', price: 200, stock: 20},
        {id: uuidv4(), name: 'ADATA RAM 8GB', price: 120, stock: 50},
        {id: uuidv4(), name: 'ASUS Zenbook', price: 1200, stock: 4},
        {id: uuidv4(), name: 'Acer Predator', price: 1500, stock: 2}
    ])
    const [data, setData] = useState([]);
    
    let currentName = (e, id) => {
        let index = product.findIndex(i => i.id === id);
        let copyData = [...data];
        let item = {...data[index]}
        item.name = e.target.value;
        copyData[index] = item;
        setData(copyData)
    };
    let currentPrice = (e, id) => {
        let index = product.findIndex(i => i.id === id);
        let copyData = [...data];
        let item = {...data[index]};
        item.price = parseInt(e.target.value);
        copyData[index] = item;
        setData(copyData);
    };
    let currentStock = (e, id) => {
        let index = product.findIndex(i => i.id === id);
        let copyData = [...data];
        let item = {...data[index]};
        item.stock = parseInt(e.target.value);
        copyData[index] = item;
        setData(copyData)
    };
    let reduceStock = id => {
        let index = product.findIndex(i => i.id === id);
        let copyProduct = [...product];
        if(copyProduct[index].stock === 0) return;
        copyProduct[index].stock--;
        setProduct(copyProduct)
    }
    let addData = (e) => {
        e.preventDefault();
        let copyProduct = [...product];
        copyProduct.push(
            {id: uuidv4(), name: data[-1].name, price: data[-1].price, stock: data[-1].stock}
            );
            setProduct(copyProduct)
        };
        let addProductList = product.map(item => {
            return <List 
            key={item.id}
            title={item.name}
            price={item.price}
            stock={item.stock}
            onReduce={() => reduceStock(item.id)}
            />
        })
        return (
            <div className={s.page}>
            <div className={s.wrapper}>
            <ProductList />
            {addProductList}
            </div>
            <div className={s.line}></div>
            <ProductForm 
            changeName={currentName}
            changePrice={currentPrice}
            changeStock={currentStock}
            onSubmit={(e) => addData(e)}
            />
            </div>
            )
        }
        export default Page;