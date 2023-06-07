import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { login } from '../services/auth';
import { getPatients } from '../services/patientApi';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;

      // Make a login request to my backend
      const success = await login(email, password);

      if (success) {
        // If login is successful, make a request to get the list of patients
        const patients = await getPatients();

        // Display the list of patients or perform any other action with the data
       // console.log(patients);

        // Redirect to the patient list page
        navigate('/patients');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Box mt={4} maxWidth={300} margin="0 auto" p={2} border="1px solid primary.main" borderRadius={4} bgcolor="background.default">
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field as={TextField} label="Email" name="email" type="email" fullWidth margin="normal" />
          <ErrorMessage name="email" component={Typography} color="error" variant="body2" align="center" />
          <Field as={TextField} label="Password" name="password" type="password" fullWidth margin="normal" />
          <ErrorMessage name="password" component={Typography} color="error" variant="body2" align="center" />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" mt={2}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Box>
  );
}

export default LoginForm;
