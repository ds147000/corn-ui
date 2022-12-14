/* eslint-disable no-magic-numbers */
import React from 'react'
import { DEFAULT_COUNT, Upload, UploadBase } from './base'
import { UploadDefaultBtn } from './btn'
import { HandelUpload, UploadProps } from './typeng'
import Toast from '../Toast'
import { InputMaskProps } from './inputMask/typeing'
import { FromContext } from '../Form/context'

interface UploadState {
  list: Upload.Media[]
  previewList: Upload.Media[]
}

const OPEN_MUTIPLE_COUNT = 2

class UploadComps extends React.Component<UploadProps, UploadState> {
  static handelUpload: HandelUpload
  static contextType = FromContext

  /** 获取处理上传方法 */
  get handelUpload(): HandelUpload {
    return this.props.handelUpload || UploadComps.handelUpload
  }

  /** 当前文件类型 */
  get fileType(): 'all' | 'video' | 'image' {
    return this.props.type || 'all'
  }

  /** 是否开启多选 */
  get isMultiple(): boolean {
    return this.props.multiple ?? this.state.list.length - (this.props.count || DEFAULT_COUNT) < OPEN_MUTIPLE_COUNT
  }

  get count(): number {
    return this.props.count || DEFAULT_COUNT
  }

  state: UploadState = {
    list: [],
    previewList: []
  }

  componentDidMount(): void {
    this.setState({ list: this.props.list || [] })
    if (!this.props.name) return

    this.context.add(this.props.name, (newList: Upload.Media[]) => this.setState({ list: newList || []}))
  }

  componentWillUnmount(): void {
    if (this.props.name) this.context.remove(this.props.name)
  }

  onChangeOfH5 = async (file: FileList): Promise<void> => {
    if (this.props.beforUpload?.(file, this.state.list)) return
    if (this.checkListLen(file)) return

    const previewList = this.getPreviewUrl(file)
    this.setState({ previewList: previewList })

    this.onHandleUpload(file)
  }

  onChangeOfMp = async (file: string[]): Promise<void> => {
    if (this.props.beforUpload?.(file, this.state.list)) return
    if (this.checkListLen(file)) return

    const previewList: Upload.Media[] = file.map((item) => ({
      mediaId: Math.random(),
      content: item,
      status: 'loading'
    }))
    this.setState({ previewList: previewList })

    this.onHandleUpload(file)
  }

  onHandleUpload = async (file: string[] | FileList): Promise<void> => {
    try {
      const list = await this.handelUpload(file)
      this.setState({ list: [ ...this.state.list, ...list ], previewList: [] })
    } catch (error) {

      const errorPreview = this.state.previewList.map((item) => {
        item.status = 'error'
        return item
      })
      this.setState({ list: [ ...this.state.list, ...errorPreview ], previewList: [] })
      Toast.show(error.message)
    }
  }

  onRemove = (item: Upload.Media): void => {
    this.setState({
      list: this.state.list.filter((_item) => _item.content === item.content && _item.mediaId === item.mediaId)
    })
  }

  private checkListLen = (file: FileList | string[]): boolean => {
    const len = this.state.list.length + file.length
    if (len > this.count) {
      Toast.show('数量超出限制，请重新选择')
      return true
    }

    return false
  }

  private getPreviewUrl(file: FileList): Upload.Media[] {
    const list: Upload.Media[] = []
    for (let i = 0; i < file.length; i++) {
      list.push({ mediaId: Math.random(), content: URL.createObjectURL(file[i]), status: 'loading' })
    }
    return list
  }

  render(): JSX.Element {
    const btnProps: InputMaskProps = {
      type: this.fileType,
      onChange: this.onChangeOfH5,
      onMpChange: this.onChangeOfMp,
      multiple: this.isMultiple
    }

    const list = [ ...this.state.list, ...this.state.previewList ]

    return (
      <UploadBase
        {...this.props}
        list={list}
        onRemove={this.onRemove}
        btn={this.props.btn ? this.props.btn(btnProps) : <UploadDefaultBtn {...btnProps} />}
      />
    )
  }
}

UploadComps.handelUpload = async (_: FileList): Promise<Upload.Media[]> => {
  return Promise.reject(new Error('未配置上传方法'))
}

export default UploadComps
