import * as webpack from "webpack";
import { resolve } from "path";
import TerserPlugin from "terser-webpack-plugin";
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const enum ENV {
  dev = "development",
  prod = "production",
}
const ENVIRONMENT = process.env.NODE_ENV as ENV;
const IS_DEV = process.env.NODE_ENV === ENV.dev;
const IS_ESM = process.env.NODE_ESM;

const config = <webpack.Configuration>{
  target: "web",
  mode: ENVIRONMENT,
  devtool: IS_DEV ? "inline-source-map" : undefined,
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: IS_ESM ? "[name].js" : "[name].umd.js",
    path: resolve("./lib"),
    publicPath: "/",
    library: "media",
    libraryTarget: IS_ESM ? "var" : "umd",
    libraryExport: IS_ESM ? "" : "default",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".html", ".css"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/i,
        include: resolve("./src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
              plugins: ["@babel/plugin-proposal-object-rest-spread"],
            },
          },
          {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true,
              transpileOnly: true,
              configFile: resolve("./tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin({
    //   dry: false,
    //   protectWebpackAssets: true,
    //   cleanStaleWebpackAssets: true,
    //   cleanOnceBeforeBuildPatterns: [
    //     resolve("./lib/**/*.*"),
    //     resolve("./lib/!*.js"),
    //   ],
    // }),
  ],
  optimization: {
    minimize: !IS_DEV,
    minimizer: [new TerserPlugin()],
  },
};

if (IS_ESM) {
  config!.plugins!.push(new EsmWebpackPlugin());
}

export default config;
