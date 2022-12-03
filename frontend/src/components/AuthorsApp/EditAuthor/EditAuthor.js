import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditAuthor = () => {
    const {id} = useParams() //useParams grabs the parameter from the main App.js 
    const navigate = useNavigate()
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    console.log(id)
    const [error, setError] = useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:3006/api/v1/authors/${id}`).then(res =>{
            if(res.status === 200){
                setName(res.data[0].name)
            setAge(res.data[0].age)
            setGender(res.data[0].gender)
            setError(false)
            }else{
                setError(true)
            }
        }).catch(err=> setError(true))
    },[id])
    const handleEdit = async(e) =>{
        e.preventDefault()
        
        const data = {
            name: name,
            age: age,
            gender: gender
        }
        if(name.length < 3){
            alert("must be at more then 3 characters")
        }
        else {
            await axios.patch(`http://localhost:3006/api/v1/authors/update/${id}`, data).then(res => {
                if(res.status === 200){
                    navigate('/')
                }
            })
        }
    }

    return (
        <div>
         {
            error ?
            <h1>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?<Link to='/add-author'> Click here to create an author.</Link></h1>
            :
            <>
               <h1>Edit Author</h1>
        <form onSubmit={handleEdit}>
            <p>
                <label>Name</label>
                <input type={'text'} onChange={(e)=>setName(e.target.value)} name="name" value={name} required/>
            </p>
            <p>
                <label>Age</label>
                <input type={'text'} onChange={(e)=>setAge(e.target.value)} name="age" value={age} required />
            </p>
            <p>
                <label>Gender</label>
                <input type={'text'} onChange={(e)=>setGender(e.target.value)} name="gender" value={gender} required/>
            </p>
            <p>
                
                <input type="submit" value={'Edit Author'} />
            </p>
        </form>
            </>
         }
    </div>
    );
};

export default EditAuthor;