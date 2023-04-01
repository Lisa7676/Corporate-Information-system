import {
    Routes,
    Route,
  } from "react-router-dom";
  import LoginPage from '../pages/Login';
  import TaskPage from '../pages/Task';
  import RegisterUser from '../pages/RegisterUser';
  import RegisterEmployer from '../pages/RegisterEmployer';
  
  const Router = () => (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<TaskPage />} />
      <Route path="/registerUser" element={<RegisterUser />} />
      <Route path="/registerEmployer" element={<RegisterEmployer />} />
    </Routes>
  );
  
  export default Router;