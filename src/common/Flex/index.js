import React from 'react'
import styled from '@emotion/styled'

const FlexRow = styled.div`
  display: flex;
  flex-flow: ${({ nowrap }) => (nowrap ? 'row nowrap' : 'row wrap')};
  justify-content: ${({ justifyLeft, justifyRight }) =>
    justifyLeft ? 'flex-start' : justifyRight ? 'flex-end' : 'center'};
  align-items: ${({ alignTop, alignBottom }) =>
    alignTop ? 'flex-start' : alignBottom ? 'flex-end' : 'center'};
`

const FlexColumn = styled.div`
  display: flex;
  flex-flow: ${({ nowrap }) => (nowrap ? 'column nowrap' : 'column wrap')};
  align-items: center;
`

export default props => {
  const { direction, nowrap, children } = props
  if (!direction || direction === 'row')
    return (
      <FlexRow {...props} ref={props.el}>
        {children}
      </FlexRow>
    )
  if (direction === 'column')
    return (
      <FlexColumn {...props} ref={props.el}>
        {children}
      </FlexColumn>
    )
}
