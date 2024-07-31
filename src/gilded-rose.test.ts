describe("Gilded Rose", () => {
  describe("Normal item", () => {
    it("should never have a negative quality", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should degrade its quality by 1 before the sell-by date", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should degrade its quality by 2 after the sell-by date", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should decrease the sellIn by 1 each day", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });
  });

  describe("Sulfuras Item", () => {
    it("should always have quality 80", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should never have to be sold", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });
  });

  describe("Aged Brie Item", () => {
    it("should increase in quality by 1 each day", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should never have a quality more than 50", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should decrease the sellIn by 1 each day", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });
  });

  describe("Backstage passes Item", () => {
    it("should have a quality of zero after the sell-by date", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should never have a quality more than 50", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should increase in quality by 1 each day when sellIn > 10", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should increase in quality by 2 each day when 5 < sellIn <= 10", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should increase in quality by 3 each day when 0 < sellIn <= 5", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });

    it("should decrease the sellIn by 1 each day", () => {
      // ARRANGE
      // ACT
      // ASSERT
    });
  });
});
