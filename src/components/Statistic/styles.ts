import { css } from '@emotion/react'
import styled from '@emotion/styled'

import InfoImage from 'assets/images/triple2x.png'
import { GRAY_700 } from 'constants/color'
import { showAnimation } from 'styles/animation'
import { BackgroundCoverBasic } from 'styles/common'

export const Wrapper = styled.section(
  ({ observed }: { observed: boolean }) => css`
    min-width: 1200px;
    height: auto;
    margin: 0px auto;
    position: relative;

    div {
      visibility: ${observed ? 'visible' : 'hidden'};
      animation-play-state: ${observed ? 'running' : 'paused'};
    }
  `,
)

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

  ${showAnimation({
    name: 'bottomFadeIn',
    duration: 700,
    delay: 0,
    mode: 'forwards',
    timing: 'ease-out',
  })}

  &::after {
    content: '2021년 12월 기준';
  }
`

export const MetricContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;

  ${showAnimation({
    name: 'bottomFadeIn',
    duration: 700,
    delay: 100,
    mode: 'forwards',
    timing: 'ease-out',
  })}
`
export const AwardContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;

  ${showAnimation({
    name: 'bottomFadeIn',
    duration: 700,
    delay: 200,
    mode: 'forwards',
    timing: 'ease-out',
  })}
`
