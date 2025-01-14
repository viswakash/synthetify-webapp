import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: colors.navy.background,
    paddingRight: 0,
    height: 100,

    [theme.breakpoints.down('md')]: {
      height: 60
    }
  },
  snyLogo: {
    width: 50,
    height: 44,
    margin: 10,
    marginLeft: 50,

    [theme.breakpoints.down('md')]: {
      margin: 0,
      marginLeft: 8
    }
  },
  divider: {
    background: colors.navy.grey
  },
  verticalDivider: {
    background: colors.navy.grey,
    height: 50,
    marginLeft: 40,
    marginRight: 10,

    [theme.breakpoints.down('md')]: {
      margin: 10
    }
  },
  connectedWalletIcon: {
    minWidth: 21,
    height: 21,
    marginRight: 5
  },
  dehazeButton: {
    borderRadius: 10,
    padding: 4,
    paddingTop: 1,
    paddingBottom: 1,

    '&:hover': {
      background: colors.navy.navButton
    }
  },
  dehazeIcon: {
    width: 45,
    height: 38,
    fill: colors.navy.navBar
  },
  dotsButton: {
    borderRadius: 10,
    padding: '5px 8px',
    marginRight: 100,
    marginLeft: 50,

    [theme.breakpoints.down('md')]: {
      padding: '1px 4px',
      marginRight: 8,
      marginLeft: 10
    },

    '&:hover': {
      background: colors.navy.navButton
    }
  },
  left: {
    maxWidth: 200,
    [theme.breakpoints.down('md')]: {
      maxWidth: 80
    }
  },
  mobileRight: {
    maxWidth: 80
  }
}))

export default useStyles
