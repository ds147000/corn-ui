import React, { useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ITouchEvent } from '../../types'

export interface DrawerProps {
  /** 是否显示 */
  visible: boolean
  /** 弹出的方向，可以设置左右上下中间, 默认 bottom */
  position?: 'left' | 'right' | 'bottom' | 'top' | 'center'
  /** 是否显示遮罩层 */
  mask?: boolean
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  /** 关闭回调 */
  onClose?(): void
  /** 完全隐藏回调 */
  onHide?(): void
  className?: string
}

const Drawer: React.FC<DrawerProps> = ({
  visible,
  position = 'bottom',
  mask = true,
  maskClosable = true,
  onClose,
  onHide,
  className,
  children
}) => {
  const [ isEXC, setIsEXC ] = useState<boolean>(true)
  const Body = useRef<{ uid: string }>()

  const _class = useMemo(() => {
    return classNames(
      'corn-drawer-body',
      `corn-drawer-${position}-${visible ? 'show' : 'hide'}`,
      `corn-drawer-${position}`,
      className
    )
  }, [ position, visible, className ])

  const _maskClass = useMemo(() => {
    return classNames('corn-drawer-mask', `corn-drawer-mask-${visible ? 'show' : 'hide'}`)
  }, [ visible ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onAnimationEnd = (event: any): void => {
    const animationName: string = event.animationName ||
      event.detail?.animationName ||
      event.nativeEvent?.animationName ||
      event.target.className

    // eslint-disable-next-line no-magic-numbers
    if (animationName.toLocaleUpperCase().indexOf('HIDE') !== -1) {
      setIsEXC(true)
      onHide?.()
    } else {
      setIsEXC(false)
    }
  }

  const onClickMask = (): void => {
    if (maskClosable) onClose?.()
  }

  const onClickBody = (event: ITouchEvent): void => {
    if (position !== 'center') return

    const target = event.target as HTMLDivElement
    if (target?.className?.indexOf?.('corn-drawer-body') === -1) return
    if (target.id !== Body.current?.uid && Body.current?.uid !== undefined) return

    onClickMask()
  }


  if (visible === false && isEXC) {
    return null
  }

  return (
    <>
      {mask && (
        <View
          className={_maskClass}
          data-testid="mask"
          onClick={onClickMask}
          onTouchMove={onTouchMove}
          catchMove
        />
      )}
      <View
        className={_class}
        onAnimationEnd={onAnimationEnd}
        onClick={onClickBody}
        data-testid="body"
        ref={Body}
      >
        {children}
      </View>
    </>
  )
}

export const onTouchMove = (event: ITouchEvent): void => {
  event.preventDefault()
}

export default Drawer
