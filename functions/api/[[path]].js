export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // 1. 构造新的目标 URL
  // url.pathname 是浏览器请求的路径，比如 "/api/admin/login"
  // url.pathname.replace(/^\/api/, '') 会去掉开头的 "/api"，变成 "/admin/login"
  // 然后拼接到目标域名后面，得到 "http://ceshi13.dishait.cn/admin/login"
  // url.search 保留了问号后面的查询参数（如果有的话），比如 "?id=1"
  const targetUrl = 'http://ceshi13.dishait.cn' + url.pathname.replace(/^\/api/, '') + url.search;

  // 2. 创建一个新的请求，转发给目标服务器
  const proxyRequest = new Request(targetUrl, {
    method: request.method,   // 保留原始方法（GET, POST 等）
    headers: request.headers, // 保留原始请求头（包括 Content-Type, Authorization 等）
    body: request.body,       // 保留原始请求体（POST 提交的数据）
  });

  // 3. 发起请求，并把服务器的响应返回给浏览器
  return fetch(proxyRequest);
}