import * as React from 'react';
import { Route } from 'react-router-dom';

interface IRouters {
  name: string;
  path: string;
  exact?: boolean;
  component: React.Component;
  childrens?: IRouters[]
}

interface IProps {
  routers: IRouters[]
}

export default function Arouter (props: IProps) {
  return (
    <div>rtouer</div>
  )
}