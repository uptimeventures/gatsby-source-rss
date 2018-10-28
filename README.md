# gatsby-source-rss

[![CI Status
Badge](https://gitlab.com/uptimeventures/gatsby-source-rss/badges/master/build.svg)](https://gitlab.com/uptimeventures/gatsby-source-rss)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Made by Uptime Ventures
badge](https://img.shields.io/badge/made_by-Uptime_Ventures-fcb040.svg)](https://www.uptime.ventures)

Import an existing RSS feed into your Gatsby site.

## Installation 

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
