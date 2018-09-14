interface CatalogItem {
  catalogNumber: number;
}

class CatalogConstraint<T extends CatalogItem> implements Inventory<T> {

  private catalogItems = new Array<T>()
  
  getNewestItem() {
    return this.getNewestItem[0];
  }

  addItem(newItem: T) {

  }

  getAllItems() {
    return this.catalogItems;
  }
}

let catalogConstraint = new CatalogConstraint();

