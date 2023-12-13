export type Order = {
   created_at: string;
  updated_at: string;
  uric_acid: string;
  value: string;
  body_weight:{
    'kurang normal': number;
    'normal': number;
    'melebihi normal': number;
  };
  blood_oxygen: {
    'kurang normal': number;
    'normal': number;
    'melebihi normal': number;
  };
  body_temperature: {
    'kurang normal': number;
    'normal': number;
    'melebihi normal': number;
  };
  blood_sugar: {
    'kurang normal': number;
    'normal': number;
    'melebihi normal': number;
  };

  heart_rate:{
    'kurang normal': number;
    'normal': number;
    'melebihi normal': number;
  };
  
  blood_pressure: Array<{ value: string; end_at: string }>;
  averange_data: string;
  average: string;
  systolic_pressure: string;
  diastolic_pressure: string;
  combined_data: {
    blood_oxygen: Array<{ value: string; end_at: string }>;
    heart_rate: Array<{ value: string; end_at: string }>;
    body_weight: Array<{ value: string; end_at: string }>;

  };
}
