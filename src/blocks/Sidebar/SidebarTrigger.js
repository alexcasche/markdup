import styled from 'styled-components'
import { tint } from 'polished'

const SidebarTrigger = styled.div`
  display: flex;
  height: 52px;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 2px;
  background-color: ${props => tint(0.85, props.theme.colors.black)};
  color: ${props => props.theme.colors.grey};
  transition: all 0.25s ease-in-out;
  svg:first-child {
    height: 13px;
    width: 20px;
    text-align: center;
    margin-right: 12px;
  }
  span {
    color: inherit;
    flex-grow: 1;
    text-align: left;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  svg:last-child {
    width: 12px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${props => tint(0.8, props.theme.colors.black)};
    color: ${props => props.theme.colors.green};
  }
  &:focus {
    outline: none;
  }
`

export default SidebarTrigger
