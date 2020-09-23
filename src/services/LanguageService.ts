import AjaxUtil from '@/utils/AjaxUtil';

const searchLanguageListUrl = '/api/language';

/**
 * 查询语言列表
 */
export function searchLanguageList() {
  return AjaxUtil.get(searchLanguageListUrl);
}
