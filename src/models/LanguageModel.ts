import {
  searchLanguageList,
  searchI18nResource,
} from '@/services/LanguageService';
import { extractBizData } from '@/utils/AjaxResponseUtil';

export default {
  namespace: 'LanguageModel',
  state: {
    // 语言列表
    languageList: null,
    // 国际化资源
    i18nResource: null,
    // 选中的语言编码
    selectedLanguageCode: 'zh-CN',
  },
  reducers: {
    setLanguageList(
      state: any,
      { payload: { languageList } }: { payload: any },
    ) {
      return { ...state, languageList };
    },
    setI18nResource(
      state: any,
      { payload: { i18nResource } }: { payload: any },
    ) {
      return { ...state, i18nResource };
    },
    setSelectedLanguageCode(
      state: any,
      { payload: { selectedLanguageCode } }: { payload: any },
    ) {
      return { ...state, selectedLanguageCode };
    },
  },
  effects: {
    /**
     * 查询语言列表
     * @param action
     * @param put
     * @param call
     * @param select
     */
    *searchLanguageList(
      action: any,
      {
        put,
        call,
        select,
      }: { put: Function; call: Function; select: Function },
    ) {
      // 这里可以根据param来确定下面这个call的参数
      const ajaxResp = yield call(searchLanguageList);
      const languageList = extractBizData(ajaxResp);
      yield put({
        type: 'setLanguageList',
        payload: { languageList },
      });
    },
    /**
     * 根据语言编码查询国际化资源列表
     * @param languageCode 语言编码
     * @param put
     * @param call
     * @param select
     */
    *searchI18nResource(
      { payload: { languageCode } }: any,
      {
        put,
        call,
        select,
      }: { put: Function; call: Function; select: Function },
    ) {
      const ajaxResp = yield call(searchI18nResource, languageCode);
      const i18nResource = extractBizData(ajaxResp);
      yield put({
        type: 'setI18nResource',
        payload: { i18nResource },
      });
    },
  },
};
