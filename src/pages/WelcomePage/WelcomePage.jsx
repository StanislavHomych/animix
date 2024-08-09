import BannerMain from "./bannerMain/BannerMain"
import RecentlyWatched from "./recentlyWatched/RecentlyWatched"
import Rubrick from "./rubrick/Rubrick"
import useLocalStorage from "../../features/Hooks.js/useLocalStore"
import { Helmet } from "react-helmet"

export default function WelcomePage() {
  const [localUser] = useLocalStorage("user", null) // eslint-disable-line no-unused-vars

  return (
    <div>
      <Helmet>
        <title>Animix - home</title>
      </Helmet>
      <BannerMain />
      {localUser &&
        localUser.recentlyWatched &&
        localUser.recentlyWatched.length > 0 && <RecentlyWatched />}
      <Rubrick rubrickName="Classic" rubrickId={1} rubrickRouteName="classic" />
      <Rubrick rubrickName="Novelty" rubrickId={2} rubrickRouteName="novelty" />
      <Rubrick rubrickName="Movie" rubrickId={3} rubrickRouteName="movie" />
      <Rubrick
        rubrickName="Editors's choice"
        rubrickId={4}
        rubrickRouteName="editorsChoise"
      />
    </div>
  )
}
