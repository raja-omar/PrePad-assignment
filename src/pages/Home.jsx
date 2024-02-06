import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import ContactList from '../components/ContactList';

const Home = ({ contacts, deleteContact }) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Contact Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/add-contact"
        style={{ marginBottom: '20px' }}
      >
        Add Contact
      </Button>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </Container>
  );
};

export default Home;
