import * as React from 'react';
export default class Home extends React.PureComponent<any, any> {
    render() {
        return <div>{this.props.children}</div>;
    }
}
