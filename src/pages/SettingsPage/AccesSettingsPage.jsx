import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { updateUserProfile } from "../../../store/slices/userSlice"
import useLocalStorage from "../../features/Hooks.js/useLocalStore"
import { ButtonMain } from "../../styled/Buttons"
import { theme } from "../../styled/theme"
import { RegularText } from "../../styled/Headings"
import {
  Container,
  Form,
  FileInputs,
  FileInput,
  TextInputs,
} from "./accesSettingsPageStyles"
import Loader from "../../ui/Loader"
import { Helmet } from "react-helmet"

const ProfileSettingsPage = () => {
  const dispatch = useDispatch()
  const [profilePic, setProfilePic] = useState(null)
  const [user, setUser] = useLocalStorage("user", null)
  const [profileBg, setProfileBg] = useState(null)
  const [nickname, setNickname] = useState(user ? user.nickname : "")
  const [description, setDescription] = useState(user ? user.description : "")
  const [telegram, setTelegram] = useState(user ? user.telegramNickName : "")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (user) {
      setNickname(user.nickname)
      setDescription(user.description)
      setTelegram(user.telegramNickName)
    }
  }, [user])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const maxSize = 5 * 1024 * 1024 // 5MB
      const allowedTypes = ["image/jpeg", "image/png"]

      if (file.size > maxSize) {
        setError("The file exceeds the maximum size of 5MB")
        return
      }

      if (!allowedTypes.includes(file.type)) {
        setError("Unsupported file format")
        return
      }

      if (e.target.name === "profilePic") {
        setProfilePic(file)
      } else if (e.target.name === "profileBg") {
        setProfileBg(file)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!nickname) {
      setError("Nickname is required")
      return
    }

    const formData = new FormData()
    formData.append("userId", user.id)
    formData.append("nickname", nickname)
    formData.append("description", description)
    formData.append("telegram", telegram)

    if (profilePic) {
      formData.append("profilePic", profilePic)
    }

    if (profileBg) {
      formData.append("profileBg", profileBg)
    }

    setLoading(true)

    try {
      await dispatch(updateUserProfile(formData)).unwrap()

      setUser((prevUser) => ({
        ...prevUser,
        nickname,
        description,
        telegramNickName: telegram,
        avatar: profilePic
          ? `https://usersinfo-anime-web.s3.eu-north-1.amazonaws.com/profilePics/${user.id}/${profilePic.name}`
          : prevUser.avatar,
        profileBg: profileBg
          ? `https://usersinfo-anime-web.s3.eu-north-1.amazonaws.com/profileBgs/${user.id}/${profileBg.name}`
          : prevUser.profileBg,
      }))

      setSuccessMessage("Saved successfully")
      setError("")
    } catch (err) {
      console.log(err.message)
      setError(err.message || "Can't update profile")
      setSuccessMessage("")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Helmet>
        <title>Acces Settings</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <FileInputs>
          <label>
            <RegularText margin="0 0 5px 0">Profile Picture:</RegularText>
            <FileInput>
              <input
                type="file"
                name="profilePic"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
              />
              <span>{profilePic ? profilePic.name : "Select a file"}</span>
            </FileInput>
          </label>
          <label>
            <RegularText margin="0 0 5px 0">Profile Background:</RegularText>
            <FileInput>
              <input
                type="file"
                name="profileBg"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
              />
              <span>{profileBg ? profileBg.name : "Select a file"}</span>
            </FileInput>
          </label>
        </FileInputs>
        <TextInputs>
          <label>
            <RegularText margin="0 0 5px 0">Nickname:</RegularText>
            <input
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>
          <label>
            <RegularText margin="0 0 5px 0">Description:</RegularText>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <RegularText margin="0 0 5px 0">Your Telegram:</RegularText>
            <input
              type="text"
              placeholder="Your Telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
          </label>
        </TextInputs>
        <ButtonMain bgColor={theme.violetPrimary} type="submit">
          {loading ? <Loader /> : "Save"}
        </ButtonMain>
        {error && !successMessage && (
          <RegularText margin="10px 0px 0px 0px" color={theme.errorRed}>
            {error}
          </RegularText>
        )}
        {!error && successMessage && (
          <RegularText margin="10px 0px 0px 0px" color={theme.successGreen}>
            {successMessage}
          </RegularText>
        )}
      </Form>
    </Container>
  )
}

export default ProfileSettingsPage
