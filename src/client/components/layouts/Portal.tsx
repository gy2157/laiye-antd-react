import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import Home from './Home';
import { getMenuConfig, permissionMenuWrap } from '../../../router';
import NotFound from '../status/NotFound';

interface PortalProps {
    appStore?: any;
}
@inject('appStore')
@observer
export default class Portal extends React.PureComponent<PortalProps, any> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { appStore } = this.props;
        console.log('Portal -> render -> appStore', appStore);

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Home>
                        <Switch>
                            {getMenuConfig().map((config, index) => (
                                <Route
                                    path={config.route}
                                    key={index}
                                    component={permissionMenuWrap(config.component)}
                                />
                            ))}
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Home>
                </Switch>
            </BrowserRouter>
        );
    }
}
