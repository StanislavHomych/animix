import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import WelcomePage from "./pages/WelcomePage/WelcomePage"
import LeaderBoardPage from "./pages/LeaderBoardPage/LeaderBoardPage"
import MyCollection from "./pages/MyCollectionPage/MyCollectionPage"
import Header from "./pages/WelcomePage/header/Header"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import Footer from "./pages/WelcomePage/footer/Footer"
import SettingsPage from "./pages/SettingsPage/SettingsPage"
import AccesSettingsPage from "./pages/SettingsPage/AccesSettingsPage"
import ProfileSettingsPage from "./pages/SettingsPage/ProfileSettingsPage"
import AnimeDetail from "./components/AnimeDetail"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegistrationPage from "./pages/LoginPage/RegistrationPage"
import RubrickFull from "./pages/WelcomePage/rubrick/RubrickFull"
import Episode from "./pages/EpisodePage.jsx/Episode"
import MyCollectionRubrick from "./pages/MyCollectionPage/MyCollectionRubrick"

function Content() {
  const location = useLocation()
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/registration"

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/myCollection" element={<MyCollection />}>
          <Route index element={<Navigate to="watched" />} />
          <Route
            path="watched"
            element={
              <MyCollectionRubrick
                collectionElement="watched"
                title="Watched"
              />
            }
          />

          <Route
            path="postponed"
            element={
              <MyCollectionRubrick
                collectionElement="postponed"
                title="Postponed"
              />
            }
          />
          <Route
            path="inplans"
            element={
              <MyCollectionRubrick
                collectionElement="inPlans"
                title="In plans"
              />
            }
          />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />}>
          <Route index element={<Navigate to="acces" />} />
          <Route path="acces" element={<AccesSettingsPage />} />
          <Route path="profile" element={<ProfileSettingsPage />} />
        </Route>
        <Route path="/anime/:animeTitle" element={<AnimeDetail />}></Route>
        <Route path="/rubrick/:rubrick" element={<RubrickFull />} />
        <Route
          path="/anime/:animeTitle/:season/:episode"
          element={<Episode />}
        ></Route>
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default Content
