export interface Product {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface TransactionItem {
  id?: string;
  name: string;
  quantity: number;
  unit: string;
}
