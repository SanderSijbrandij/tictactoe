// src/assets/styles/theme.js
import mui from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors

const white        = '#F3F3F3'
const silver       = '#D9DADA'
const grey30       = 'rgba(222, 222, 222, 0.7)'
const grey50       = 'rgba(222, 222, 222, 0.5)'
const black        = '#111111'
const dark       = '#06425B'
const medium     = '#025D75'
const light      = '#017C8B'


// Palette
export const palette = {
  primary1Color: dark,
  primary2Color: medium,
  primary3Color: medium,
  accent1Color: light,
  textColor: dark,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: silver,
  disabledColor: silver
}

export default getMuiTheme({ palette })
