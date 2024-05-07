import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

export const AsideContenxt = React.createContext({
    menus: [],
})

class View extends React.Component {
    menus = [
        {
            key: 'base',
            title: '基础',
            items: [
                {
                    to: 'lifecircle',
                    title: '生命周期'
                },
                {
                    to: 'context',
                    title: 'context'
                },
                {
                    to: 'ref',
                    title: 'ref'
                }
            ]
        },
        {
            key: 'hoc',
            title: 'HOC',
        },
        {
            key: 'hooks',
            title: 'hooks',
        },
        {
            key: 'scene',
            title: '场景',
            items: [
                {
                    to: 'auth',
                    title: '权限校验',
                },
                {
                    to: 'form',
                    title: '表单',

                },
                {
                    to: 'table',
                    title: '表格',
                },
                {
                    to: 'chart',
                    title: '图表',

                },
                {
                    to: 'bmap',
                    title: '百度地图api',
                },
                {
                    to: 'web-storage',
                    title: 'web-storage',
                },
                {
                    to: 'svg',
                    title: 'svg',
                },
                {
                    to: 'canvas',
                    title: 'canvas',
                },
                {
                    to: 'drag',
                    title: '拖拽',
                },
            ]
        },
        {
            key: 'store',
            title: 'store',
            items: [
                {
                    to: 'common',
                    title: 'common',
                },
                {
                    to: 'mobx',
                    title: 'mobx',

                },
                {
                    to: 'redux',
                    title: 'redux',
                },
            ]
        },
    ];

    render() {
        return (
            <aside className="page-aside">
                <Menu mode="inline" theme="dark">
                    {
                        this.menus.map((menu, i) => {
                            return menu.items ? (
                                <SubMenu key={menu.key} title={menu.title} >
                                    {
                                        menu.items.map((item, j) => {
                                            return (
                                                <Menu.Item key={`${menu.key}-${j}`}>
                                                    <Link to={`/${menu.key}/${item.to}`}>{item.title}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            ) : (
                                <Menu.Item key={`${menu.key}`}>
                                    <Link to={`/${menu.key}`}>{menu.title}</Link>
                                </Menu.Item>
                            )
                        })
                    }

                </Menu>
            </aside>
        );
    }
}

export default View;
