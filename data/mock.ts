export const agriculteurs = [
  {
    id: '1',
    name: 'Rachid Benali',
    location: 'Meknès',
    surface: '5ha maraîchage',
    compostDay: 23,
    compostTotalDays: 27,
    temp: 58,
    humidity: 45,
    biogaz: 12,
    economies: 340,
    status: 'orange', // Fermentation active
    lastVisit: '2024-05-15',
    nextVisit: '2024-06-02',
    cultures: 'Tomates, Poivrons',
    age: 45
  },
  {
    id: '2',
    name: 'Fatima Ouhssain',
    location: 'Fès',
    surface: '3ha céréales',
    compostDay: 8,
    compostTotalDays: 27,
    temp: 64,
    humidity: 55,
    biogaz: 6,
    economies: 180,
    status: 'red', // Démarrage / Chauffe
    lastVisit: '2024-05-20',
    nextVisit: '2024-06-05',
    cultures: 'Blé, Orge',
    age: 38
  },
  {
    id: '3',
    name: 'Mohamed Khalil',
    location: 'Marrakech',
    surface: '8ha oliviers',
    compostDay: 27,
    compostTotalDays: 27,
    temp: 23,
    humidity: 30,
    biogaz: 18,
    economies: 520,
    status: 'green', // Prêt
    lastVisit: '2024-05-10',
    nextVisit: '2024-06-10',
    cultures: 'Olives, Amandes',
    age: 52
  },
  {
    id: '4',
    name: 'Youssef Mansouri',
    location: 'Agadir',
    surface: '10ha agrumes',
    compostDay: 15,
    compostTotalDays: 27,
    temp: 62,
    humidity: 50,
    biogaz: 25,
    economies: 750,
    status: 'orange',
    lastVisit: '2024-05-18',
    nextVisit: '2024-06-01',
    cultures: 'Citrons, Oranges',
    age: 41
  },
  {
    id: '5',
    name: 'Khadija Alami',
    location: 'Larache',
    surface: '4ha fraises',
    compostDay: 2,
    compostTotalDays: 27,
    temp: 28,
    humidity: 60,
    biogaz: 4,
    economies: 120,
    status: 'red',
    lastVisit: '2024-05-25',
    nextVisit: '2024-06-08',
    cultures: 'Fraises, Framboises',
    age: 35
  },
  {
    id: '6',
    name: 'Ahmed Touzani',
    location: 'Béni Mellal',
    surface: '6ha arboriculture',
    compostDay: 25,
    compostTotalDays: 27,
    temp: 45,
    humidity: 40,
    biogaz: 15,
    economies: 410,
    status: 'green',
    lastVisit: '2024-05-12',
    nextVisit: '2024-06-15',
    cultures: 'Pommes, Pêches',
    age: 48
  }
];

export const tempHistoryRachid = [
  { day: 1, temp: 22, humidity: 65 },
  { day: 2, temp: 28, humidity: 64 },
  { day: 3, temp: 38, humidity: 63 },
  { day: 4, temp: 47, humidity: 62 },
  { day: 5, temp: 55, humidity: 60 },
  { day: 6, temp: 61, humidity: 58 },
  { day: 7, temp: 65, humidity: 57 },
  { day: 8, temp: 64, humidity: 56 },
  { day: 9, temp: 63, humidity: 55 },
  { day: 10, temp: 61, humidity: 54 },
  { day: 11, temp: 59, humidity: 53 },
  { day: 12, temp: 57, humidity: 52 },
  { day: 13, temp: 55, humidity: 51 },
  { day: 14, temp: 52, humidity: 50 },
  { day: 15, temp: 50, humidity: 49 },
  { day: 16, temp: 48, humidity: 48 },
  { day: 17, temp: 46, humidity: 47 },
  { day: 18, temp: 44, humidity: 46 },
  { day: 19, temp: 42, humidity: 45 },
  { day: 20, temp: 40, humidity: 44 },
  { day: 21, temp: 38, humidity: 43 },
  { day: 22, temp: 36, humidity: 42 },
  { day: 23, temp: 34, humidity: 41 },
  { day: 24, temp: 32, humidity: 40 },
  { day: 25, temp: 30, humidity: 39 },
  { day: 26, temp: 28, humidity: 38 },
  { day: 27, temp: 26, humidity: 37 },
  { day: 28, temp: 25, humidity: 36 },
  { day: 29, temp: 24, humidity: 35 },
  { day: 30, temp: 23, humidity: 34 }
];

export const biogazHistoryRachid = [
  { month: 'Jan', volume: 10, economies: 280 },
  { month: 'Fév', volume: 11, economies: 310 },
  { month: 'Mar', volume: 14, economies: 390 },
  { month: 'Avr', volume: 13, economies: 360 },
  { month: 'Mai', volume: 12, economies: 340 },
  { month: 'Juin', volume: 15, economies: 420 },
];

export const conseilsRachid = [
  { id: 1, date: '25 Mai', icon: '🌱', text: 'Votre compost entre en phase de maturation.', action: 'Voir détails' },
  { id: 2, date: '24 Mai', icon: '🌧️', text: 'Pensez à couvrir vos tas ce week-end, pluie prévue.', action: 'Compris' },
  { id: 3, date: '22 Mai', icon: '⚠️', text: 'Ton tas a besoin de brassage aujourd\'hui.', action: 'Fait' },
];

export const globalStats = {
  totalFarmers: 12,
  totalCompost: 1200,
  co2Avoided: 450,
  totalSavings: 15000
};
