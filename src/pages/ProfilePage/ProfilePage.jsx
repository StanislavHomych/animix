import RecentlyWatched from "../WelcomePage/recentlyWatched/RecentlyWatched"
import ProfilePageBanner from "./ProfilePageBanner"
import Stats from "./Stats"
import { ProfilePageInnerBanner } from "./ProfilePageStyled"
import { Helmet } from "react-helmet"

export default function ProfilePagePage() {
  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <ProfilePageBanner />
      <ProfilePageInnerBanner>
        <Stats />
        <RecentlyWatched />
      </ProfilePageInnerBanner>
    </div>
  )
}
