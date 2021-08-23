/* eslint-disable max-len */
import { ImageProps } from '@tarojs/components/types/Image'
import { formatImgOption } from '../../utils/url'

export const DEFAULT_LIGHT_LAZY_IMG = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAGQAZAMBEQACEQEDEQH/xABNAAEBAAAAAAAAAAAAAAAAAAAAChABAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAUGEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC3BqE8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k='
export const DEFAULT_LAZY_IMG = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAGQAZAMBEQACEQEDEQH/xABNAAEBAAAAAAAAAAAAAAAAAAAAChABAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAQFEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC6hsJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k='



export interface XImageProps extends ImageProps, formatImgOption {
  /** 高亮风格 */
  light?: boolean
  /** 自定义懒加载占位图 */
  lazyImg?: string
  /** 放大预览 */
  previewImage?: boolean
}