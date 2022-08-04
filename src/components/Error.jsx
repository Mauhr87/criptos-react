import styled from '@emotion/styled'

const Texto = styled.p`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error