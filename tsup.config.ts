import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: ['src/index.tsx'],
    format: ['esm', 'cjs', 'iife'],
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    dts: true,
    env: {
      NODE_ENV: 'production',
    },
    // legacyOutput: true,
    // outExtension({ format }) {
    //   if (format === 'cjs') {
    //     return {
    //       js: '.js',
    //     }
    //   }
    //   if (format === 'esm') {
    //     return {
    //       js: '.module.js',
    //     };
    //   }

    //   return {
    //     js: `.${format}.js`,
    //   }
    // },
  }
})
