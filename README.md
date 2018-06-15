# gatsby-source-rss

Import an existing RSS feed into your Gatsby site.

## Installation 

**NOTE:** This plugin is of alpha quality. While the configuration
APIis underlying implementation is subject to change... significantly.

`npm install @uptimeventures/gatsby-source-rss`

```javascript
{
  plugins: [
    { 
      resolve: '@uptimeventures/gatsby-source-rss',
      options: {
        feeds: ['https://www.uptime.ventures/blog/rss.xml'],
      },
    },
  ],
}
```

Imported `node`s will be of the type `RSS`. Full text will be imported if the
feed supports it with the item's description as a fallback.

## License

Copyright 2018 Uptime Ventures, Ltd. All rights reserved. Released under the BSD
3-Clause License.
