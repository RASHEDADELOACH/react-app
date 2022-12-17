import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdatePet = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [refetch, setRefetch] = useState(0);
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/v1/pet/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setName(res.data.data.name);
          setType(res.data.data.type);
          setDesc(res.data.data.description);
          setSkill1(res.data.data.skills[0])
          setSkill2(res.data.data.skills[1])
          setSkill3(res.data.data.skills[2])
        }
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleEditProduct = async (e) => {
    e.preventDefault();
    if(name.length < 3 || desc.length < 3 || type.length < 3){
      alert("Name or Description or Type must be three characters or more.")
    }
    const data = {
        name: name,
        description: desc,
        type: type,
        adopted: false,
        skills: [skill1, skill2, skill3]
    };
    await axios
      .patch(`http://localhost:3005/api/v1/pet/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          e.target.reset();
          alert("data edited successfully");
          navigate('/')
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Container>
      <div className="text-start mt-5 mb-4">
        <div className="d-flex justify-content-between align-items-start">
          <h3>Pet Shelter</h3>
          <p>
            <Link to="/">Back to home</Link>
          </p>
        </div>
        <p>Details about: {name}</p>
        
        
      </div>
        <div>
          <form onSubmit={handleEditProduct} className="add-product-form">
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
                    value={name}
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
                    value={type}
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
                    value={desc}
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
                    value={skill1}
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
                    value={skill2}
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
                    value={skill3}
                  />
                </div>
              </Col>
            </Row>
            <div>
              <input className="button-add" type="submit" value="Edit Pet" />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UpdatePet;
