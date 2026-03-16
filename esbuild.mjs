import esbuild from "esbuild"

const result = await esbuild.build({
  entryPoints: ['lib/plugin.js'],
  bundle: true,
  format: "iife",
  outfile: "build/compiled.js",
  platform: "node",
  write: true,
  jsxFactory: "h",
  jsxFragment: "Fragment",
  loader: {
    ".html": "text",
    ".jsx": "jsx",
    ".js": "jsx"
  }
})

console.log("Build result", result)