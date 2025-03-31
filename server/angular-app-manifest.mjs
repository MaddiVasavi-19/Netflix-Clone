
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://MaddiVasavi-19.github.io/Netflix/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Netflix"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 531, hash: '6563a5f3b650d280d1792fc432a4daddb5a4458f76fee2cbfd40f506858ba805', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1044, hash: 'abae8187a26094c717f9bcff6af3a85539eff40e79e723697a0c772c0c76fbee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20870, hash: 'e137b1dfc22c33abe29c8b279096ae8256a71a530f0d6b575873d8121a3b48ea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
