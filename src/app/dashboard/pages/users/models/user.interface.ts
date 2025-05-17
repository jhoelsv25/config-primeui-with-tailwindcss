export interface UserData {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
export interface Contributor {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'admin' | 'contributor';
  status: 'activo' | 'inactivo' | 'expulsado';
  joinDate: Date;
  contributions: number;
  currentCycle: number;
  isTurnTaken: boolean;
  lastPaymentDate: Date;
  missedPayments: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface Hair {
  color: string;
  type: string;
}

export interface Attendance {
  id: number;
  userId: number;
  date: string;
  checkIn: string;
  checkOut: string;
  status: boolean;
}

export interface Education {
  id: number;
  userId: number;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
  grade: string;
  activities: string;
  description: string;
}

export interface OptionState {
  value: string;
  label: string;
}
