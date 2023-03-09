import { borderRadius, padding } from "@mui/system"

import {
  AiOutlineCheckCircle as IconSuccess,
  AiOutlineInfoCircle as IconInfo
} from 'react-icons/ai'

import { BiError as IconError } from 'react-icons/bi'

import { IoWarningOutline as IconWarning } from 'react-icons/io'

const typeIcon = {
  success: <IconSuccess />,
  error: <IconError />,
  info: <IconInfo />,
  warning: <IconWarning />
}

const typeColor = {
  success: "#cdefd6",
  error: '#efcdcd',
  info: '#cddeef',
  warning: '#ebe5b7'
}


const Alert = ({ type, children }) => {

  const bg = {
    background: typeColor[type],
    padding: '20px',
    borderRadius: '10px'
  }

  return (
    <div style={bg}>
      {typeIcon[type]}
      {children}
    </div>
  )
}



export default Alert