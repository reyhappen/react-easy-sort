import path from 'node:path'
import fse from 'node:fs/promises'

async function copyFile(file) {
  const buildPath = path.resolve(process.cwd(), './dist/', path.basename(file.to || file.from))
  await fse.copyFile(file.from, buildPath)
  console.log(`Copied ${file.from} to ${buildPath}`)
}

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(process.cwd(), './package.json'), 'utf8')
  const newPackageData = {
    ...JSON.parse(packageData),
    scripts: undefined,
    devDependencies: undefined,
    jest: undefined,
    'lint-staged': undefined,
    main: './index.js',
    'umd:main': './index.global.js',
    unpkg: './index.global.js',
    jsdelivr: './index.global.js',
    module: './index.mjs',
    'jsnext:main': './index.mjs',
    types: './index.d.ts',
    exports: {
      '.': {
        import: './index.mjs',
        require: './index.js',
        types: './index.d.ts',
      },
    },
  }
  const buildPath = path.resolve(process.cwd(), './dist/package.json')

  await fse.writeFile(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8')
  console.log(`Created package.json in ${buildPath}`)

  return newPackageData
}

async function run() {
  await Promise.all([{ from: './README.md' }].map((file) => copyFile(file)))
  await createPackageFile()
}

run()
