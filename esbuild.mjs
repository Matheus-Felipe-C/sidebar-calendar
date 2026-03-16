import esbuild from "esbuild"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const preactRtsESM = path.join(
  __dirname,
  "node_modules/preact-render-to-string/dist/index.mjs"
)

const forcePreactRenderToStringESM = {
  name: "force-preact-render-to-string-esm",
  setup(build) {
    build.onResolve({ filter: /^preact-render-to-string$/ }, () => ({
      path: preactRtsESM,
    }))
  },
}

const result = await esbuild.build({
  entryPoints: ['lib/plugin.js'],
  bundle: true,
  format: "cjs",
  outfile: "build/compiled.js",
  platform: "node",
  write: true,
  plugins: [forcePreactRenderToStringESM],
  jsxFactory: "h",
  jsxFragment: "Fragment",
  loader: {
    ".html": "text",
    ".jsx": "jsx"
  }
})

console.log("Build result", result)