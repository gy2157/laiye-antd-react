import { AppStore } from './appStore';
import * as React from 'react';
export default class UserStore extends React.PureComponent<any, any> {
    public appStore: AppStore;
    constructor(appStore: AppStore) {
        super(appStore);
        this.appStore = appStore;
    }
}
