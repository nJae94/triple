import styled from '@emotion/styled'

import InfoImage from 'assets/images/triple2x.png'
import { BackgroundCoverBasic } from 'styles/common'

export const Wrapper = styled.div`
  width: 1040px;
  height: auto;
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
  color: rgba(58, 58, 58, 0.7);

  &::after {
    content: '2021년 12월 기준';
  }
`
