/**
 * base44Client.js
 * This handles the data interaction for Royal Haven.
 * In a real production environment, this would connect to your Base44 backend.
 */

// Mock data to ensure your UI looks "Royal" immediately
const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Azure Waterfront Mansion",
    price: 12500000,
    location: "Malibu, CA",
    bedrooms: 6,
    bathrooms: 8,
    sqft: 12000,
    property_type: "mansion",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200",
    ],
    description: "An architectural masterpiece overlooking the Pacific.",
    amenities: ["Swimming Pool", "Private Gym", "Wine Cellar", "Smart Home"],
    agent_name: "James Wellington",
    agent_phone: "+1 (234) 567-890",
    agent_email: "james@royalhaven.com",
  },
  {
    id: "2",
    title: "The Sterling Estate",
    price: 25000000,
    location: "Beverly Hills, CA",
    bedrooms: 8,
    bathrooms: 12,
    sqft: 22000,
    property_type: "estate",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
    ],
    description: "The pinnacle of luxury living in the heart of 90210.",
    amenities: ["Security System", "Garage", "Garden", "Wine Cellar"],
  },
  {
    id: "3",
    title: "Skyline Penthouse",
    price: 8900000,
    location: "Manhattan, NY",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 6500,
    property_type: "penthouse",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    ],
    description: "Panoramic views of Central Park and the city skyline.",
    amenities: ["Smart Home", "Air Conditioning", "Private Gym"],
  },
];

const MOCK_TESTIMONIALS = [
  {
    id: "1",
    client_name: "Alexandra Sterling",
    client_title: "CEO, Sterling Industries",
    content:
      "Royal Haven exceeded all expectations. Their attention to detail is unparalleled.",
    rating: 5,
    client_image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
];

export const base44 = {
  entities: {
    Property: {
      // Logic for Home.jsx & Properties.jsx
      list: async (sort, limit) => {
        console.log(`Fetching properties sorted by ${sort}, limit ${limit}`);
        return MOCK_PROPERTIES.slice(0, limit);
      },
      // Logic for filtering by "featured"
      filter: async (criteria) => {
        if (criteria.id) {
          return MOCK_PROPERTIES.filter((p) => p.id === criteria.id);
        }
        if (criteria.featured) {
          return MOCK_PROPERTIES.filter((p) => p.featured === true);
        }
        return MOCK_PROPERTIES;
      },
    },
    Inquiry: {
      // Logic for Contact.jsx & PropertyDetails.jsx
      create: async (data) => {
        console.log("Inquiry submitted to Base44:", data);
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { status: "success", data };
      },
    },
    Testimonial: {
      // Logic for Home.jsx
      list: async (sort, limit) => {
        return MOCK_TESTIMONIALS.slice(0, limit);
      },
    },
  },
};
