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
import NotFound from './routes/NotFound';

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
              {/* <Route path="*" element={<NotFound />} /> */}
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="*" element={<Navigate to='/login' />} /> */}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
