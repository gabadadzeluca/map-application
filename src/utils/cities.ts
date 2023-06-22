type City = [string, number, number];

const AFRICAN_CITIES: City[] = [
  ["Cairo", 30.0444, 31.2357],
  ["Nairobi", -1.2864, 36.8172],
  ["Johannesburg", -26.2041, 28.0473],
  ["Lagos", 6.5244, 3.3792],
  ["Addis Ababa", 9.0054, 38.7636],
  ["Casablanca", 33.5731, -7.5898],
  ["Dakar", 14.7167, -17.4677],
  ["Nouakchott", 18.0841, -15.9784],
  ["Kampala", 0.3476, 32.5825],
  ["Dar es Salaam", -6.7924, 39.2083],
];

const EUROPEAN_CITIES: City[] = [
  ["London", 51.5074, -0.1278],
  ["Paris", 48.8566, 2.3522],
  ["Berlin", 52.52, 13.405],
  ["Rome", 41.9028, 12.4964],
  ["Madrid", 40.4168, -3.7038],
  ["Vienna", 48.2082, 16.3738],
  ["Warsaw", 52.2297, 21.0122],
  ["Stockholm", 59.3293, 18.0686],
  ["Athens", 37.9838, 23.7275],
  ["Lisbon", 38.7223, -9.1393],
];

const ASIAN_CITIES: City[] = [
  ["Tokyo", 35.6895, 139.6917],
  ["Beijing", 39.9042, 116.4074],
  ["Mumbai", 19.076, 72.8777],
  ["Istanbul", 41.0082, 28.9784],
  ["Seoul", 37.5665, 126.978],
  ["Bangkok", 13.7563, 100.5018],
  ["Dubai", 25.2048, 55.2708],
  ["Singapore", 1.3521, 103.8198],
  ["Kuala Lumpur", 3.139, 101.6869],
  ["Shanghai", 31.2304, 121.4737],
];

type CityCategory = {
  european: City[];
  asian: City[];
  african: City[];
};

export const CITIES: CityCategory = {
  european: EUROPEAN_CITIES,
  asian: ASIAN_CITIES,
  african: AFRICAN_CITIES,
};
