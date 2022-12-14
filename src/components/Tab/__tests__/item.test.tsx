import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Item } from '../item'

describe('comps/Tab/item', () => {

  test('title', () => {
    const screen = render(<Item title="item" />)
    screen.getByText('item')
    expect(screen.container).toMatchSnapshot()
  })

  test('icon', () => {
    const screen = render(<Item icon="https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF" />)
    expect(screen.container.querySelector('img')?.src)
      .toBe('https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF')

    expect(screen.container).toMatchSnapshot()
  })

  test('active', () => {
    const screen = render(<Item title="item" active />)
    expect(screen.getByText('item').className.indexOf('active'))
    expect(screen.container).toMatchSnapshot()
  })

  test('message', () => {
    const screen = render(<Item title="item" message />)
    // eslint-disable-next-line no-magic-numbers
    expect(screen.getByText('item').className.indexOf('corn-tab-item-message')).not.toBe(-1)
    expect(screen.container).toMatchSnapshot()
  })

  test('click', () => {
    const click = jest.fn()
    const screen = render(<Item title="item" onClick={click} />)
    fireEvent.click(screen.getByText('item'))

    // eslint-disable-next-line no-magic-numbers
    expect(click).toHaveBeenCalledTimes(1)
  })

  test('url and click', () => {
    const click = jest.fn()
    const screen = render(
      <BrowserRouter>
        <Switch>
          <Route>
            <Item title="item" onClick={click} url="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    )
    expect(screen.container.querySelector('a').href).toBe('http://localhost/home')
    fireEvent.click(screen.getByText('item'))

    // eslint-disable-next-line no-magic-numbers
    expect(click).toHaveBeenCalledTimes(1)
  })
})
