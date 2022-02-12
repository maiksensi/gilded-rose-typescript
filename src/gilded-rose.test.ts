import { AGED_BRIE, GildedRose, Item } from 'gilded-rose'

describe('Gilded Rose', () => {
  describe('updateQuality()', () => {
    it('should decrease `sellIn` and `quality` by 1', () => {
      const item: Item = new Item('common item', 5, 6)
      const gildedRose = new GildedRose([item])

      gildedRose.updateQuality()

      expect(gildedRose.items[0]).toMatchInlineSnapshot(`
        Item {
          "name": "common item",
          "quality": 5,
          "sellIn": 4,
        }
      `)

      gildedRose.updateQuality()

      expect(gildedRose.items[0]).toMatchInlineSnapshot(`
        Item {
          "name": "common item",
          "quality": 4,
          "sellIn": 3,
        }
      `)
    })

    it('should decrease `quality` by 2, when `sellIn <= 0`', () => {
      const item: Item = new Item('common item', 1, 7)
      const gildedRose = new GildedRose([item])

      gildedRose.updateQuality()

      expect(gildedRose.items[0]).toMatchInlineSnapshot(`
        Item {
          "name": "common item",
          "quality": 6,
          "sellIn": 0,
        }
      `)

      gildedRose.updateQuality()

      expect(gildedRose.items[0]).toMatchInlineSnapshot(`
        Item {
          "name": "common item",
          "quality": 4,
          "sellIn": -1,
        }
      `)

      gildedRose.updateQuality()

      expect(gildedRose.items[0]).toMatchInlineSnapshot(`
        Item {
          "name": "common item",
          "quality": 2,
          "sellIn": -2,
        }
      `)
    })

    it('should NOT decrease `quality` below 0', () => {
      const items: Item[] = [
        new Item('common item 1', 3, 1),
        new Item('common item 2', 1, 1),
        new Item('common item 3', 0, 0),
      ]
      const gildedRose = new GildedRose(items)

      gildedRose.updateQuality()
      gildedRose.updateQuality()
      gildedRose.updateQuality()

      expect(gildedRose.items).toMatchInlineSnapshot(`
        Array [
          Item {
            "name": "common item 1",
            "quality": 0,
            "sellIn": 0,
          },
          Item {
            "name": "common item 2",
            "quality": 0,
            "sellIn": -2,
          },
          Item {
            "name": "common item 3",
            "quality": 0,
            "sellIn": -3,
          },
        ]
      `)
    })

    it('should increase `quality` of "Aged Brie" by 1', () => {
      const item: Item = new Item(AGED_BRIE, 6, 0)
      const gildedRose = new GildedRose([item])

      gildedRose.updateQuality()
      gildedRose.updateQuality()
      gildedRose.updateQuality()
      gildedRose.updateQuality()

      expect(gildedRose.items[0]).toMatchInlineSnapshot(`
        Item {
          "name": "Aged Brie",
          "quality": 4,
          "sellIn": 2,
        }
      `)
    })

    it('should increase `quality` of "Aged Brie" by 2, when `sellIn <= 0`', () => {
      const item: Item = new Item(AGED_BRIE, 0, 0)
      const gildedRose = new GildedRose([item])

      gildedRose.updateQuality()
      gildedRose.updateQuality()
      gildedRose.updateQuality()
      gildedRose.updateQuality()

      expect(gildedRose.items[0]).toMatchInlineSnapshot(`
        Item {
          "name": "Aged Brie",
          "quality": 8,
          "sellIn": -4,
        }
      `)
    })

    it('should NOT increase `quality` above 50', () => {
      const items: Item[] = [
        new Item(AGED_BRIE, 1, 49),
        new Item(AGED_BRIE, 0, 49),
        new Item(AGED_BRIE, 0, 50),
      ]
      const gildedRose = new GildedRose(items)

      gildedRose.updateQuality()
      gildedRose.updateQuality()
      gildedRose.updateQuality()

      expect(gildedRose.items).toMatchInlineSnapshot(`
        Array [
          Item {
            "name": "Aged Brie",
            "quality": 50,
            "sellIn": -2,
          },
          Item {
            "name": "Aged Brie",
            "quality": 50,
            "sellIn": -3,
          },
          Item {
            "name": "Aged Brie",
            "quality": 50,
            "sellIn": -3,
          },
        ]
      `)
    })

    it.skip('should NOT decrease `sellIn` and `quality` of "Sulfuras"', () => {
      const item: Item = new Item('Sulfuras', 0, 0)
      const gildedRose = new GildedRose([item])

      gildedRose.updateQuality()
      gildedRose.updateQuality()
      gildedRose.updateQuality()
      gildedRose.updateQuality()

      expect(gildedRose.items[0]).toMatchInlineSnapshot()
    })
    it.skip('should increase `quality` of "Backstage passes" by 1, when `sellIn > 10`', () => {})
    it.skip('should increase `quality` of "Backstage passes" by 2, when `5 < sellIn <= 10`', () => {})
    it.skip('should increase `quality` of "Backstage passes" by 3 when `0 < sellIn <= 5``', () => {})
    it.skip('should set `quality` of "Backstage passes" to 0, when `sellIn <= 0`', () => {})
  })
})
