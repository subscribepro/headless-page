import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Cancel from './svg/cancel'

const Wrapper = styled.div`
  ul {
    margin: 12px 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    li {
      display: block;
      list-style: none;
      cursor: pointer;
      background-color: #00baa1;
      color: #fff;
      margin: 0 8px 10px 0;
      padding: 6px 12px;
      transition: background-color 0.2s ease;
      svg {
        width: 10px;
        height: 10px;
        margin: 1px 6px 1px 0;
        fill: #fff;
        stroke: #fff;
        color: #fff;
      }
    }
    li:hover {
      background-color: #008673;
    }
  }
`

const Filters = ({ values, update }) => (
  <Wrapper>
    {values.length > 0 && (
      <ul>
        {values.map(value => {
          return (
            <li
              onClick={() =>
                update(
                  ({ filters }) =>
                    filters.indexOf(value) !== -1 &&
                    filters.filter(filter => filter !== value)
                )
              }
              key={value}
            >
              <Cancel /> {value}
            </li>
          )
        })}
      </ul>
    )}
  </Wrapper>
)

Filters.propTypes = {
  values: PropTypes.array.isRequired,
}

export default Filters
