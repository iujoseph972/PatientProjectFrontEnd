import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/patients" element={<PatientList />} />
        {/* <Route path="/patients/:id" element={<PatientDetail />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
