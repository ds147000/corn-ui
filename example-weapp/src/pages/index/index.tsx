/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 16:24:31
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 15:34:25
 */

import { Component, createRef } from 'react'
import { ScrollView, View } from '@tarojs/components'
import { TAB } from 'corn-taro/components/Tab'
import {
  Button, Toast, Drawer, showActionSheet,
  showModal, Modal, Icon, Image, Tab, Affix,
  Timer, Link, Card, Checkbox, CheckboxGroup,
   Input, Form, Textarea, Upload, Popover, Search, Tooltip
} from 'corn-taro'
import './index.scss'

const asList = [
  '广州',
  '深圳'
]
const TabOption: TAB.Item[] = [
  { title: '我是选项1' },
  { title: '我是选项2' },
  { title: '我是选项3' },
  { title: '我是选项4' },
  { title: '我是选项5' }
]


const renderItem = (type: string, number: string): JSX.Element => {
  switch (type) {
    case 'day':
      return <View>{number}天:</View>

    case 'hous':
      return <View>{number}小时:</View>

    case 'min':
      return <View>{number}分钟:</View>

    default:
      return <View>{number}秒</View>
  }
}

export default class Index extends Component {
  checkGroupRef = createRef<CheckboxGroup>()
  form = createRef<Form>()

  state = {
    show: false,
    mShow: false,
    value: '',
    current: 0
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onClick() {
    Toast.show('taost')
  }

  onClose = () => {
    this.setState({ show: false })
  }

  onSubmit(data) {
    console.log(data)
  }

  onReset() {
    console.log('重置')
  }

  getValue = () => {
    this.form.current?.getValue()
      .then((res) => console.log(res))
  }

  render() {
    return (
      <View className='index'>
        <ScrollView className="list" scrollY >
          <Card>
            <Popover
              content={(rect) => (
                <View style={{ backgroundColor: '#fff', borderRadius: 10, width: 200 }} >
                  <CheckboxGroup name="shop100" radio >
                    <Checkbox value="1" >单选模式1</Checkbox>
                    <Checkbox value="2" >单选模式2</Checkbox>
                    <Checkbox value="3" >单选模式3</Checkbox>
                    <Checkbox value="4" >单选模式4</Checkbox>
                  </CheckboxGroup>
                </View>
              )}
            >
              <Button>选择类型</Button>
            </Popover>
            <Tooltip
              list={[
                { text: 'VIP妈妈', type: 'active' },
                { text: '明星妈妈' },
                { text: '平民' },
                { text: '新人' }
              ]}
              onClick={(item) => Toast.show(item.text)}
            >
              <Button>会员等级</Button>
            </Tooltip>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card>
            <Tooltip
              list={[
                { text: 'VIP妈妈', type: 'active' },
                { text: '明星妈妈' },
                { text: '平民' },
                { text: '新人' }
              ]}
              onClick={(item) => Toast.show(item.text)}
            >
              <Button>会员等级</Button>
            </Tooltip>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ScrollView>
        <Search openInput focus value={this.state.value} onChange={(value) => this.setState({ value })} onSearch={console.log} />

        <Card>
          <Upload count={2} />
        </Card>
        <Card>
          <Upload handelUpload={() => Promise.reject(new Error('上传失败'))} />
        </Card>
        <Card>
          <Upload layout="square" />
        </Card>
        <Form onSubmit={this.onSubmit} onReset={this.onReset} defaultValue={{ name: '1234', check: true, shop1: ['1', '2', '3'], shop2: '3' }} ref={this.form} >

        <Textarea placeholder="请输入姓名" floor={<Button>提交</Button>} name="liuyan" />
        <Input name="name" />
        <Checkbox name="check" >Boolean</Checkbox>
        <Tab
          options={TabOption}
          currenIndex={this.state.current}
          onChange={(index) => this.setState({ current: index })}
        />
        <Card>
        <CheckboxGroup name="shop1" >
          <Checkbox value="1">联合复选框1</Checkbox>
          <Checkbox value="2">联合复选框4</Checkbox>
          <Checkbox value="3">联合复选框3</Checkbox>
          <Checkbox value="4">联合复选框2</Checkbox>
        </CheckboxGroup>
      </Card>
      <Card>
        <CheckboxGroup radio name="shop2">
          <Checkbox value="1" >单选模式1</Checkbox>
          <Checkbox value="2" >单选模式2</Checkbox>
          <Checkbox value="3" >单选模式3</Checkbox>
          <Checkbox value="4" >单选模式4</Checkbox>
        </CheckboxGroup>
      </Card>
      <Affix position='top'>
          <Button size='max' icon={<Icon name='service' />}>图标按钮</Button>
          <Button size='max' type="warn" formType="submit" >提交</Button>
          <Button size='max' type="link" formType="reset" >重置</Button>
          <Button size='max' type="pop" onClick={this.getValue} >获取值</Button>
          <Button size='max' onClick={() => this.form.current?.reset()} >实例重置</Button>
          <Button size='max' onClick={() => this.form.current?.submit()} >实例提交</Button>
        </Affix>
      <Card>
        <CheckboxGroup radio name="shop3" >
          <Checkbox value="1" type="button" >单选模式1</Checkbox>
          <Checkbox value="2" type="button" >单选模式2</Checkbox>
          <Checkbox value="3" type="button" >单选模式3</Checkbox>
          <Checkbox value="4" type="button" >单选模式4</Checkbox>
        </CheckboxGroup>
      </Card>
      <Card>
        <CheckboxGroup ref={this.checkGroupRef} name="shop4" >
          <Checkbox value="1">单选模式1</Checkbox>
          <Checkbox value="2">单选模式2</Checkbox>
          <Checkbox value="3">单选模式3</Checkbox>
          <Checkbox value="4">单选模式4</Checkbox>
        </CheckboxGroup>
        <Button onClick={() => this.checkGroupRef.current?.selectAll()} >全选</Button>
        <Button onClick={() => this.checkGroupRef.current?.reset()} >取消选中</Button>
      </Card>
        <Link to='/pages/link/index' >【Link跳转】</Link>
        <Link to='/pages/link/index' replace >【Link原地跳转】</Link>
        <Link to='/pages/link/index' type="primary" >primary</Link>
        <Link to='/pages/link/index' type="warn" >warn</Link>
        <Link to='/pages/link/index' type="error" >error</Link>
        <Link to='/pages/link/index' type="link" >link</Link>
        <Link to='/pages/link/index' type="pop" >pop</Link>
        <Button>
          <Timer startTime={1500000000} endTime={1500000000 + 240000} />
        </Button>
        <Button>
          <Timer startTime={1500000000} endTime={1500000000 + 240000000} />
        </Button>
        <Timer startTime={1500000000} endTime={1500000000 + 240000} fill />
        <Timer startTime={1500000000} endTime={1500000000 + 240000000} fill />
        <Timer startTime={1500000000} endTime={1500000000 + 240000000} renderItem={renderItem} />
        <Button size='max' icon={<Icon name='service' />}>图标按钮</Button>
        <Button size='big'>@CornUI</Button>
        <Button size='large'>@CornUI</Button>
        <Button size='middle'>@CornUI</Button>
        <Button size='small'>@CornUI</Button>
        <Button size='mini'>@CornUI</Button>
        <Button type='error'>@CornUI</Button>
        <Button type='link'>@CornUI</Button>
        <Button type='pop'>@CornUI</Button>
        <Button type='primary'>@CornUI</Button>
        <Button type='warn'>@CornUI</Button>
        <Button block type='error' >@CornUI</Button>
        <Button block type='link' >@CornUI</Button>
        <Button block type='pop' >@CornUI</Button>
        <Button block type='primary' >@CornUI</Button>
        <Button block type='warn' >@CornUI</Button>
        <Button ghost type='error' >@CornUI</Button>
        <Button ghost type='link' >@CornUI</Button>
        <Button ghost type='pop' >@CornUI</Button>
        <Button ghost type='primary' >@CornUI</Button>
        <Button ghost type='warn' >@CornUI</Button>
        <Button onClick={this.onClick}>@CornUI</Button>
        <Button onClick={this.onClick} disabled >@CornUI</Button>
        <Drawer visible={this.state.show} onClose={this.onClose}>
          <View className='si-button'></View>
        </Drawer>
        <Button
          onClick={() => {
            showActionSheet({ list: asList })
              .then(console.log)
              .catch(console.error)
          }}
        >
          API 唤起
        </Button>

        <Button
          onClick={() => {
            showModal({ title: 'API 唤起 Modal' })
              .then(console.log)
              .catch(console.error)
          }}
        >
          API 唤起 Modal
        </Button>
        <Modal
          visible={this.state.mShow}
          title='这是标题'
          button={[
            { text: '取消', style: 'cancel' },
            { text: '继续看' },
            { text: '确定' }
          ]}
          onClose={() => this.setState({ mShow: false })}
          onButtonClick={() => this.setState({ mShow: false })}
        >
          <View>2121321</View>
        </Modal>

        <Image src='https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF' onClick={() => this.setState({ mShow: true })} />
        <Image src='https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF' lazyLoad />

        </Form>
      </View>
    )
  }
}
