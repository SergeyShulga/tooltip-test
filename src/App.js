import React, { useState } from 'react';
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Container = styled.div`
padding: 20px;
height: 100vh;
background-color: #328e8e;
box-sizing: border-box;
`;

const Title = styled.h1`
font-size: 32px;
margin: 0 0 40px;
text-align: center;
`;

const Form = styled.form`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
top: 40%;
left: 50%;
width: 450px;
height: 450px;
padding: 30px;
transform: translate(-50%, -50%);  
background-color: #fff;
border-radius: 8px;
box-shadow: 0 0 30px 0 rgba(0, 0, 0, .2);
box-sizing: border-box;
`;

const FieldsContainer = styled.div`
width: 70%;
margin-bottom: 60px;
`;

const ButtonsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 70%;

Button:first-child {
margin-bottom: 10px;
}
`;

const App = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Container>
            <Form>
                <FieldsContainer>
                    <Title>Sign In</Title>
                    <TextField
                        type="email"
                        id="email"
                        label="Login/Email"
                        value={values.email}
                        onChange={handleChange('email')}
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        type="password"
                        id="password"
                        label="Password"
                        value={values.password}
                        onChange={handleChange('password')}
                        margin="normal"
                        fullWidth
                    />
                </FieldsContainer>

                <ButtonsContainer>
                    <Button color="primary" variant="contained" fullWidth>Sign in</Button>
                    <Button color="secondary" variant="text" size="small">Help</Button>
                </ButtonsContainer>
            </Form>
        </Container>
    );
};

export default App;
