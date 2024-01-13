import { Routes, Route } from "react-router-dom/dist";

import { Home } from "./_root/pages";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import LoginForm from "./_auth/forms/LoginForm";
import RegisterForm from "./_auth/forms/RegisterForm";

import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
