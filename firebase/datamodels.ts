import { collection, CollectionReference, DocumentData, query, where, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, orderBy, limit, startAfter, endBefore, startAt, endAt } from 'firebase/firestore';
import { db } from '../firebase/init';

interface Supplier {
  id?: string;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  products: string[];
  notes?: string;
}

interface Order {
  id?: string;
  supplierId: string;
  items: { productId: string; quantity: number; unitPrice: number }[];
  orderDate: Date;
  deliveryDate: Date;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  totalAmount: number;
  notes?: string;
}

interface Customer {
  id?: string;
  name: string;
  contactPerson?: string;
  phone: string;
  email: string;
  address: string;
  loyaltyPoints: number;
  notes?: string;
}

interface HistoricalData {
  id?: string;
  date: Date;
  guests: number;
  reservations: number;
  events: string[];
  weather: string;
  specialOffers: string[];
  notes?: string;
}

// Generic collection function
const createCollection = <T extends DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

// Collections
const suppliersCollection = createCollection<Supplier>('suppliers');
const ordersCollection = createCollection<Order>('orders');
const customersCollection = createCollection<Customer>('customers');
const historicalDataCollection = createCollection<HistoricalData>('historicalData');

// CRUD operations (examples, can be expanded)

// Suppliers
export const addSupplier = (supplier: Supplier) => addDoc(suppliersCollection, supplier);
export const getSupplier = (id: string) => getDoc(doc(suppliersCollection, id));
export const updateSupplier = (id: string, supplier: Partial<Supplier>) => updateDoc(doc(suppliersCollection, id), supplier);
export const deleteSupplier = (id: string) => deleteDoc(doc(suppliersCollection, id));
export const getSuppliers = () => getDocs(suppliersCollection);

// Orders
export const addOrder = (order: Order) => addDoc(ordersCollection, order);
export const getOrder = (id: string) => getDoc(doc(ordersCollection, id));
export const updateOrder = (id: string, order: Partial<Order>) => updateDoc(doc(ordersCollection, id), order);
export const deleteOrder = (id: string) => deleteDoc(doc(ordersCollection, id));
export const getOrders = () => getDocs(ordersCollection);
export const getOrdersBySupplier = (supplierId: string) => {
  const q = query(ordersCollection, where('supplierId', '==', supplierId));
  return getDocs(q);
};

// Customers
export const addCustomer = (customer: Customer) => addDoc(customersCollection, customer);
export const getCustomer = (id: string) => getDoc(doc(customersCollection, id));
export const updateCustomer = (id: string, customer: Partial<Customer>) => updateDoc(doc(customersCollection, id), customer);
export const deleteCustomer = (id: string) => deleteDoc(doc(customersCollection, id));
export const getCustomers = () => getDocs(customersCollection);

// Historical Data
export const addHistoricalData = (data: HistoricalData) => addDoc(historicalDataCollection, data);
export const getHistoricalData = (id: string) => getDoc(doc(historicalDataCollection, id));
export const updateHistoricalData = (id: string, data: Partial<HistoricalData>) => updateDoc(doc(historicalDataCollection, id), data);
export const deleteHistoricalData = (id: string) => deleteDoc(doc(historicalDataCollection, id));
export const getAllHistoricalData = () => getDocs(historicalDataCollection);
export const getHistoricalDataByDateRange = (startDate: Date, endDate: Date) => {
  const q = query(historicalDataCollection, where('date', '>=', startDate), where('date', '<=', endDate), orderBy('date'));
  return getDocs(q);
};
