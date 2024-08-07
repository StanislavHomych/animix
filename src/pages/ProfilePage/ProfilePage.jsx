import RecentlyWatched from "../WelcomePage/recentlyWatched/RecentlyWatched"
import ProfilePageBanner from "./ProfilePageBanner"
import Stats from "./Stats"
import { ProfilePageInnerBanner } from "./ProfilePageStyled"

export default function ProfilePagePage() {
  return (
    <div>
      <ProfilePageBanner />
      <ProfilePageInnerBanner>
        <Stats />
        <RecentlyWatched />
      </ProfilePageInnerBanner>
    </div>
  )
}
