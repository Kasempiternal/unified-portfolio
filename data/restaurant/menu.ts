import type { MenuData } from './types';

export const menuData: MenuData = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Begin your culinary journey with our exquisite starters',
    items: [
      {
        id: 'app-1',
        name: 'Seared Scallops',
        description:
          'Pan-seared diver scallops with cauliflower puree, crispy pancetta, and balsamic reduction',
        price: '$18',
        dietary: ['gluten-free'],
      },
      {
        id: 'app-2',
        name: 'Burrata & Heirloom Tomatoes',
        description:
          'Creamy burrata cheese with seasonal heirloom tomatoes, fresh basil, and aged balsamic',
        price: '$16',
        dietary: ['vegetarian'],
      },
      {
        id: 'app-3',
        name: 'Beef Carpaccio',
        description:
          'Thinly sliced prime beef tenderloin with arugula, shaved parmesan, and truffle aioli',
        price: '$19',
      },
      {
        id: 'app-4',
        name: 'Wild Mushroom Bruschetta',
        description:
          'Toasted artisan bread topped with sauteed wild mushrooms, goat cheese, and thyme',
        price: '$14',
        dietary: ['vegetarian'],
      },
    ],
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Savor our signature dishes crafted with the finest ingredients',
    items: [
      {
        id: 'main-1',
        name: 'Filet Mignon',
        description:
          '8oz center-cut beef tenderloin with roasted garlic butter, truffle mashed potatoes, and seasonal vegetables',
        price: '$48',
        dietary: ['gluten-free'],
      },
      {
        id: 'main-2',
        name: 'Pan-Seared Chilean Sea Bass',
        description:
          'Flaky sea bass with lemon beurre blanc, asparagus, and wild rice pilaf',
        price: '$42',
        dietary: ['gluten-free'],
      },
      {
        id: 'main-3',
        name: 'Herb-Crusted Rack of Lamb',
        description:
          'New Zealand lamb with rosemary crust, roasted fingerling potatoes, and mint chimichurri',
        price: '$52',
      },
      {
        id: 'main-4',
        name: 'Mushroom Risotto',
        description:
          'Creamy arborio rice with wild mushrooms, parmesan, white truffle oil, and microgreens',
        price: '$32',
        dietary: ['vegetarian', 'gluten-free'],
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Indulge in our decadent sweet creations',
    items: [
      {
        id: 'des-1',
        name: 'Creme Brulee',
        description:
          'Classic French custard with caramelized sugar crust and fresh berries',
        price: '$12',
        dietary: ['vegetarian'],
      },
      {
        id: 'des-2',
        name: 'Chocolate Lava Cake',
        description:
          'Warm dark chocolate cake with molten center, vanilla bean ice cream, and raspberry coulis',
        price: '$14',
        dietary: ['vegetarian'],
      },
      {
        id: 'des-3',
        name: 'Tiramisu',
        description:
          'Traditional Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa',
        price: '$13',
        dietary: ['vegetarian'],
      },
      {
        id: 'des-4',
        name: 'Seasonal Fruit Tart',
        description:
          'Buttery pastry crust with vanilla custard and fresh seasonal fruits',
        price: '$11',
        dietary: ['vegetarian'],
      },
    ],
  },
];
