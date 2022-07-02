import { useRef } from 'react'

import * as Styles from './styles'

import Metric from 'components/Statistic/Metric'
import MetricData from 'constants/metric'

function Statistic() {
  const StatisticRef = useRef<HTMLElement>(null)

  return (
    <Styles.Wrapper ref={StatisticRef}>
      <Styles.InfoImg />
      <Styles.MetricContainer>
        {MetricData.map((item) => (
          <Metric key={item.id} metric={item} />
        ))}
      </Styles.MetricContainer>
    </Styles.Wrapper>
  )
}

export default Statistic
