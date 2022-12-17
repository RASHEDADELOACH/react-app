import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./PetDetails.css";
import { Container } from "react-bootstrap";
import {AiFillHome, AiFillLike} from 'react-icons/ai'
const PetDetails = () => {
  const [pet, setPet] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const [refetch, setRefetch] = useState(0);
  const [liked, setLiked] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/v1/pet/${id}`)
      .then((res) => setPet(res.data.data))
      .catch((err) => console.log(err));
  }, [id, refetch]);
  const handleLike = async () => {
    const data = {
      likes: pet.likes + 1,
    };
    await axios
      .patch(`http://localhost:3005/api/v1/pet/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          setRefetch(refetch + 1);
          setLiked(true)
        }
      })
      .catch((err) => console.log(err));
  };
  const handleAdopted = async () => {
    const data = {
      adopted: true,
    };
    await axios
      .patch(`http://localhost:3005/api/v1/pet/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          setRefetch(refetch + 1);
          navigate('/')
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(pet);
  return (
    <div>
        <Container>
        <div className="deatails-page">
      <div className="text-start mt-5 mb-3">
        <div className="d-flex justify-content-between align-items-start">
          <h3>Pet Shelter</h3>
          <p>
            <Link to="/">Back to home</Link>
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-start">
        <p>Details about: {pet?.name}</p>
          <p>
            <button className="button-adopt" onClick={handleAdopted}> <AiFillHome className="icon-color" />Adopt {pet?.name}</button>
          </p>
        </div>
        
      </div>
      <div className="deatails-page-div">
        <p>
          <b>Pet Name: </b> {pet?.name}
        </p>
        <p>
          <b>Pet Description: </b> {pet?.description}
        </p>
        <div className="d-flex justify-content-start align-items-start">
          <p>
            <b>Pet Skills: </b>{" "}
          </p>
          <p className="ms-5">
            {pet?.skills?.map((skill) => (
              <span>
                {skill} <br />
              </span>
            ))}
          </p>
        </div>
        <div className="d-flex justify-content-start align-items-center">
         {!liked &&  <button className="button-adopt" onClick={handleLike}><AiFillLike className="icon-color" /> Like {pet?.name}</button>}
          <p className="ms-3 mt-4">{pet?.likes} likes</p>
        </div>
      </div>
    </div>
        </Container>
    </div>
  );
};

export default PetDetails;
