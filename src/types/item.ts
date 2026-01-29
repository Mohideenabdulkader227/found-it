export type ItemType = 'lost' | 'found';

export type ItemCategory = 
  | 'electronics'
  | 'documents'
  | 'keys'
  | 'wallet'
  | 'jewelry'
  | 'clothing'
  | 'bags'
  | 'pets'
  | 'other';

export type ItemStatus = 'active' | 'resolved' | 'expired';

export interface Item {
  id: string;
  type: ItemType;
  title: string;
  description: string;
  category: ItemCategory;
  location: string;
  date: string;
  imageUrl?: string;
  status: ItemStatus;
  createdAt: string;
  contactName: string;
}

export const CATEGORIES: { value: ItemCategory; label: string; icon: string }[] = [
  { value: 'electronics', label: 'Electronics', icon: '📱' },
  { value: 'documents', label: 'Documents & IDs', icon: '📄' },
  { value: 'keys', label: 'Keys', icon: '🔑' },
  { value: 'wallet', label: 'Wallet & Cards', icon: '💳' },
  { value: 'jewelry', label: 'Jewelry', icon: '💍' },
  { value: 'clothing', label: 'Clothing', icon: '👕' },
  { value: 'bags', label: 'Bags & Luggage', icon: '🎒' },
  { value: 'pets', label: 'Pets', icon: '🐕' },
  { value: 'other', label: 'Other', icon: '📦' },
];
