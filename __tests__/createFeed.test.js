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
    },
  ],
}

it('should return parent and children nodes', () => {
  const createNode = jest.fn()
  const feedNode = createFeed(feed, createNode)

  expect(createNode.mock.calls.length).toEqual(1)
})
