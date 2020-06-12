import { AppStore } from './appStore';
import { action, computed, observable, runInAction, toJS } from 'mobx';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { CacheKeys } from '../../public/const';
import { getCache } from '../../public/fun';

export default class i18nStore {
    appStore: AppStore;
    @observable private antI18nData: any;
    constructor(appStore: AppStore) {
        this.appStore = appStore;
    }

    @computed get antLocaleData() {
        return toJS(this.antI18nData);
    }

    public initClient = () => {
        let language = getCache(CacheKeys.Language) || 'zh';
    };
    public getAntI18nData = (language) => {
        switch (language) {
            case 'zh':
                return zhCN;
            case 'en':
                return enUS;
            default:
                return zhCN;
        }
    };
}
