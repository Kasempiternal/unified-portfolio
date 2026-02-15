export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  color: string;
  width: number;
  height: number;
  url: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Desert Dawn",
    category: "Landscape",
    color: "#D4A574",
    width: 1200,
    height: 1600,
    url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=1600&fit=crop",
  },
  {
    id: 2,
    title: "Urban Geometry",
    category: "Architecture",
    color: "#5A6B7D",
    width: 1600,
    height: 1200,
    url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1600&h=1200&fit=crop",
  },
  {
    id: 3,
    title: "Coastal Serenity",
    category: "Seascape",
    color: "#7BA5B8",
    width: 1400,
    height: 1400,
    url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1400&h=1400&fit=crop",
  },
  {
    id: 4,
    title: "Forest Light",
    category: "Nature",
    color: "#4A6741",
    width: 1200,
    height: 1800,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=1800&fit=crop",
  },
  {
    id: 5,
    title: "City Pulse",
    category: "Street",
    color: "#E8C547",
    width: 1600,
    height: 1200,
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&h=1200&fit=crop",
  },
  {
    id: 6,
    title: "Mountain Echo",
    category: "Landscape",
    color: "#8B9DAF",
    width: 1800,
    height: 1200,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&h=1200&fit=crop",
  },
  {
    id: 7,
    title: "Minimal Space",
    category: "Architecture",
    color: "#C9C5C0",
    width: 1200,
    height: 1600,
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=1600&fit=crop",
  },
  {
    id: 8,
    title: "Golden Hour",
    category: "Portrait",
    color: "#D9A066",
    width: 1200,
    height: 1800,
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=1800&fit=crop",
  },
  {
    id: 9,
    title: "Autumn Path",
    category: "Nature",
    color: "#B8855F",
    width: 1400,
    height: 2000,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=2000&fit=crop",
  },
  {
    id: 10,
    title: "Evening Grace",
    category: "Portrait",
    color: "#6B7280",
    width: 1200,
    height: 1600,
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=1600&fit=crop",
  },
];
