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
    default: '#2aa198',
    hover: 'rgba(0,0,0,.08)',
    focus: 'rgba(255,255,255,.12)',
    disabled: 'rgba(255, 255, 255, .34)',
  },
  sortFocus: {
    default: '#a3a5aa',
  },
})

export default solarized
