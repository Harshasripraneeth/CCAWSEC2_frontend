import React, { useState } from 'react';
import './Login.css';
import styled from 'styled-components';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'

const Login = ({ user, history, onSuccess}) => {

    const [details, setDetails] = useState({
        username: "",
        password: ""
    })

     const handleChange= (event)=> {
        setDetails({
            ...details,
            [event.target.name]: event.target.value
        })

    }


    const submitHandler = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("username", details.username)
        formData.append("password", details.password)
        postHandler(details)

    }

    const postHandler = async (formData) => {
        console.log("submitting...")
        const results = await axios.post("http://localhost:5000/verify", formData, {
            headers: {

            }
        })
        if (results.data.err == "") {
            onSuccess(results.data)
            history.push("/")
        }
        else console.log("incorrect")

    }




    return <div>
        {
            user.firstname === "" ? <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicUserName">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control name="username" type="text" value={details.username} placeholder="Enter Username" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" value={details.password} placeholder="Password" onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                :
                <h1> you are already logged in as {user.username}</h1>

        }

    </div>
}

export default Login;

/*
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 75vh;
  
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 6px;
  color: #ffffff;s
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
const Button = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
*/
