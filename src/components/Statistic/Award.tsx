import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { GRAY_800 } from 'constants/color'

const Wrapper = styled.div(
  ({ img }: { img: string }) => css`
    display: inline-block;
    background-position: left top;
    background-repeat: no-repeat;
    color: ${GRAY_800};
    background-image: url(${img});
    font-weight: bold;
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
  `,
)

export interface AwardProps {
  img: string
  children: ReactNode
}

function Award({ img, children }: AwardProps) {
  return <Wrapper img={img}>{children}</Wrapper>
}

export default Award
