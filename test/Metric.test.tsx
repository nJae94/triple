import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import Metric from '../src/components/Statistic/Metric'
import useCounter from '../src/hooks/useCounter'

import { MetricModal } from 'model/metric'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('Metric 컴포넌트 테스트', () => {
  const Mock: MetricModal = {
    id: 0,
    amount: 700,
    amountUnit: '만 명',
    text: '여행자',
  }

  test('Metric 컴포넌트 일정 시간 후 Props로 내려받은 amount 표시', () => {
    const { getByText } = render(<Metric metric={Mock} />)
    renderHook(() => useCounter(Mock.amount, 2000))

    jest.runAllTimers()
    const amount = getByText('700')
    expect(amount).toBeInTheDocument()
  })
})
