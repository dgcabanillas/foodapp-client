
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider  } from '@mui/material/styles';
import { theme } from './utils/theme';

import AppState from "src/context/app/app.state";
import AuthState from "src/context/auth/auth.state";

import AuthLayout from './components/layouts/AuthLayout';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Recover from "./pages/auth/Recover";
import Register from "./pages/auth/Register";
import Restaurants from './pages/restaurants';

function App() {
  return (
    <AppState>
    <AuthState>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="recover" element={<Recover />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthState>
    </AppState>
  );
}

export default App;
