import React, { useEffect, useState } from 'react'
import { Divider, Grid } from '@material-ui/core'
import AmountInputWithLabel from '@components/Input/AmountInputWithLabel'
import MaxButton from '@components/CommonButton/MaxButton'
import KeyValue from '@components/WrappedActionMenu/KeyValue/KeyValue'
import { OutlinedButton } from '@components/OutlinedButton/OutlinedButton'
import { Progress } from '@components/WrappedActionMenu/Progress/Progress'
import { printBN } from '@consts/utils'
import { BN } from '@project-serum/anchor'
import useStyles from './style'

export interface IProps {
  action: string
  maxAvailable: BN
  maxDecimal: number
  onClick: () => void
}

type ParsedBN = { BN: BN; decimal: number }

export const ActionTemplate: React.FC<IProps> = ({ action, maxAvailable, maxDecimal, onClick }) => {
  const classes = useStyles()
  const [amountBN, setAmountBN] = useState(new BN(0))
  const [decimal, setDecimal] = useState(0)
  const [actionAvailable, setActionAvailable] = useState(false)
  const [inputSuffix, setInputSuffix] = useState('')

  useEffect(() => {
    setActionAvailable(checkActionIsAvailable())
  }, [amountBN, decimal])

  const checkActionIsAvailable = () => {
    if (decimal > maxDecimal) {
      return false
    }
    const diff = maxDecimal - decimal
    const isLess = amountBN.muln(10 ** diff).lte(maxAvailable) //TODO: fix to shift
    return !amountBN.eqn(0) && isLess
  }

  const stringToDecimalBN = (str: string): ParsedBN => {
    if (str.includes('.')) {
      const decimal = str.split('.')[1].length || 0
      return {
        BN: new BN(parseFloat(str) * 10 ** decimal), //TODO: fix parsing
        decimal
      }
    }
    return {
      BN: new BN(str),
      decimal: 0
    }
  }

  const capitalize = (str: string) => {
    if (!str) {
      return str
    }
    return str[0].toUpperCase() + str.substr(1).toLowerCase()
  }

  return (
    <Grid
      container
      justify='space-around'
      alignItems='flex-start'
      direction='column'
      className={classes.root}>
      <Grid container item className={classes.wrap}>
        <Grid item>
          <AmountInputWithLabel
            value={`${printBN(amountBN, decimal)}${inputSuffix}`}
            setValue={value => {
              const endZeros = /\.0*$/
              if (endZeros.test(value)) {
                const suffix = value.substr(value.indexOf('.'))
                setInputSuffix(suffix)
              } else {
                setInputSuffix('')
              }
              const { BN, decimal } = stringToDecimalBN(value)
              setAmountBN(BN)
              setDecimal(decimal)
            }}
            className={classes.amountInput}
            currency={'xUSD'}
          />
        </Grid>
        <Grid
          item
          container
          direction='row'
          justify='space-around'
          wrap='nowrap'
          className={classes.secondHalf}>
          <Grid item>
            <MaxButton
              onClick={() => {
                setAmountBN(maxAvailable)
                setDecimal(maxDecimal)
              }}
            />
          </Grid>
          <Grid item>
            <Divider orientation='vertical' className={classes.divider} />
          </Grid>
          <Grid item className={classes.available}>
            <KeyValue
              keyName={`Available to ${action}`}
              value={maxAvailable}
              decimal={maxDecimal}
              unit='xUSD'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.bottom}>
        <Grid item style={{ marginRight: 18 }}>
          <OutlinedButton
            name={capitalize(action)}
            disabled={!checkActionIsAvailable()}
            color='secondary'
            padding='11px 40px'
            style={{ width: 160 }}
            onClick={onClick}
          />
        </Grid>
        <Grid item>
          <Progress
            state={actionAvailable ? 'none' : 'failed'}
            message={actionAvailable ? '' : 'incorrect value!'}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ActionTemplate
