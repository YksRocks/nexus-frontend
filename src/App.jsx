import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Login from './routes/Login';
import Signup from './routes/SignUp';
import Challenges from './routes/Challenges';
import Announcements from './routes/Announcements';
import Leaderboard from './routes/Leaderboard';
import Profile from './routes/Profile';
import { fetchUserData } from './services/userServices';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData().then((data) => {
      if (data) {
        setUserData(data);
        setLoggedIn(true);
      } else {
        setUserData({});
        setLoggedIn(false);
      }
    }, []);
  }, []);

  console.log(userData.libId); // Place this line inside the useEffect or elsewhere as needed

  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          {loggedIn ? (
            <>
              <Route
                path="/"
                element={<Navigate to="/challenges" />}
              />
              <Route
                path="/challenges"
                element={
                  <Layout>
                    <Challenges />
                  </Layout>
                }
              />
              <Route
                path="/leaderboard"
                element={
                  <Layout>
                    <Leaderboard />
                  </Layout>
                }
              />
              <Route
                path="/announcement"
                element={
                  <Layout>
                    <Announcements />
                  </Layout>
                }
              />
              <Route
                path='/profile'
                element={
                  <Layout>
                    <Profile />
                  </Layout>
                }
              />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
