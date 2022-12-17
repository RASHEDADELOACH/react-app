import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Table, Container } from "react-bootstrap";
const Home = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/api/v1/pet")
      .then((res) => setPets(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <div className="text-start mt-5 mb-4">
        <div className="d-flex justify-content-between align-items-start">
        <h3>Pet Shelter</h3>
        <p><Link to='/add-pet'>Add a pet to the shelter</Link></p>
        </div>
        <p>These Pets are looking for good home</p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td><Link to={`pet-details/${pet._id}`}>Details</Link> | <Link to={`pet-update/${pet._id}`}>Edit</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <div></div>
    </div>
  );
};

export default Home;
