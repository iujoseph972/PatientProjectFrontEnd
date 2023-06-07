import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getToken } from "../services/auth";
import { List, ListItem, Typography, Grid, Paper } from '@mui/material';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);



  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = getToken();
        const response = await axios.get('https://localhost:7066/patients', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
  }, []);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    //console.log(patient);
  };

  
  return (
    <div>
      <Typography variant="h4" component="h1">List of Patients</Typography>
      <List>
        {patients.map((patient) => (
          <ListItem
            key={patient.id}
            onClick={() => handlePatientClick(patient)}
            button
          >
            <Typography variant="body1">
              {patient.firstName} {patient.lastName}
            </Typography>
          </ListItem>
        ))}
      </List>

      {selectedPatient && (
        <div style={{ margin: '16px' }}>
          <Typography variant="h5" component="h2">Patient Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="body1">First Name: {selectedPatient.firstName}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="body1">Last Name: {selectedPatient.lastName}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="body1">Gender: {selectedPatient.gender}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="body1">Date of Birth: {selectedPatient.dateOfBirth}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <Typography variant="body1">Address Line 1: {selectedPatient.addressLine1}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <Typography variant="body1">Address Line 2: {selectedPatient.addressLine2}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="body1">City: {selectedPatient.city}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="body1">State: {selectedPatient.state}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="body1">Postal Code: {selectedPatient.postalCode}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

export default PatientList;






