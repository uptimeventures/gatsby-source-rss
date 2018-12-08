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

const crypto = require('crypto')
const rp = require('request-promise')
const { parseString } = require('xml2js')
const lget = require('lodash.get')

const transform = i => new Promise((resolve, reject) =>
  parseString(i, (e, p) => e ? reject(e) : resolve(p))
)

const load = uri => rp({ uri, transform })

const select = (i, key) => {
  const value = lget(i, key)
  if (Array.isArray(value)) {
    return value[0]
  }

  return value
}

const toDate = str => str ? new Date(str) : null

const digest = i =>
  crypto
    .createHash('md5')
    .update(JSON.stringify(i))
    .digest('hex')

const createChildren = (nodes, parent, createNode) => {
  const children = []

  nodes.forEach(n => {
    const link = select(n, 'link')

    children.push(link)

    const node = {
      id: link,
      title: select(n, 'title'),
      description: select(n, 'description'),
      html: select(n, 'content:encoded'),
      date: toDate(select(n, 'pubDate')),
      link,
      parent,
      children: [],
    }

    node.internal = {
      type: 'RSSEntry',
      contentDigest: digest(node),
    }

    createNode(node)
  })

  return children
}

const createFeed = (feed, createNode) => {
  const link = select(feed, 'link')
  const children = createChildren(feed.item || [], link, createNode)

  const node = {
    id: link,
    title: select(feed, 'title'),
    description: select(feed, 'description'),
    parent: null,
    link,
    children,
  }

  node.internal = { type: 'RSSFeed', contentDigest: digest(node) }

  return node
}

module.exports = {
  load,
  createFeed,
}
