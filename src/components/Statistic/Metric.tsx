import styled from '@emotion/styled'
import { memo } from 'react'

import { GRAY } from 'constants/color'
import useCounter from 'hooks/useCounter'
import { MetricModal } from 'model/metric'

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const Text = styled.p`
  font-weight: normal;
  color: ${GRAY};
  letter-spacing: -1px;
  font-size: 36px;
`

interface MetricProps {
  metric: MetricModal
}

function Metric({ metric }: MetricProps) {
  const { amount, amountUnit, text } = metric
  const { count } = useCounter(amount, 2000)

  return (
    <Wrapper>
      <Text>
        <strong>
          <span ref={count} />
          {`${amountUnit}의 `}
        </strong>
        {text}
      </Text>
    </Wrapper>
  )
}

export default memo(
  Metric,
  (prev, cur) => JSON.stringify(prev) === JSON.stringify(cur),
)
