import React from 'react';
import { SideBar, Header } from '../components/index';
import { Arouter } from '../adapter/index'

import './index.scss';


const menuConfig: AdmYo.menu[] = [
  {
    key: '1',
    icon: 'pie-chart',
    name: '标题一'
  }, {
    key: '2',
    icon: 'appstore',
    name: '标题二',
    childrens: [
      {
        key: '3',
        icon: 'pie-chart',
        name: '标题3',
        childrens: [
          {
            key: '4',
            icon: 'pie-chart',
            name: '标题4',
          }
        ]
      }
    ]
  }
]

export default class Index extends React.Component<any, any> {

  render() {
    return (
      <div className='index-body'>
        <SideBar MenuList={menuConfig}/>
        <div className='index-content'>
          <Header/>
          <div className='index-view'>
            
          </div>
        </div>
      </div>
    );
  }
}