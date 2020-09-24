import { searchLanguageList, searchMenuList } from '@/services/GlobalService';
import { extractBizData } from '@/utils/AjaxResponseUtil';
import { getLanguageCode } from '@/utils/I18nUtil';

export default {
  namespace: 'GlobalModel',
  state: {
    // 语言列表
    languageList: null,
    // 选中的语言编码
    selectedLanguageCode: getLanguageCode(),
    // 菜单列表
    menuList: [],
  },
  reducers: {
    setMenuList(state: any, { payload: { menuList } }: { payload: any }) {
      return { ...state, menuList };
    },
    setLanguageList(
      state: any,
      { payload: { languageList } }: { payload: any },
    ) {
      return { ...state, languageList };
    },
    setSelectedLanguageCode(
      state: any,
      { payload: { selectedLanguageCode } }: { payload: any },
    ) {
      return { ...state, selectedLanguageCode };
    },
  },
  effects: {
    *searchMenuList(
      action: any,
      {
        put,
        call,
        select,
      }: { put: Function; call: Function; select: Function },
    ) {
      const ajaxResp = yield call(searchMenuList);
      const menuList = extractBizData(ajaxResp);
      yield put({
        type: 'setMenuList',
        payload: { menuList },
      });
    },
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
  },
};
