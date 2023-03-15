// ** React Select Theme Colors
export const selectThemeColors = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#01fb341a', // for option hover bg-color
    primary: '#01fb34', // for selected option bg-color
    neutral10: '#01fb34', // for tags bg-color
    neutral20: '#ced4da', // for input border-color
    neutral30: '#ced4da', // for input hover border-color
  },
})
