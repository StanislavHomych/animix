import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "./../../../store/slices/LogInSlice"
import { ButtonMain } from "../../styled/Buttons"
import { theme } from "../../styled/theme"
import { useNavigate } from "react-router-dom"
import {
  BackgroundContainer,
  StyledBackgroundImg,
  LoginContainer,
  LoginFormContainer,
  Form,
  Input,
  FormsContainer,
} from "./LoginPageStyled"
import Logo from "../../components/Logo"
import Loader from "../../ui/Loader"
import Error from "../../ui/Error"
import { Helmet } from "react-helmet"

const backgroundUrl =
  "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/background.jpg"

export default function LoginPage() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, user } = useSelector((state) => state.login)

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  useEffect(() => {
    console.log(user)
    if (user) {
      navigate("/profile")
    }
  }, [user, navigate])

  return (
    <LoginContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <BackgroundContainer>
        <StyledBackgroundImg src={backgroundUrl} alt="background" />
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
              onChange={handleChange}
              name="password"
              value={formData.password}
              required
            />
          </FormsContainer>
          <ButtonMain
            bgColor={theme.violetPrimary}
            type="submit"
            width="100%"
            disabled={loading}
          >
            {loading ? <Loader /> : "Login"}
          </ButtonMain>
          <NavLink to="/registration" style={{ width: "100%" }}>
            <ButtonMain width="100%" bgColor={theme.greyPrimary}>
              Register
            </ButtonMain>
          </NavLink>
        </Form>

        {error && (
          <div style={{ margin: "10px 0 0 25px" }}>
            {" "}
            <Error message={error} />{" "}
          </div>
        )}
      </LoginFormContainer>
    </LoginContainer>
  )
}
