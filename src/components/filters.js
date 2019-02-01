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
    cursor: pointer;
    background-color: #00baa1;
    color: #fff;
    margin: 2px;
    padding: 2px;
  }
  li:hover {
    background-color: #008775;
  }
}
`

const Filters = ({ values, className, update }) => (
  <Wrapper className={className}>
    <ul>
    {values.map(value => {

      return (
        <li onClick={() => update(({ filters }) => filters.indexOf(value) !== -1 && filters.filter(filter => filter !== value))} key={value}>
          {value}
        </li>
      )
    })}
    </ul>
  </Wrapper>
)

Filters.propTypes = {
  values: PropTypes.array.isRequired,
}

export default Filters
