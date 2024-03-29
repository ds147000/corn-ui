import React, { useMemo } from 'react'
import classNames from 'classnames'
import { Text } from '@tarojs/components'
import type { TextProps } from '../../types/Text'
import { formatMoney } from '../../utils'

interface MoneyProps extends TextProps {
  /** 金额类型，glod 葵花籽，coin 积分 */
  type?: 'gold' | 'coin' | 'rmb'
  /** 已经自处理过的金额 */
  amountString?: string | number
  /** 是否高亮 */
  lineThrough?: boolean
  /** 风格大小 */
  size?: 'large' | 'middle' | 'small'
  children?: string | number
}

const Money: React.FC<MoneyProps> = ({
  type = 'rmb',
  size = 'middle',
  amountString,
  lineThrough,
  children,
  className,
  ...props
}) => {
  const cln = useMemo(() => classNames('corn-money corn-money-' + size, className), [ size, className ])

  const value = useMemo(() => {
    if (amountString) return amountString

    if (type === 'coin') return children

    const _value = formatMoney(children || '0', undefined)
    return _value
  }, [ amountString, children, type ])

  return (
    <Text {...props} className={cln}>
      {type !== 'gold' && (
        <Text
          className="corn-money-mark"
          data-testid="money-mark"
        >
          $
        </Text>
      )}
      <Text className={lineThrough ? 'line-through' : ''} data-testid="money" >{value}</Text>
    </Text>
  )
}
export default Money
