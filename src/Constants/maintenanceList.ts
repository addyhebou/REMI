export interface MaintenanceList {
  maintenanceList: MaintenanceItem[];
}

export enum MaintenanceFrequency {
  DAILY = 0,
  TWICE_WEEKLY = 1,
  WEEKLY = 2,
  BIWEEKLY = 3,
  MONTHLY = 4,
  HALF_YEAR = 5,
  YEARLY = 6,
}
export const MaintenanceFrequencyMap = {
  0: 'daily',
  1: 'twice a week',
  2: 'weekly',
  3: 'biweekly',
  4: 'monthly',
  5: 'every 6 months',
  6: 'yearly',
};

export interface MaintenanceItem {
  name: string;
  frequency: number;
  category: 'looks' | 'cleanliness' | 'health' | 'groceries' | 'car';
}

const GET_HAIRCUT: MaintenanceItem = {
  name: 'Get haricut and beard',
  frequency: MaintenanceFrequency.BIWEEKLY,
  category: 'looks',
};

const GET_GROCERIES: MaintenanceItem = {
  name: 'Get food groceries',
  frequency: MaintenanceFrequency.WEEKLY,
  category: 'groceries',
};

const CLEAN_BATHROOM: MaintenanceItem = {
  name: 'Clean bathroom',
  frequency: MaintenanceFrequency.WEEKLY,
  category: 'cleanliness',
};

const DENTAL_CHECKUP: MaintenanceItem = {
  name: 'Get dental checkup',
  frequency: MaintenanceFrequency.HALF_YEAR,
  category: 'health',
};

const WORKOUT: MaintenanceItem = {
  name: 'Work out',
  frequency: MaintenanceFrequency.DAILY,
  category: 'health',
};

const LAUNDRY: MaintenanceItem = {
  name: 'Do laundry',
  frequency: MaintenanceFrequency.WEEKLY,
  category: 'cleanliness',
};

const CAR_CHECKUP: MaintenanceItem = {
  name: 'Car checkup',
  frequency: MaintenanceFrequency.MONTHLY,
  category: 'car',
};

const myMaintenanceList: MaintenanceItem[] = [
  GET_HAIRCUT,
  CLEAN_BATHROOM,
  DENTAL_CHECKUP,
  WORKOUT,
  GET_GROCERIES,
  LAUNDRY,
  CAR_CHECKUP,
];
export const maintenanceList: MaintenanceList = {
  maintenanceList: myMaintenanceList,
};
