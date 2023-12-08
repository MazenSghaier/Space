module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static', // Adjust the publicPath based on your project setup
              outputPath: 'static', // Specify the output directory for the assets
            },
          },
        ],
      });
  
      return config;
    },
  };