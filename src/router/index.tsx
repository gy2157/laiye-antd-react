import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompanyList from '../client/components/company/CompanyList';
import LoginPage from '../client/components/login/LoginPage';
import appStore from '../client/stores/appStore';
import Portal from '../client/components/layouts/Portal';
import PermissionMenu from '../client/components/permission/PermissionMenu';
import NotFound from '../client/components/status/NotFound';
export const getMenuConfig = () => {
    return [
        {
            route: '/login',
            nameKey: 'menu.login',
            component: LoginPage,
        },
        {
            route: '/company',
            nameKey: 'menu.company',
            component: CompanyList,
        },
    ];
};

export const permissionMenuWrap = (MenuComponent) => {
    return (props) => {
        const { match } = props;
        /**
         * 菜单权限的URL配置成与菜单路由一致，并进行权限控制
         */

        console.log('permissionMenuWrap -> routes', props);
        const route = match?.path;
        return (
            <PermissionMenu url={route}>
                <MenuComponent {...props} />
            </PermissionMenu>
        );
    };
};
