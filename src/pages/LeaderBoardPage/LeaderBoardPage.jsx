import { HeadingSecondary, RegularText } from "../../styled/Headings"
import LeaderBoardTile from "./LeaderBoardTile"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../../store/slices/userSlice"
import { useEffect } from "react"
import Loader from "../../ui/Loader"
import {
  LeaderBoardInnerWrap,
  LeaderBoardHeadingWrap,
  LeaderBoard,
} from "./LeaderBoardStyled"

export default function LeaderBoardPage() {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Loader />
      </div>
    )
  if (error) return <p style={{ color: "red" }}>{error}</p>

  const sortedUsers = [...users].sort((a, b) => b.watchTime - a.watchTime)

  return (
    <LeaderBoard>
      <LeaderBoardHeadingWrap>
        <HeadingSecondary>Leader board</HeadingSecondary>
        <RegularText>Top by online</RegularText>
      </LeaderBoardHeadingWrap>
      <LeaderBoardInnerWrap>
        {sortedUsers.map((element, index) => {
          return (
            <LeaderBoardTile key={element.id} data={element} index={index} />
          )
        })}
      </LeaderBoardInnerWrap>
    </LeaderBoard>
  )
}
