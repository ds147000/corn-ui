import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import {
  View,
  // #if _APP === 'weapp'
  Input
  // #endif
} from '@tarojs/components'
import Button, { ButtonSize, ButtonType } from '../Button'
import { CheckBoxContext } from './context'
import { FromContext } from '../Form/context'
import Image from '../Image'

const DEFAULT_ICON = 'https://assets.xrkmm.cn/u/2000001252935290/dc949eed-eb8c-4ea5-bea4-c45a870cf0e7.png'
const SELECT_ICON = 'https://assets.xrkmm.cn/u/2000001252935290/97f184d7-4fda-43f1-bd56-8313ee8a2b94.png'

export interface CheckBoxProps {
  name?: string
  /** 复选框类型 */
  type?: 'button' | 'default'
  /** 是否选中 */
  check?: boolean
  /** 默认是否选中 */
  defaultChecked?: boolean
  /** 值，仅在 checkGroup 嵌套下生效 */
  value?: string
  /** 禁用 */
  disabled?: boolean
  /** 大小，当类型为Button生效 */
  size?: ButtonSize
  /** 是否开启幽灵样式，仅在button有效 */
  ghost?: boolean
  /** 按钮风格样式 */
  buttonType?: ButtonType
  /** 选中发生改变回调 */
  onChange?(check: boolean): void
}

const CheckBox: React.FC<CheckBoxProps> = ({
  children,
  defaultChecked = false,
  check,
  type = 'default',
  size,
  onChange,
  value = '',
  disabled,
  name,
  ghost,
  buttonType = 'primary'
}) => {
  const [ internalCheck, setInternalCheck ] = useState(defaultChecked || false)
  const context = useContext(CheckBoxContext)
  const formContext = useContext(FromContext)

  /** 选中值 */
  const controllCheck = getControllValue(check, internalCheck, context.values, value)
  /** 是否默认样式 */
  const isDefualtStyle = type === 'default'
  /** 外部是否存在包裹组 */
  const isGroup = Boolean(context.onCheck)
  /** 表单值 */
  const _value = value || JSON.stringify(controllCheck)
  /** 控制表单名称 */
  const _name  = isGroup ? '' : name

  const _class = classNames(
    'corn-if corn-ac',
    isDefualtStyle ? 'corn-checkbox' : 'corn-checkbox-btn',
    isDefualtStyle && disabled && 'corn-checkbox-disable'
  )

  let input: JSX.Element | null = null
  // #if _APP === 'weapp'
  input = <Input className="corn-checkbox-hide" value={_value} name={_name} data-testid="check" />
  // #else
  input = (
  // eslint-disable-next-line react/forbid-elements
    <input
      className="corn-checkbox-hide"
      value={_value}
      name={_name}
      data-testid="check"
      readOnly
    />
  )
  // #endif

  const _onChange = (): void => {
    if (disabled) return

    const newCheck = !controllCheck
    onChange?.(newCheck)
    context.onCheck?.(newCheck, value)
    if (check === undefined && context.values === undefined) setInternalCheck(newCheck)
  }

  useEffect(() => {
    if (!_name) return undefined

    formContext.add(_name, (val: unknown): void => setInternalCheck(Boolean(val)))

    return (): void => formContext.remove(_name)
  }, [ formContext, _name ])

  return (
    <View className={_class} onClick={_onChange} data-testid="corn-checkbox" >
      {input}
      {isDefualtStyle ? (
        <>
          <Image
            mode="scaleToFill"
            className="corn-checkbox-icon"
            src={controllCheck ? SELECT_ICON : DEFAULT_ICON}
          />
          {children}
        </>
      ) : (
        <Button
          size={size}
          type={controllCheck ? buttonType : 'default'}
          disabled={disabled}
          ghost={controllCheck ? ghost : false}
        >
          {children}
        </Button>
      )}
    </View>
  )
}

export function getControllValue(
  externalCheck: boolean | undefined,
  internalCheck: boolean,
  values?: string[],
  value = ''
): boolean {
  if (values !== undefined) return values.includes(value)

  return externalCheck ?? internalCheck
}

export default CheckBox
