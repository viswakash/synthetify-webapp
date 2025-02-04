import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: 22,
    color: colors.gray.veryLight,
    lineHeight: 1.5,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  tooltip: {
    background: colors.navy.info,
    padding: '5px 8px'
  },
  hint: {
    color: colors.white.main,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: '16px'
  },
  questionMark: {
    height: 17,
    width: 17
  }
}))

export default useStyles
