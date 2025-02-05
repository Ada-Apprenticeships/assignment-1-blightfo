//Importing classes
import Inventory from "./Inventory.js";
import Clothing from "./Clothing.js";
import Electronics from "./Electronics.js";

// Creating Inventory Usage
const inventory = new Inventory();

// Creating Product Instances for the subclasses
const tshirt = new Clothing("A123", "T-shirt", 19.99, 100, "L", "Cotton");
const jeans = new Clothing("B456", "Jeans", 49.99, 50, "M", "Denim");
const laptop = new Electronics("C789", "Laptop", 799.99, 20, "Dell", "1 year");

// Adding to the inventory
try {
  inventory.addProduct(tshirt);
  inventory.addProduct(jeans);
  inventory.addProduct(laptop);

// Updating the Quantity
  inventory.updateQuantity("A123", 50);
 
// Retrieving Produce and should show the details
  const retrievedProduct = inventory.getProduct("B456");
  console.log(retrievedProduct); 
  
// Removes T-shirt(Product)
  inventory.removeProduct("A123");
} catch (error) {
  console.error("An error occurred:", error.message);
}
