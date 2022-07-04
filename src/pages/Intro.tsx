import styled from '@emotion/styled'

import Statistic from 'components/Statistic'

const Wrapper = styled.main`
  display: flex;
`

function Intro() {
  return (
    <Wrapper>
      <Statistic />
    </Wrapper>
  )
}

export default Intro
