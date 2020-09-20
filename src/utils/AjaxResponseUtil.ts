interface AjaxResponse {
  /**
   * 业务执行结果编码
   */
  code: string;
  /**
   * 业务是否执行成功
   */
  success: boolean;
  /**
   * 响应数据
   */
  resp: any;
  /**
   * 错误消息列表
   */
  msgList: Array<string>;
}

/**
 * 提取响应数据
 * @param ajaxResponse 服务端的原始响应
 */
export function extractBizData(ajaxResponse: AjaxResponse) {
  return ajaxResponse.resp;
}
