type City = {
  city: string;
  lat: number;
  lng: number;
};

type CityCategory = {
  european: City[];
  asian: City[];
  african: City[];
};


const AFRICAN_CITIES: City[] = [
  { city: "Cairo", lat: 30.0444, lng: 31.2357 },
  { city: "Nairobi", lat: -1.2864, lng: 36.8172 },
  { city: "Johannesburg", lat: -26.2041, lng: 28.0473 },
  { city: "Lagos", lat: 6.5244, lng: 3.3792 },
  { city: "Addis Ababa", lat: 9.0054, lng: 38.7636 },
  { city: "Casablanca", lat: 33.5731, lng: -7.5898 },
  { city: "Dakar", lat: 14.7167, lng: -17.4677 },
  { city: "Nouakchott", lat: 18.0841, lng: -15.9784 },
  { city: "Kampala", lat: 0.3476, lng: 32.5825 },
  { city: "Dar es Salaam", lat: -6.7924, lng: 39.2083 },
];

const EUROPEAN_CITIES: City[] = [
  { city: "London", lat: 51.5074, lng: -0.1278 },
  { city: "Paris", lat: 48.8566, lng: 2.3522 },
  { city: "Berlin", lat: 52.52, lng: 13.405 },
  { city: "Rome", lat: 41.9028, lng: 12.4964 },
  { city: "Madrid", lat: 40.4168, lng: -3.7038 },
  { city: "Vienna", lat: 48.2082, lng: 16.3738 },
  { city: "Warsaw", lat: 52.2297, lng: 21.0122 },
  { city: "Stockholm", lat: 59.3293, lng: 18.0686 },
  { city: "Athens", lat: 37.9838, lng: 23.7275 },
  { city: "Lisbon", lat: 38.7223, lng: -9.1393 },
];

const ASIAN_CITIES: City[] = [
  { city: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { city: "Beijing", lat: 39.9042, lng: 116.4074 },
  { city: "Mumbai", lat: 19.076, lng: 72.8777 },
  { city: "Istanbul", lat: 41.0082, lng: 28.9784 },
  { city: "Seoul", lat: 37.5665, lng: 126.978 },
  { city: "Bangkok", lat: 13.7563, lng: 100.5018 },
  { city: "Dubai", lat: 25.2048, lng: 55.2708 },
  { city: "Singapore", lat: 1.3521, lng: 103.8198 },
  { city: "Kuala Lumpur", lat: 3.139, lng: 101.6869 },
  { city: "Shanghai", lat: 31.2304, lng: 121.4737 },
];

export const CITIES :CityCategory = {
  european: EUROPEAN_CITIES,
  african: AFRICAN_CITIES, 
  asian: ASIAN_CITIES,
}