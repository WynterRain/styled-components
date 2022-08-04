import React from 'react'
import styled from 'styled-components'

export const Random = () => {
  return (
    <Wrapper>
        <div className='underline'></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.underline {
    width: 5rem;
    height: 0.5rem;
    margin: 4rem auto;
    background: red;
}
`
export default Random