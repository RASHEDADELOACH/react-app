import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3006/api/v1/products/${id}`).then(res => {
            if (res.status === 200) {
                setName(res.data[0].name)
                setPrice(res.data[0].price)
                setDesc(res.data[0].desc)
            }
        }).catch(err => console.log(err))
    }, [id])
    const handleEditProduct = async (e) => {
        e.preventDefault()
        const data = {
            name: name,
            desc: desc,
            price: price
        }
        await axios.patch(`http://localhost:3006/api/v1/products/update/${id}`, data).then(res => {
            if (res.status === 200) {
                e.target.reset()
                alert("data edited successfully")
            }
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <form onSubmit={handleEditProduct} className='add-product-form'>
                    <div className='form-input-div'>
                        <p>Name</p>
                        <input type="text" name='name' onChange={e => setName(e.target.value)} value={name} />
                    </div>
                    <div className='form-input-div'>
                        <p>Description</p>
                        <input type="text" name='desc' onChange={e => setDesc(e.target.value)} value={desc} />
                    </div>
                    <div className='form-input-div'>
                        <p>Price</p>
                        <input type="text" name='price' onChange={e => setPrice(e.target.value)} value={price} />
                    </div>
                    <div>
                        <input className='button-add' type="submit" value="Edit Product" />
                        <button className='button-add' onClick={()=> navigate(`/`)}>Back To Home</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default UpdateProduct;