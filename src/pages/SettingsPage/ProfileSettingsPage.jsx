import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changePassword } from "./../../../store/slices/userSlice"
import { theme } from "../../styled/theme"
import { HeadingSecondary, RegularText } from "./../../styled/Headings"
import { ButtonMain } from "./../../styled/Buttons"
import {
  SettingsInnerWrapper,
  PasswordChangeForm,
  Input,
} from "./profileSettingsPageStyled"
import useLocalStorage from "../../features/Hooks.js/useLocalStore"
import { Helmet } from "react-helmet"

export default function AccessSettingsPage() {
  const [isPasswordFormVisible, setIsPasswordFormVisible] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [localUser, setLocalUser] = useLocalStorage("user", null)

  const handleChangePassword = async () => {
    if (newPassword === confirmPassword) {
      try {
        if (localUser) {
          const userId = localUser.id
          await dispatch(
            changePassword({ userId, oldPassword, newPassword })
          ).unwrap()
          console.log("Password updated")
          setLocalUser({
            ...localUser,
            password: newPassword,
          })
          setIsPasswordFormVisible(false)
        } else {
          setError("User not found in local storage")
        }
      } catch (error) {
        setError(error.message || "Failed to update password")
      }
    } else {
      setError("Passwords do not match")
    }
  }

  const handleChangeAccount = () => {
    setLocalUser(null)
    navigate("/")
    window.location.reload()
  }

  return (
    <SettingsInnerWrapper>
      <Helmet>
        <title>Profile settings</title>
      </Helmet>
      <HeadingSecondary margin="0">Profile</HeadingSecondary>
      <RegularText>Here you can control the access of your account</RegularText>
      <div style={{ display: "flex", gap: "10px" }}>
        <ButtonMain
          fSize="0.7em"
          padding="15px 0px"
          bgColor={theme.violetPrimary}
          width="150px"
          onClick={() => setIsPasswordFormVisible(!isPasswordFormVisible)}
        >
          {isPasswordFormVisible ? "Cancel" : "Change Pass"}
        </ButtonMain>
        <ButtonMain
          fSize="0.7em"
          padding="15px 0px"
          bgColor={theme.violetPrimary}
          width="150px"
          onClick={handleChangeAccount}
        >
          Change Account
        </ButtonMain>
      </div>

      {isPasswordFormVisible && (
        <PasswordChangeForm>
          <HeadingSecondary>Change Password</HeadingSecondary>
          {error && <RegularText style={{ color: "red" }}>{error}</RegularText>}
          <Input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ButtonMain
            bgColor={theme.violetPrimary}
            onClick={handleChangePassword}
          >
            Submit
          </ButtonMain>
        </PasswordChangeForm>
      )}
    </SettingsInnerWrapper>
  )
}
