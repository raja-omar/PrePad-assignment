import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import {
  validateFirstName,
  validateLastName,
} from '../utils/formValidationUtils';

const EditContact = ({ contacts, editContact }) => {
  const { email } = useParams();
  const navigate = useNavigate();

  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');

  useEffect(() => {
    const contactToEdit = contacts.find((contact) => contact.email === email);
    if (contactToEdit) {
      setEditedFirstName(contactToEdit.firstName || '');
      setEditedLastName(contactToEdit.lastName || '');
    }
  }, [contacts, email]);

  const handleSave = () => {
    if (!validateFirstName(editedFirstName)) {
      alert('First Name must be between 3 and 25 characters');
      return;
    }
    if (!validateLastName(editedLastName)) {
      alert('Last Name must be empty or between 2 and 30 characters');
      return;
    }

    const updatedContact = {
      firstName: editedFirstName,
      lastName: editedLastName,
    };
    editContact(email, updatedContact);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Edit Contact
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="First Name"
            value={editedFirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Last Name"
            value={editedLastName}
            onChange={(e) => setEditedLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" onClick={() => navigate('/')}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditContact;
