
export default {
  basePath: 'https://MaddiVasavi-19.github.io/Netflix',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
