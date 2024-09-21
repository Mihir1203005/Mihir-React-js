import { Route, Routes } from "react-router-dom";
import Login from "./Login"
import Dashboard from "./Dashboard";
import Home from "./Home";
import PrivateRoute from "../Components/PrivateRoute";
import SingleProductPage from "./SingleProductPage";

function AllRoutes() {
  return (
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={
           <PrivateRoute>
          <Dashboard />
           </PrivateRoute>
          }></Route>
          <Route path="/products/:id" element={
            <SingleProductPage />
            }></Route>
      </Routes> 
  
  );
}

export default AllRoutes;
