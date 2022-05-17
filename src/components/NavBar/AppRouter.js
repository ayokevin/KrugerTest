import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import React from 'react'
import { NavBar } from "./NavBar";
import { Login } from "../Login/Login";
import { UserManager } from "../UserManager/UserManager";
import { Employee } from "../Employee/Employee";

export const AppRouter = () => {

    return (
        <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route exact={true} path='/' element={<Login></Login>} ></Route>
                    <Route exact={true} path='/userManager' element={<UserManager></UserManager>} ></Route>
                    <Route exact={true} path='/employeeForm' element={<Employee></Employee>} ></Route>
                </Routes>
        </Router>
    )
}