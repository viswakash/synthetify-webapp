import React from 'react'
import SwitchMenu, { IMenuItem } from '@components/SwitchMenu/SwitchMenu'

export interface IProps {
  onChange: (newValue: number) => void
  actionContents: IActionContents
}

export type ActionType = 'mint' | 'deposit' | 'withdraw' | 'burn' | 'rewards'

export type IActionContents = {
  [type in ActionType]: React.ReactNode
}

export const ActionMenu: React.FC<IProps> = ({ onChange, actionContents }) => {
  const actions: IMenuItem = { ...actionContents }

  return <SwitchMenu menuItems={actions} maxWidth={800} onChange={onChange} />
}

export default ActionMenu
