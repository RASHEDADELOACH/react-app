import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([])
    
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    useEffect(() => {
        axios.get("http://localhost:3006/api/v1/products/").then(res => setProducts(res.data)).catch(err => console.log(err))
    }, [products])
    const handleAddProduct = async(e) =>{
        e.preventDefault()
        const data = {
            name: name,
            desc: desc,
            price: price
        }
        await axios.post('http://localhost:3006/api/v1/products/', data).then(res => {
            if(res.status === 200){
                e.target.reset()
                alert("data added successfully")
            }
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <form onSubmit={handleAddProduct} className='add-product-form'>
                    <div className='form-input-div'>
                        <p>Name</p>
                        <input type="text" name='name' onChange={e => setName(e.target.value)} placeholder="Enter Product Name" required/>
                    </div>
                    <div className='form-input-div'>
                        <p>Description</p>
                        <input type="text" name='desc' onChange={e => setDesc(e.target.value)} placeholder="Enter Product Description"  required/>
                    </div>
                    <div className='form-input-div'>
                        <p>Price</p>
                        <input type="text" name='price' onChange={e => setPrice(e.target.value)} placeholder="Enter Product Price"  required/>
                    </div>
                    <div>
                        <input className='button-add' type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
            <hr />
            <div>
                {
                    products.map(product => <h2><Link to={`/product-details/${product._id}`}>{product.name}</Link></h2>)
                }
            </div>
        </div>
    );
};

export default Home;