const http = require('node:http'), fs = require('node:fs'), path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.json':'application/json', '.png':'image/png' };
http.createServer((request,response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname); }
  catch { response.writeHead(400); response.end(); return; }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep) || file.includes(path.sep + '.git' + path.sep)) { response.writeHead(403); response.end(); return; }
  fs.readFile(file,(error,bytes) => {
    if (error) { response.writeHead(404); response.end('Not found'); return; }
    response.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    response.end(bytes);
  });
}).listen(5064,'127.0.0.1',() => console.log('Nipun’s games: http://127.0.0.1:5064/'));
