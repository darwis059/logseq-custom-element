const esbuild = require('esbuild');

const results = esbuild
  .buildSync({
    entryPoints: ['src/index.ts'],
    outdir: 'lib',
    bundle: true,
    sourcemap: true,
    minify: true,
    target: ['esnext'],
  })
// .catch(() => process.exit(1));

console.log(results);