import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./pages/dashboard";


export default function APP() {
return (
<>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/dashboard" element={<Dashboard />} />
</Routes>
<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop
closeOnClick
pauseOnHover
draggable
/>
</>
);
}