/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * Usage of this source code is governed by a BSD-style
 * license that can be found in LICENSE.md, at the root
 * of this repository. Alternatively, visit
 * https://spdx.org/licenses/BSD-3-Clause.html.
 *
 * @flow
 */

const { load, createFeed } = require('./internals')

async function sourceNodes({ boundActionCreators }, options = {}) {
  const { createNode } = boundActionCreators
  const { feeds = [] } = options

  for (const f of feeds) {
    const { rss } = await load(f)

    if (rss && rss.channel) {
      const sources = (Array.isArray(rss.channel)
        ? rss.channel : [rss.channel]
      )

      sources.forEach(f => createFeed(f, createNode))
    }
  }

  return Promise.resolve()
}

module.exports = {
  sourceNodes,
}
