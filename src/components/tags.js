import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import qs from 'qs'

const Wrapper = styled.div`
  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline;
      list-style: none;
      cursor: pointer;
      transition: color 0.2s ease;
    }
    li:hover {
      color: #00baa1;
    }
  }
`

const Tags = ({ values, className, update }) => {
  const click = value =>
    update
      ? update(({ filters }) =>
          filters.indexOf(value) === -1 ? filters.concat([value]) : filters
        )
      : navigate(`/?${qs.stringify({ tag: [value] })}`)

  return (
    <Wrapper className={className}>
      <ul>
        {values.map((value, index) => {
          const isLastItem = index + 1 === values.length

          return (
            <li onClick={() => click(value)} key={value}>
              {value}
              {!isLastItem && <>, </>}
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

Tags.propTypes = {
  values: PropTypes.array.isRequired,
}

export default Tags
