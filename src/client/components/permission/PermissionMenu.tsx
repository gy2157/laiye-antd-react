import * as React from 'react';
import { inject, observer } from 'mobx-react';

interface PermissionMenuProps {
    url?: string;
    title?: string;
    children?: any;
}

const PermissionMenu = inject('appStore')(
    observer((props: PermissionMenuProps) => {
        // const { url, appStore } = this.props
        // const permissionsData = appStore.userStore.permissionsData
        // if (isNotNull(url) && !permissionsData.has(url)) {
        //   return (
        //     <Exception type='403' img={require('../../assets/images/403.svg')} actions={() => null} />
        //   )
        // }

        console.log('==========PermissionMenu========');
        return props.children;
    })
);

export default PermissionMenu;
