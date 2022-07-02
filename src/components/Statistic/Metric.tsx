import styled from '@emotion/styled'

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
  const { count } = useCounter(amount)

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

export default Metric
