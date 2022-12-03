import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {
    const navigate = useNavigate()
    const handleAddAuthor = async(e) =>{
        // Async - allows you to wait for information/response from server before submitting information
        e.preventDefault()
        // Stops page from loading on submit
        const name = e.target.name.value
        const age = e.target.age.value
        const gender = e.target.gender.value
        // Below takes the target values above and matches the key value pairs
        const data = {
            name: name,
            age: age,
            gender: gender
        }
        if(name.length < 3){
            alert("must be at more then 3 characters")
        }
        else {
            await axios.post('http://localhost:3006/api/v1/authors', data).then(res => {
                if(res.status === 200){
                    navigate('/')
                }
            })
        }
        // Post the object data above to the matching values within the api.
    }


    return (
        <div>
        <form onSubmit={handleAddAuthor}>
            <p>
                <label>Name</label>
                <input type={'text'} name="name" required />
            </p>
            <p>
                <label>Age</label>
                <input type={'text'} name="age" required />
            </p>
            <p>
                <label>Gender</label>
                <input type={'text'} name="gender" required/>
            </p>
            <p>
                
                <input type="submit" value={'Add Author'} />
            </p>
        </form>
    </div>
    );
};

export default AddAuthor;