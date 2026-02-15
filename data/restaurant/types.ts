export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export type MenuData = MenuCategory[];
