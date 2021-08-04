import React, { useMemo } from 'react'
import ClassNames from 'classnames'
import { View } from '@tarojs/components'

export interface ButtonProps {
  /** 按钮大小，max: 最大， big: 超大，large：大，middle：中，small：小，mini */
  size?: 'max' | 'big' | 'large' | 'middle' | 'small' | 'mini'
  /** 按钮风格类型 */
  type?: 'primary' | 'warn' | 'error' | 'link' | 'pop'
  /** 图标 */
  icon?: React.ReactNode
  /** 将按钮宽度调整为其父宽度的选项	 */
  block?: boolean
  /** 镂空风格 */
  ghost?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 点击跳转的地址，指定此属性 button 的行为和 Link 链接一致, 后期补充	 */
  // href?: string
  /** 点击跳转事件 */
  onClick?(): void
}

const Button: React.FC<ButtonProps> = ({
  size = 'middle',
  type = 'primary',
  block,
  ghost,
  disabled,
  onClick,
  icon,
  children
}) => {
  const isIcon = icon !== undefined

  const _class = useMemo(() => {
    return ClassNames(
      'xrk-btn',
      'xrk-if xrk-ac xrk-jc',
      `xrk-btn-${size}`,
      `xrk-btn-${type}`,
      {
        'xrk-btn-block': block,
        'xrk-btn-ghost': ghost,
        'xrk-btn-icon': isIcon,
        'xrk-btn-disabled':disabled
      }
    )
  }, [ size, type, block, ghost, disabled, isIcon ])

  const _onClick = (): void => {
    if (disabled) return

    onClick?.()
  }

  return (
    <View className={_class} onClick={_onClick} >
      {children}
      {icon}
    </View>
  )
}

export default Button