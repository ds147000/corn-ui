import { RouteProps } from 'react-router-dom'

interface RoutesProps extends RouteProps {
  title: string;
}

const Routes: RoutesProps[] = [
  {
    path: '/basis/Publish',
    component: require('../components/Publish').default,
    title: '贡献指南'
  },
  {
    path: '/basis/md',
    component: require('../components/Md').default,
    title: '组件md文件编写规范'
  },
  {
    path: '/basis/history',
    component: require('../components/history').default,
    title: '更新历史'
  },
]

export default Routes
