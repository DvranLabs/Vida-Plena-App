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

export interface HistoryEntry {
  id: string;
  date: string;
  type: 'ajuste' | 'compra' | 'salida' | 'creacion' | 'eliminacion';
  productName: string;
  quantityChange: number;
  newQuantity: number;
  reason?: string;
}
