import esbuild from "esbuild";
import process from "process";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
// import glob from 'glob-all';
// import purgecssPlugin2 from 'esbuild-plugin-purgecss-2';
import builtins from "builtin-modules";

// const banner =

const prod = process.argv[2] === "production";

esbuild
  .build({
    entryPoints: ["./src/main.ts", "./src/styles.scss"],
    bundle: true,
    metafile: true,
    plugins: [
      sassPlugin({
        async transform(source) {
          const { css } = await postcss([autoprefixer]).process(source);
          return css;
        },
      }),
    ],

    external: [
      "obsidian",
      "electron",
      "@codemirror/autocomplete",
      "@codemirror/closebrackets",
      "@codemirror/collab",
      "@codemirror/commands",
      "@codemirror/comment",
      "@codemirror/fold",
      "@codemirror/gutter",
      "@codemirror/highlight",
      "@codemirror/history",
      "@codemirror/language",
      "@codemirror/lint",
      "@codemirror/matchbrackets",
      "@codemirror/panel",
      "@codemirror/rangeset",
      "@codemirror/rectangular-selection",
      "@codemirror/search",
      "@codemirror/state",
      "@codemirror/stream-parser",
      "@codemirror/text",
      "@codemirror/tooltip",
      "@codemirror/view",
      ...builtins,
    ],
    format: "cjs",
    watch: !prod,
    target: "es2016",
    logLevel: "info",
    sourcemap: prod ? false : "inline",
    treeShaking: true,
    outdir: "./dist",
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
