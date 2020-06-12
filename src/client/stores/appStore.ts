import * as React from 'react';
import { action, observable } from 'mobx';
import UserStore from './userStore';
import i18nStore from './i18nStore';

export class AppStore {
    public userStore: UserStore;
    public i18nStore: i18nStore;
    public supportLanguage: any = ['zh', 'en'];
    @observable public language: string;
    @observable private i18nData: any;
    @observable private antI18nData: any;

    constructor() {
        this.userStore = new UserStore(this);
        this.i18nStore = new i18nStore(this);
    }
}

export default new AppStore();
