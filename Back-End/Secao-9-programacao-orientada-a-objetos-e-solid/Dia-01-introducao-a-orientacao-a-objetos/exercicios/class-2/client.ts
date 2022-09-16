class Client {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Order {
  name: string;
  price: number;
  client: Client;
  payment: string;
  discount?: number;
  consumedItens: Array<string> = [];

  constructor(name: string, price: number, client: Client) {
    this.name = name;
    this.price = price;
    this.client = client;
  }
}

class OrderItem {

}