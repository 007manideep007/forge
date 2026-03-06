export interface GymLocation {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export interface NeighbourhoodData {
  [neighbourhood: string]: GymLocation[];
}

export interface CountryData {
  [country: string]: NeighbourhoodData;
}

export const gymLocations: CountryData = {
  "United States": {
    "Manhattan, New York": [
      { name: "FORGE Midtown", address: "345 W 42nd St, New York, NY 10036", phone: "+1 212-555-0101", hours: "5:00 AM – 10:00 PM" },
      { name: "FORGE SoHo", address: "112 Prince St, New York, NY 10012", phone: "+1 212-555-0102", hours: "6:00 AM – 11:00 PM" },
    ],
    "Brooklyn, New York": [
      { name: "FORGE Williamsburg", address: "78 N 6th St, Brooklyn, NY 11249", phone: "+1 718-555-0201", hours: "5:30 AM – 10:00 PM" },
    ],
    "Los Angeles, California": [
      { name: "FORGE Venice Beach", address: "1501 Ocean Front Walk, Venice, CA 90291", phone: "+1 310-555-0301", hours: "5:00 AM – 10:00 PM" },
      { name: "FORGE West Hollywood", address: "8590 Sunset Blvd, West Hollywood, CA 90069", phone: "+1 323-555-0302", hours: "6:00 AM – 11:00 PM" },
    ],
    "Chicago, Illinois": [
      { name: "FORGE River North", address: "400 N State St, Chicago, IL 60654", phone: "+1 312-555-0401", hours: "5:00 AM – 10:00 PM" },
    ],
  },
  "United Kingdom": {
    "Central London": [
      { name: "FORGE Shoreditch", address: "45 Curtain Rd, London EC2A 3PT", phone: "+44 20 7555 0101", hours: "5:30 AM – 10:00 PM" },
      { name: "FORGE King's Cross", address: "12 Pancras Sq, London N1C 4AG", phone: "+44 20 7555 0102", hours: "6:00 AM – 10:00 PM" },
    ],
    "Manchester": [
      { name: "FORGE Northern Quarter", address: "22 Dale St, Manchester M1 1EZ", phone: "+44 161 555 0201", hours: "6:00 AM – 10:00 PM" },
    ],
  },
  "Australia": {
    "Sydney CBD": [
      { name: "FORGE Surry Hills", address: "120 Crown St, Surry Hills NSW 2010", phone: "+61 2 5550 0101", hours: "5:00 AM – 9:30 PM" },
    ],
    "Melbourne": [
      { name: "FORGE Fitzroy", address: "88 Brunswick St, Fitzroy VIC 3065", phone: "+61 3 5550 0201", hours: "5:30 AM – 10:00 PM" },
      { name: "FORGE South Yarra", address: "15 Toorak Rd, South Yarra VIC 3141", phone: "+61 3 5550 0202", hours: "6:00 AM – 9:30 PM" },
    ],
  },
  "Canada": {
    "Downtown Toronto": [
      { name: "FORGE King West", address: "450 King St W, Toronto, ON M5V 1K4", phone: "+1 416-555-0101", hours: "5:00 AM – 10:00 PM" },
    ],
    "Vancouver": [
      { name: "FORGE Gastown", address: "310 Water St, Vancouver, BC V6B 1B6", phone: "+1 604-555-0201", hours: "5:30 AM – 10:00 PM" },
    ],
  },
};
