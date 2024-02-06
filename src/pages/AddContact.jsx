import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';
import {
  validateFirstName,
  validateLastName,
} from '../utils/formValidationUtils';

const ContactForm = ({ addContact }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
   if (!validateFirstName(firstName)) {
     alert('First Name must be between 3 and 25 characters');
     return;
   }
   if (!validateLastName(lastName)) {
     alert('Last Name must be empty or between 2 and 30 characters');
     return;
   }

    const newContact = {
      email,
      firstName,
      lastName,
    };

    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const updatedContacts = [...existingContacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    // Clear the form
    setEmail('');
    setFirstName('');
    setLastName('');
    addContact(newContact);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add Contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Add Contact
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined" onClick={() => navigate('/')}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
