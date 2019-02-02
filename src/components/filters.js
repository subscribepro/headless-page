import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Cancel from './svg/cancel'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // Button resets
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }
  ul {
    margin: 12px 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      display: block;
      list-style: none;
      button {
        background-color: #00baa1;
        color: #fff;
        margin: 0 8px 10px 0;
        padding: 6px 12px;
        transition: background-color 0.2s ease;
        svg {
          width: 10px;
          height: 10px;
          margin: 1px 6px 1px 0;
          stroke: #fff;
        }
      }
      button:hover {
        background-color: #008673;
      }
    }
  }
  .clear {
    margin-left: 8px;
    button {
      transition: color 0.2s ease;
    }
    button:hover {
      color: #00baa1;
    }
  }
`

const Filters = ({ values, update }) => (
  <Wrapper>
    {values.length > 0 && (
      <>
        <ul>
          {values.map(value => {
            return (
              <li key={value}>
                <button
                  onClick={() =>
                    update(
                      ({ filters }) =>
                        filters.indexOf(value) !== -1 &&
                        filters.filter(filter => filter !== value)
                    )
                  }
                >
                  <Cancel /> {value}
                </button>
              </li>
            )
          })}
        </ul>
        <span className="clear">
          <button onClick={() => update(() => [])}>Clear All</button>
        </span>
      </>
    )}
  </Wrapper>
)

Filters.propTypes = {
  values: PropTypes.array.isRequired,
}

export default Filters
