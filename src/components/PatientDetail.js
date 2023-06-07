import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { getToken } from "../services/auth";

function PatientDetail() {
  const [patient, setPatient] = useState({});
  const location = useLocation();
  const patientId = location.state.patientId;

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const token = getToken();
        const response = await axios.get(`https://localhost:7066/patients/${patientId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };

    fetchPatient();
  }, [patientId]);

  return (
    <div>
      <h1>Details for {patient.firstName} {patient.lastName}</h1>
      <p>Patient ID: {patient.patientId}</p>
      <p>Gender: {patient.gender}</p>
      <p>Date of Birth: {patient.dateOfBirth}</p>
      <p>Address: {patient.addressLine1}, {patient.addressLine2}, {patient.city}, {patient.state}, {patient.postalCode}</p>
      {/* Display other patient information as needed */}
    </div>
  );
}

export default PatientDetail;
