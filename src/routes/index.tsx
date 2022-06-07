import React from "react";
import { Route, Switch } from "react-router-dom";
import { Users } from "../pages/Admin/Users";
import { NewUser } from "../pages/Admin/Users/New";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Themes } from "../pages/Admin/Themes";
import { NewTheme } from "../pages/Admin/Themes/New";
import { Hours } from "../pages/Admin/Hours";
import { NewHour } from "../pages/Admin/Hours/New";
import { EditTheme } from "../pages/Admin/Themes/Edit";
import { EditHour } from "../pages/Admin/Hours/Edit";
import { TeacherThemes } from "../pages/Teacher/Themes";
import { TeacherHours } from "../pages/Teacher/Hours";

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <PrivateRoute path="/usuarios" exact component={Users} />
    <PrivateRoute path="/" exact component={Users} />
    <PrivateRoute path="/usuarios/novo" exact component={NewUser} />

    <PrivateRoute path="/materias" exact component={Themes} />
    <PrivateRoute path="/materias/novo" exact component={NewTheme} />
    <PrivateRoute path="/materias/:id" exact component={EditTheme} />

    <PrivateRoute path="/horarios" exact component={Hours} />
    <PrivateRoute path="/horarios/novo" exact component={NewHour} />
    <PrivateRoute path="/horarios/:id" exact component={EditHour} />

    <PrivateRoute path="/professor/materias" exact component={TeacherThemes} />
    <PrivateRoute path="/professor/horarios" exact component={TeacherHours} />
  </Switch>
);
