import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
ul {
    margin: 0;
    padding: 0;
    li {
        display: inline;
        list-style: none;
    }
}
`

const Tags = ({ values, className }) => (
  <Wrapper className={className}>
    <ul>
    {values.map((value, index) => {
      const isLastItem = index + 1 === values.length

      return (
        <li key={value}>
          {value}
          {!isLastItem && <>, </>}
        </li>
      )
    })}
    </ul>
  </Wrapper>
)

Tags.propTypes = {
  values: PropTypes.array.isRequired,
}

export default Tags
