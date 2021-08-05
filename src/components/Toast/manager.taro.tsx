import Taro from '@tarojs/taro'
import { DEFAULT_DURATION, ToastOption } from './interface'

class ToastManager {
  show(option: ToastOption | string): void {
    const _options: ToastOption = typeof option === 'string' ? { title: option } : option

    if (!_options.icon) _options.icon = 'none'
    if (!_options.duration) _options.duration = DEFAULT_DURATION

    Taro.hideToast(_options)
  }

  hide(): void {
    Taro.hideToast()
  }
}

export default new ToastManager()
