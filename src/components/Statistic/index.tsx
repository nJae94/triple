import { useRef } from 'react'

import * as Styles from './styles'

function Statistic() {
  const StatisticRef = useRef<HTMLElement>(null)

  return (
    <Styles.Wrapper ref={StatisticRef}>
      <Styles.InfoImg />
      <Styles.MetricContainer>테스트</Styles.MetricContainer>
    </Styles.Wrapper>
  )
}

export default Statistic
