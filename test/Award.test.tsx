import { render } from '@testing-library/react'

import Award from '../src/components/Statistic/Award'

test('Awarad', () => {
  const { container } = render(
    <Award img="assets/images/play-store2x.png">
      2018 구글 플레이스토어
      <br />
      올해의 앱 최우수상 수상
    </Award>,
  )

  expect(container.firstChild).toHaveStyle(
    `background-image: url('assets/images/play-store2x.png')`,
  )
  expect(container.firstChild).toHaveTextContent(
    '2018 구글 플레이스토어올해의 앱 최우수상 수상',
  )
})
