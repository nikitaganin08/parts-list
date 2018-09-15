export class Part {
  id: number;
  name: string;
  necessity: boolean;
  quantity: number;


  constructor(id: number, name: string, necessity: boolean, quantity: number) {
    this.id = id;
    this.name = name;
    this.necessity = necessity;
    this.quantity = quantity;
  }
}
