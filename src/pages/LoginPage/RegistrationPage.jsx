import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../../store/slices/userSlice"
import {
  LoginContainer,
  BackgroundContainer,
  StyledBackgroundImg,
  Form,
  FormsContainer,
  Input,
  LoginFormContainer,
} from "./LoginPageStyled"
import Logo from "../../components/Logo"
import { ButtonMain } from "../../styled/Buttons"
import { theme } from "../../styled/theme"
import useLocalStorage from "./../../features/Hooks.js/useLocalStore"
import Loader from "../../ui/Loader"

const backgroundUrl =
  "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/background.jpg"

export default function RegistrationPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate() // Add useNavigate
  const { loading, error, user } = useSelector((state) => state.user)

  const [formData, setFormData] = useState({
    login: "",
    password: "",
    nickName: "",
    description: "",
    telegramNickName: "",
  })

  const [, setUser] = useLocalStorage("user", null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(formData))
  }

  useEffect(() => {
    if (user) {
      setUser(user)
      navigate("/profile")
    }
  }, [user, navigate, setUser])

  return (
    <LoginContainer>
      <BackgroundContainer>
        <StyledBackgroundImg src={backgroundUrl} alt="Background" />
      </BackgroundContainer>
      <LoginFormContainer>
        <Logo height="90" />
        <Form onSubmit={handleSubmit}>
          <FormsContainer>
            <Input
              type="text"
              placeholder="Login"
              name="login"
              onChange={handleChange}
              value={formData.login}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <Input
              type="text"
              placeholder="Nickname"
              name="nickName"
              onChange={handleChange}
              value={formData.nickName}
              required
            />
            <Input
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
            <Input
              type="text"
              placeholder="Telegram Nickname"
              name="telegramNickName"
              onChange={handleChange}
              value={formData.telegramNickName}
            />
          </FormsContainer>
          <ButtonMain
            width="100%"
            bgColor={theme.violetPrimary}
            type="submit"
            disabled={loading}
          >
            {loading ? <Loader /> : "Create account"}
          </ButtonMain>
          <NavLink to="/login" style={{ width: "100%" }}>
            <ButtonMain
              width="100%"
              bgColor={theme.greyPrimary}
              type="button"
              onClick={() => {}}
              disabled={loading}
            >
              Login
            </ButtonMain>
          </NavLink>
        </Form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && <p style={{ color: "green" }}>Registration successful!</p>}
      </LoginFormContainer>
    </LoginContainer>
  )
}
