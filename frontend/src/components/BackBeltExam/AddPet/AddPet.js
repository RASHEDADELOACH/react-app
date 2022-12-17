import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddPet = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [refetch, setRefetch] = useState(0);
  const [skill1, setSkill1] = useState('')
  const [skill2, setSkill2] = useState('')
  const [skill3, setSkill3] = useState('')
  const navigate = useNavigate()
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if(name.length < 3 || desc.length < 3 || type.length < 3){
      alert("Name or Description or Type must be three characters or more.")
    }
    const data = {
      name: name,
      description: desc,
      type: type,
      adopted: false,
      skills: [skill1, skill2, skill3],
      likes: 0,
    };
    await axios
      .post("http://localhost:3005/api/v1/pet", data)
      .then((res) => {
        if (res.status === 200) {
          e.target.reset();
          alert("data added successfully");
          setRefetch(refetch + 1);
            navigate('/')
        }
      })
      .catch((err) => {
        alert("Name should be unique")
      });
  };
  return (
    <div>
        <Container>
        <div className="text-start mt-5 mb-4">
        <h3>Pet Shelter</h3>
        <p>Know a pet needing a home?</p>
        </div>
        <div>
        <form onSubmit={handleAddProduct} className="add-product-form">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="form-input-div">
                <p>Pet Name</p>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Pet Name"
                  required
                />
              </div>
              <div className="form-input-div">
                <p>Pet Type</p>
                <input
                  type="text"
                  name="type"
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Enter Pet Type"
                  required
                />
              </div>
              <div className="form-input-div">
                <p>Pet Description</p>
                <input
                  type="text"
                  name="desc"
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Enter Pet Description"
                  required
                />
              </div>
              
            </Col>
            <Col xs={12} md={6} lg={6}>
                <h4 className="text-start">Skills</h4>
              <div className="form-input-div">
                <p>Skill 1</p>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setSkill1(e.target.value)}
                  placeholder="Enter  Skill1"
                  required
                />
              </div>
              <div className="form-input-div">
                <p>Skill 2</p>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setSkill2(e.target.value)}
                  placeholder="Enter  Skill2"
                  required
                />
              </div>
              <div className="form-input-div">
                <p>Skill 3</p>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setSkill3(e.target.value)}
                  placeholder="Enter Skill3"
                  required
                />
              </div>
              
            </Col>
          </Row>
          <div>
            <input className="button-add" type="submit" value="Add Pet" />
          </div>
        </form>
      </div>
        </Container>
      
    </div>
  );
};

export default AddPet;
