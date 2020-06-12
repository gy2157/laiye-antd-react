import * as React from 'react';
interface ContentProps {
    className?: string;
    children?: any;
}
export default class LoginPage extends React.PureComponent<ContentProps, any> {
    render() {
        console.log('==========LoginPage=======');
        return <div>登录</div>;
    }
}
