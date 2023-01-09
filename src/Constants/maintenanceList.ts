export interface MaintenanceList {
  maintenanceList: MaintenanceItem[];
}

export interface MaintenanceItem {
  name: string;
  frequency:
    | 'daily'
    | 'twice a week'
    | 'weekly'
    | 'biweekly'
    | 'monthly'
    | 'every 6 months'
    | 'yearly';
  category: 'looks' | 'cleanliness' | 'health' | 'groceries';
}

const GET_HAIRCUT: MaintenanceItem = {
  name: 'Get haricut and beard',
  frequency: 'biweekly',
  category: 'looks',
};

const GET_GROCERIES: MaintenanceItem = {
  name: 'Get food groceries',
  frequency: 'weekly',
  category: 'groceries',
};

const CLEAN_BATHROOM: MaintenanceItem = {
  name: 'Clean bathroom',
  frequency: 'weekly',
  category: 'cleanliness',
};

const DENTAL_CHECKUP: MaintenanceItem = {
  name: 'Get dental checkup',
  frequency: 'every 6 months',
  category: 'health',
};

const WORKOUT: MaintenanceItem = {
  name: 'Work out',
  frequency: 'daily',
  category: 'health',
};

const LAUNDRY: MaintenanceItem = {
  name: 'Do laundry',
  frequency: 'weekly',
  category: 'cleanliness',
};

const myMaintenanceList: MaintenanceItem[] = [
  GET_HAIRCUT,
  CLEAN_BATHROOM,
  DENTAL_CHECKUP,
  WORKOUT,
  GET_GROCERIES,
  LAUNDRY,
];
export const maintenanceList: MaintenanceList = {
  maintenanceList: myMaintenanceList,
};
