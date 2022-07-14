import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE, USER_PROFILE_ROUTE } from './routing';
import Home from './pages/Home';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import UserActivities from './pages/UserActivities';
import {Container,Box,CssBaseline,Typography,Button} from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from "./components/ThemeProvider";
import { Combobox } from "./components/Combobox";

type lineInfo = {
  name: string,
  userLineID: string,
  pictureUrl: string
}


function App(props:lineInfo) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<lineInfo>({name: 'Satya',userLineID:'Uf273a98b44c03789e5f37d43dab4e5e4',pictureUrl:'https://profile.line-scdn.net/0hr6p5CezvLRldTDv8K4hTZi0cLnN-PXQLdn5kL2occChndTlKeCIyLzhOcC5iKG0fdiIxd2xEcy1RX1p_QxrRLVp8cy1me2xJdS1n-g'});
  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        const getProfile = liff.getProfile();
        getProfile.then((response) => {
          setUser({name: response.displayName,userLineID:response.userId,pictureUrl:response.pictureUrl!})

      });
        setMessage("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  const onRegister = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": user.userLineID,
        "name": "Sena"
      })
  };
  fetch('https://eae4-2405-9800-ba12-b9a9-1dc1-89a6-936-2c1f.ap.ngrok.io/employees', requestOptions)
      .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();
          alert('Register is a success')
          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

      })
      .catch(error => {
        alert(error)
          console.error('There was an error!', error);
      });
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
      <CssBaseline />
      <Header title={user.name} pictureUrl={user.pictureUrl} userLineID={user.userLineID} />
      <Container sx={{ my: 4 }}>
        <Typography sx={{ mb: 2 }} variant="body2">
        <Button variant="contained" onClick={onRegister}>Register</Button>

          {/* Material UI Autocomplete playground 😁 See{" "}
          <b>
            <code>./components/Combobox.tsx</code>
          </b> */}
        </Typography>
        <Combobox />
      </Container>
    {/* <Routes>
      <Route path={ROUTE.HOME} element={<Home />}/>
      <Route path={ROUTE.USERS} element={<Users />} />
      <Route path={ROUTE.USER_PROFILE} element={<UserProfile />}>
        <Route
          path={USER_PROFILE_ROUTE.USER_ACTIVITY}
          element={<UserActivities />}
        />
      </Route>
    </Routes> */}
      </ThemeProvider>

  </BrowserRouter>
  );
}

export default App;
