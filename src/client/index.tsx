import '@babel/polyfill';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'es6-promise/auto';
import 'whatwg-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Checkbox, Input } from 'uibot-ui-antd';
import 'uibot-ui-antd/es/button/style/css';
import 'uibot-ui-antd/es/checkbox/style/css';
const render = async () => {
    ReactDOM.render(
        <div>
            测试测试
            <Button type="primary">Primary</Button>
            {/* <Checkbox onChange={()=> {}}>Checkbox</Checkbox> */}
            {/* <Input placeholder="Basic usage" /> */}
        </div>,
        document.getElementById('react-app')
    );
    // tslint:disable-next-line: triple-equals
};

render();
