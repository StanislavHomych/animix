import { useState, useEffect } from "react"
import { HeadingPrimary, RegularText } from "../../styled/Headings"
import {
  BannerWrap,
  Avatar,
  UserInfoWrap,
  BannerWrapInner,
} from "./ProfilePageStyled"
import useLocalStorage from "../../features/Hooks.js/useLocalStore"

export default function ProfilePageBanner() {
  const [localUser, setLocalUser] = useLocalStorage("user", null) // eslint-disable-line no-unused-vars

  const [avatarSrc, setAvatarSrc] = useState()
  const [backgroundImg, setBackgroundImg] = useState()

  const defaultBackground =
    "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/background.jpg"

  const defaultAvatar =
    "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/defaultavatar.jpg"

  useEffect(() => {
    setAvatarSrc(localUser.avatar)
    setBackgroundImg(localUser.profileBg)
  }, [localUser])

  // Parse the registrationDay if it exists, otherwise use current date
  const registrationDay = localUser?.registrationDay
    ? new Date(localUser.registrationDay)
    : new Date()

  return (
    <BannerWrap backgroundImg={backgroundImg || defaultBackground}>
      <BannerWrapInner>
        <Avatar src={avatarSrc || defaultAvatar} alt="avatar" />
        <UserInfoWrap>
          <HeadingPrimary
            fSizeLg="2.5em"
            fSizeMd="1.8em"
            fSizeSm="1.4em"
            shadow={"true"}
          >
            {localUser?.nickname || "User Name"}
          </HeadingPrimary>
          <RegularText fSize="1.1em" fSizeMd="0.9em">
            {localUser?.description || "No description available"}
          </RegularText>
          <RegularText fw="400" color="#fff">
            {localUser?.registrationDay
              ? `Registration day: ${registrationDay.getDate()}.0${
                  registrationDay.getMonth() + 1
                }.${registrationDay.getFullYear()}`
              : "Registration day not available"}
          </RegularText>
        </UserInfoWrap>
      </BannerWrapInner>
    </BannerWrap>
  )
}
