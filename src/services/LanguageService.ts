import AjaxUtil from '@/utils/AjaxUtil';

const searchLanguageListUrl = '/api/language';
const searchI18nResourceUrl = '/api/language/resource';

/**
 * 查询语言列表
 */
export function searchLanguageList() {
  return AjaxUtil.get(searchLanguageListUrl);
}

/**
 * 根据语言编码查询国际化资源列表
 * @param languageCode
 */
export function searchI18nResource(languageCode: string) {
  return AjaxUtil.get(`${searchI18nResourceUrl}/${languageCode}`);
}
