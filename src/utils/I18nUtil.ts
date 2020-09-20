/**
 * 根据id,从i18nResource中获取国际化消息值,如果值不存在,则使用defaultMessage作为默认值
 * @param i18nResource 国际化资源
 * @param id 国际化资源key
 * @param defaultMessage 国际化资源值不存在时,使用的默认值
 */
export function formatMessage(
  i18nResource: object,
  { id, defaultMessage }: { id: string; defaultMessage: string },
) {
  let message = defaultMessage;
  // @ts-ignore
  if (i18nResource && i18nResource[id]) {
    // @ts-ignore
    message = i18nResource[id];
  }
  return message;
}
