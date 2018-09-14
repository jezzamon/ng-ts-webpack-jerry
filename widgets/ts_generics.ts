// set generics
function LogAndReturn<T>(thing: T): T {
  console.log(thing)
  return thing;
}

interface Magazine {
  title: string;
}

// setting the type on function call
let someString: string = LogAndReturn<string>('do this');

let newMag: Magazine = {title: 'Web Dev Monthly'};
let someMag: Magazine = LogAndReturn<Magazine>(newMag);


// GENERIC INTERFACE
interface Inventory<T> {
  getNewestItem():T;
  addItem(newItem: T): void;
  getAllItems(): Array<T>

}

let bookInventory: Inventory<Magazine>

let allBooks: Array<Magazine> = bookInventory.getAllItems();


// GENERIC CLASSES
class Catalog<T> implements Inventory<T> {

  private catalogItems = new Array<T>();
  
  getNewestItem() {
    return this.catalogItems[0];
  }

  addItem(newItem: T) {
    this.catalogItems.push(newItem);
  }

  getAllItems() {
    return this.catalogItems;
  }
}

let bookCatalog = new Catalog<Magazine>();