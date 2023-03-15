import { createTheme } from 'react-data-table-component'

const solarized = createTheme('solarized', {
  text: {
    primary: '#a3a5aa',
    secondary: '#a3a5aa',
  },
  background: {
    default: 'transparent',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#a3a5aa',
  },
  button: {
    default: '#01fb34',
    hover: '#151a26',
    focus: 'rgba(255,255,255,.12)',
    disabled: 'rgba(255, 255, 255, .34)',
  },
  sortFocus: {
    default: '#a3a5aa',
  },
})

export default solarized
