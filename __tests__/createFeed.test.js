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
