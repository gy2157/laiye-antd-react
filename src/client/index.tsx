import '@babel/polyfill';
import 'core-js/es/map';
import 'core-js/es/set';
import 'es6-promise/auto';
import 'whatwg-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import appStore from './stores/appStore';
import Portal from './components/layouts/Portal';

import { ConfigProvider } from '@laiye/uibot-ui-antd';
const render = async () => {
    console.time('render time');
    // await appStore.beforeRender(browserHistory);
    // @ts-ignore
    ReactDOM.render(
        <Provider appStore={appStore} i18nStore={appStore.i18nStore} userStore={appStore.userStore}>
            <ConfigProvider locale={appStore['i18nStore'].antLocaleData}>
                <Portal />
            </ConfigProvider>
        </Provider>,
        document.getElementById('react-app')
    );
    // tslint:disable-next-line: triple-equals
    // if (appStore.i18nStore.language == 'zh') {
    //     appStore.afterRender();
    // }
    console.timeEnd('render time');
};
render();
