import styled from 'styled-components'

export const Circle = styled.div`
  position: absolute;
  background-color: #7dd3fc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: #cffafe;
  }
  &.left {
    bottom: 280px;
    right: -100px;
    width: 230px;
    height: 230px;
    ::before {
      height: 150px;
      width: 150px;
    }
  }

  &.right {
    bottom: -34px;
    left: -25px;
    width: 230px;
    height: 230px;
    ::before {
      height: 150px;
      width: 150px;
    }
  }
`
