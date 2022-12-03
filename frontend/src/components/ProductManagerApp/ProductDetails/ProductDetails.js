import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css'
const ProductDetails = () => {
    const [product, setProduct] = useState()
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3006/api/v1/products/${id}`).then(res => setProduct(res.data[0])).catch(err => console.log(err))
    }, [id])
    const handleDelete = async() =>{
        await axios.delete(`http://localhost:3006/api/v1/products/${id}`).then(res => {
            if(res.status === 200){
                navigate('/')
            }
        }).catch(err => console.log(err))
    }
    return (
        <div className='deatails-page'>
            <div className='deatails-page-div'>
            <h3>{product?.name}</h3>
            <p><b>Price:</b> ${product?.price}</p>
            <p><b>Description:</b> {product?.desc}</p>
            <div>
                <button className='button-add' onClick={handleDelete}>Delete</button>
                <button className='button-add' onClick={()=> navigate(`/edit-details/${id}`)}>Edit</button>
                <button className='button-add' onClick={()=> navigate(`/`)}>Back To Home</button>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;