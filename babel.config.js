module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "babel-plugin-root-import",
        {
          paths: [
            {
              rootPathSuffix: "./src",
              rootPathPrefix: "@/",
            },
            {
              rootPathSuffix: "./assets",
              rootPathPrefix: "@assets/",
            },
          ],
        },
      ],
    ],
  };
};
