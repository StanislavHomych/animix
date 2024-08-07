import { string } from "prop-types"
import { RegularText } from "../styled/Headings"

export default function Error({ message }) {
  return (
    <div>
      <RegularText color="red" fw="400">
        {message}
      </RegularText>
    </div>
  )
}

Error.propTypes = {
  message: string,
}
