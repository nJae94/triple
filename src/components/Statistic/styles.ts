import styled from '@emotion/styled'

import InfoImage from 'assets/images/triple2x.png'
import { GRAY_700 } from 'constants/color'
import { showAnimation } from 'styles/animation'
import { BackgroundCoverBasic } from 'styles/common'

export const Wrapper = styled.section`
  width: 1040px;
  height: auto;

  ${showAnimation({
    name: 'bottomFadeIn',
    duration: 700,
    delay: 0,
    mode: 'forwards',
    timing: 'ease-out',
  })}
`

export const InfoImg = styled.div`
  ${BackgroundCoverBasic};
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  text-align: center;
  background-size: 400px 338px;
  background-image: url(${InfoImage});
  padding-top: 280px;
  font-size: 15px;
  color: ${GRAY_700};

  &::after {
    content: '2021년 12월 기준';
  }
`

export const MetricContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`
