import { ButtonText } from "../styles/generalButton"

const GeneralButton = ({ style, title }) => {
  return (

    <div style={style}>
      <ButtonText>
        {title}
      </ButtonText>

    </div>
  )
}

export default GeneralButton
