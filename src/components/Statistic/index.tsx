import { useRef } from 'react'

import * as Styles from './styles'
import Award from './Award'

import AppleIcon from 'assets/images/badge-apple4x.png'
import GoogleIcon from 'assets/images/play-store2x.png'
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
      <Styles.AwardContainer>
        <Award img={GoogleIcon}>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </Award>
        <Award img={AppleIcon}>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </Award>
      </Styles.AwardContainer>
    </Styles.Wrapper>
  )
}

export default Statistic
