import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const ContactList = ({ contacts, deleteContact }) => {
  const navigate = useNavigate();

  const handleEdit = (email) => {
    navigate(`/edit-contact/${email}`);
  };

  const handleDelete = (email) => {
    console.log('Deleting contact:', email);

    deleteContact(email);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Contact List
      </Typography>
      <List>
        {contacts.map((contact, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${contact.firstName} ${contact.lastName || ''}`}
              secondary={contact.email}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleEdit(contact.email)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(contact.email)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ContactList;
