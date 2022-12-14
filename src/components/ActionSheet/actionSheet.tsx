/* eslint-disable no-magic-numbers */
import { View } from '@tarojs/components'
import classNames from 'classnames'
import React, { useMemo } from 'react'
// import { ITouchEvent } from '../../types'
import Drawer from '../Drawer'
import { ActionSheetItem } from './item'


export interface ActionSheetProps {
  /** 是否显示 */
  visible: boolean
  /** 标题 */
  title?: string
  /** 副标题 */
  subTitle?: string
  /** 标题水平方向 */
  titleAlign?: 'left' | 'center' | 'right'
  /** 是否显示头部 */
  showHead?: boolean
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 是否显示底部关闭按钮 */
  showCancel?: boolean
  /** 取消按钮的文案 */
  cancelText?: string
  /** 是否显示底部确定按钮 */
  showOk?: boolean
  /** 确定按钮的文案 */
  okText?: string
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  maxHeight?: string | number
  /** 取消或关闭回调 */
  onClose?(): void
  /** 点击确认按钮回调 */
  onOk?(): void
  onHide?(): void
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  title,
  subTitle,
  titleAlign = 'left',
  showHead = true,
  maskClosable = true,
  maxHeight,
  closable,
  onClose,
  showCancel,
  cancelText = '关闭',
  showOk,
  okText = '确定',
  onOk,
  children,
  ...props
}) => {
  const isShowFloor = showCancel || showOk
  const titleClass = useMemo(() => classNames(
    'corn-actionsheet-header-center',
    `corn-actionsheet-${titleAlign}`
  ), [ titleAlign ])

  return (
    <Drawer
      {...props}
      maskClosable={maskClosable}
      onClose={onClose}
      position="bottom" mask
    >
      <View className="corn-actionsheet">
        {showHead && (
          <View className="corn-actionsheet-header">
            <View className={titleClass}>
              {Boolean(title) && <View className="title">{title}</View>}
              {Boolean(subTitle) && <View className="sub-title">{subTitle}</View>}
            </View>
          </View>
        )}
        {closable && (
          <View
            className="corn-actionsheet-close"
            data-testid="close"
            onClick={onClose}
          />
        )}
        <View className="corn-actionsheet-body" style={{ maxHeight }}>
          {children}
        </View>
        {isShowFloor && (
          <View className="corn-actionsheet-floor">
            {showCancel && (<ActionSheetItem align={titleAlign} text={cancelText} onClick={onClose} />)}
            {showOk && (<ActionSheetItem align={titleAlign} text={okText} onClick={onOk} />)}
          </View>
        )}
      </View>
    </Drawer>
  )
}

// let TouchStartY = 0


// export const onTouchStart = (event: ITouchEvent): void => {
//   TouchStartY = event.touches[0].clientY
// }

// export const onTouchMove = (event: ITouchEvent): void => {
//   const clientY = event.touches[0].clientY
//   const align = clientY - TouchStartY < 0 ? 'down' : 'top'

//   let target: HTMLDivElement | null = event.target as HTMLDivElement

//   while(target) {
//     if (align === 'down' && target.scrollTop > 0 && target.scrollHeight === target.scrollTop + target.clientHeight) {
//       event.preventDefault()
//       return
//     } else if (align === 'top' && target.scrollTop === 0 && target.scrollHeight > target.clientHeight) {
//       event.preventDefault()
//       return
//     }

//     target = target.parentElement as HTMLDivElement
//   }
// }


export default ActionSheet
