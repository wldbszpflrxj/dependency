import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import HttpClient from "./http";
import LocalTokenRepository from "./repository/LocalTokenRepositry";
import SessionTokenRepository from "./repository/SessionTokenRepository";
import AuthService from "./service/AuthService";
import TodoService from "./service/TodoService";
import LocalTodoService from "./service/TodoService.local";
import LocalAuthService from "./service/AuthService.local";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const sessionTokenRepository = new SessionTokenRepository();
const localTokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(
  process.env.REACT_APP_BASE_URL,
  localTokenRepository
);

const authService = new AuthService(httpClient, localTokenRepository);
const localAuthService = new LocalAuthService(localTokenRepository);
const todoService = new TodoService(httpClient);
const localTodoService = new LocalTodoService();

root.render(
  <AuthProvider authService={localAuthService}>
    <TodoProvider todoService={localTodoService}>
      <App />
    </TodoProvider>
  </AuthProvider>
);
