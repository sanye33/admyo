import React from 'react';
import { Menu, Icon } from 'antd';
import './index.scss';

const { SubMenu } = Menu;

interface IProps {
  collapsed?: boolean,
  MenuList: AdmYo.menu[]
}

export default function SideBar (props: IProps) {
  const { collapsed = false, MenuList = [] } = props
  const renderMenuItem = (props: AdmYo.menu) => {
    const { key = '', icon = 'pie-chart', name = '导航'} = props
    return (
      <Menu.Item key={key}>
        <Icon type={icon} />
        <span>{name}</span>
      </Menu.Item>
    )
  }
  const renderMenuSub = (props: AdmYo.menu) => {
    const { key = '', icon = 'pie-chart', name = '导航', childrens = []} = props
    const title = (
      <span>
        <Icon type={icon} />
        <span>{name}</span>
      </span>
    )
    return (
      <SubMenu key={key} title={title}>
        {
          childrens.length && childrens.map(menu => {
            if (menu.childrens) {
              return renderMenuSub(menu)
            } else {
              return renderMenuItem(menu)
            }
          })
        }
      </SubMenu>
    )
  }
    
  return (
    <div style={{ width: 256, height: '100vh' }}>
      <div className='side-name'>admyo</div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
      >
        {
          MenuList.map(menu => {
            if (menu.childrens && menu.childrens.length) {
              return renderMenuSub(menu)
            } else {
              return renderMenuItem(menu)
            }
          })
        }
      </Menu>
    </div>
  )
}