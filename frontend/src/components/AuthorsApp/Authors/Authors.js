import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Authors.css'
import { Link, useNavigate } from 'react-router-dom';

const Authors = () => {
    const [authors, setAuthors] = useState([])
    const navigate = useNavigate()
    // it starts off as authors, but the setAuthors updates/adds information to authors
    // Line below takes the par "res" and puts the information inside of setAuthors which updates into authors

    useEffect(()=>{
        // use to grab information from API
       axios.get('http://localhost:3006/api/v1/authors'). then(res =>{ 
        const sortedData = res.data.sort((a,b)=> a.name.localeCompare(b.name))
       setAuthors(sortedData)
    })
        // line creates promise: .get attemnpts to grab the request, .then is the next step if the .get is fulfilled
    }, [authors])
    // [authors] above is asked to constantly get the data, then it will be sent to the setAuthors which will trigger the page to display the information.
    console.log(authors)
    const handleDelete = async(id) =>{
       await axios.delete(`http://localhost:3006/api/v1/authors/${id}`).then(res => console.log(res))
    //    Added the Async and used axios to send request. Also, the ${} allows us to insert id that was grabbed from the delete button when clicked.
    }

    // const handleEdit = async(id) =>{
    //     await axios.edit(`http://localhost:3006/api/v1/authors/${id}`).then(res => console.log(res))
    //  //    Added the Async and used axios to send request. Also, the ${} allows us to insert id that was grabbed from the delete button when clicked.
    //  }
    return (
        <div>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors?.map(author => <tr>
                            {/* use Map to display each section from section into each table */}
                            <td>{author._id}</td>
                            <td>{author.name}</td>
                            <td>{author.age}</td>
                            <td>{author.gender}</td>
                            <td><button onClick={()=>{handleDelete(author._id)}}>Delete</button></td>
                            <td><button onClick={()=>{navigate(`/edit-author/${author._id}`)}}>Edit</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
            <div><Link to='/add-author'>Add Author</Link></div>
        </div>
    );
};

export default Authors;