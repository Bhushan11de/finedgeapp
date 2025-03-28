import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import { register } from '../store/actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Create Account</Typography>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      <Typography>
        Already have an account? <Link href="/login">Login</Link>
      </Typography>
    </Container>
  );
}
