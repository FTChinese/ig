const path = require('path');

const interpreter = path.resolve(process.env.HOME, './.nvm/versions/node/v12.7.0/bin/node');

/**
## Deploy with PM2

To deploy a node app with PM2, you need take two steps:

1. Initialize the remote folder as specified in `path`:
```
pm2 deploy ecosystem.config.js <app_name> setup
```

2. Deploy Code:
```
pm2 deploy ecosystemconfig.js <app_name>
```

External URL:

http://ig.ftchinese.com
 */
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : "ig",
      script    : "./index.js",
      cwd: __dirname,
      interpreter: interpreter,
      env: {
        NODE_ENV: "development",
        PORT: 4001,
        DEBUG: "ig*"
      },
      env_production : {
        NODE_ENV: "production",
        PORT: 4001,
        DEBUG: "ig*"
      },
      max_restart: 10,
      error_file: path.resolve(process.env.HOME, 'logs/ig-err.log'),
      out_file: path.resolve(process.env.HOME, 'logs/ig-out.log')
    }
  ],
  deploy: {
    "production": {
      user: "node",
      host: "node16",
      ref: "origin/master",
      repo: "https://github.com/FTChinese/ig.git",
      path: "/home/node/next/ig",
      "pre-setup": "node -v",
      "post-setup": "ls -la",
      "pre-deploy-local": "echo 'Begin to deploy'",
      "post-deploy": "npm install --production && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
}
