import styled from 'styled-components'
import { tint } from 'polished'

import BannerInput from './BannerInput'
import BannerLabel from './BannerLabel'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'
import BannerText from './BannerText'

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 0 20px;
  background-color: ${props => tint(0.95, props.theme.colors.black)};
  font-family: ${props => props.theme.text.fontSans};
`
Banner.Input = BannerInput
Banner.Label = BannerLabel
Banner.Left = BannerLeft
Banner.Right = BannerRight
Banner.Text = BannerText

export default Banner
