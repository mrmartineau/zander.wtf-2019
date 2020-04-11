import styled from 'styled-components'

export default styled.div`
  margin-top: ${(props) => (props.intro ? '20vmax' : '10vmax')};
  margin-bottom: ${(props) => (props.intro ? '20vmax' : '10vmax')};
`
