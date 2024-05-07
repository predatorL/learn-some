import React from "react";

/**
    * React.ReactElement —— 使用React.createElement创建的，可以简单理解为React中的JSX的元素
    * React.ReactNode —— <div>xxx</div> xxx的合法类型
    * React.CSSProperties —— 组件内联的style对象的类型
    * React.RefObject —— React.createRef创建的类型，只读不可改
    * React.MutableRefObject —— useRef创建的类型，可以修改
 **/

export type RouteChild = { path: string, element: React.FC | React.ReactNode | React.Component };

export type TRouteConf = {
    path: string,
    name: string,
    label?: string,
    icon?: string,
    children: RouteChild[]
};