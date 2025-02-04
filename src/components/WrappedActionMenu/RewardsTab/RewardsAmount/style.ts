import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles(() => ({
  root: {
    width: 'fit-content',
    marginLeft: 'auto',
    borderRadius: 10,
    padding: '0 16px',
    backgroundColor: colors.navy.background
  },
  text: {
    fontSize: 16,
    color: colors.navy.grey
  },
  tooltip: {
    background: colors.navy.info,
    color: colors.white.main,
    fontWeight: 400,
    fontSize: 13,
    padding: '5px 8px',
    lineHeight: '16px'
  },
  questionMark: {
    height: 17,
    width: 17
  }
}))

export default useStyles
