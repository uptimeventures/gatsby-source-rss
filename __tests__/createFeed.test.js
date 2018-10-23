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

const { createFeed } = require('../internals')

const feed = {
  link: ['https://www.nicholaswyoung.com/rss.xml'],
  title: ['Nicholas Young'],
  description: ['Testing array parsing'],
  item: [
    {
      link: ['https://www.nicholaswyoung.com/rss.xml'],
      title: ['Nicholas Young'],
      description: ['Testing array parsing'],
      pubDate: 'Fri, 28 Sep 2018 07:00:00 GMT',
      'content:encoded': '<h1>Testing encoded content</h1>',
    },
  ],
}

it('should return parent and children nodes', () => {
  const createNode = jest.fn()
  const feedNode = createFeed(feed, createNode)

  expect(createNode.mock.calls.length).toEqual(1)

  expect(createNode).toBeCalledWith(
    expect.objectContaining({
      id: 'https://www.nicholaswyoung.com/rss.xml',
      description: 'Testing array parsing',
      date: 'Fri, 28 Sep 2018 07:00:00 GMT',
      link: 'https://www.nicholaswyoung.com/rss.xml',
      html: '<h1>Testing encoded content</h1>',
      children: [],
      internal: {
        contentDigest: expect.any(String),
        type: 'RSSEntry',
      },
    })
  )
})
