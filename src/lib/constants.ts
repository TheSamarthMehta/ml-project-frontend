import { z } from 'zod'
import type { ModelCardInfo } from '../types/model'

export const API_BASE = 'http://localhost:5000'

export const formSchema = z.object({
  age: z.coerce.number({
    required_error: 'Age is required',
    invalid_type_error: 'Please enter a valid age',
  }).min(30, 'Age must be at least 30 years').max(85, 'Age must be at most 85 years'),
  
  gender: z.enum(['male', 'female'], { 
    required_error: 'Please select a gender',
    invalid_type_error: 'Please select a valid gender'
  }),
  
  blood_pressure: z.coerce.number({
    required_error: 'Blood pressure is required',
    invalid_type_error: 'Please enter a valid blood pressure',
  }).min(80, 'Blood pressure must be at least 80 mmHg').max(220, 'Blood pressure must be at most 220 mmHg'),
  
  cholesterol: z.coerce.number({
    required_error: 'Cholesterol level is required',
    invalid_type_error: 'Please enter a valid cholesterol level',
  }).min(100, 'Cholesterol must be at least 100 mg/dL').max(400, 'Cholesterol must be at most 400 mg/dL'),
  
  heart_rate: z.coerce.number({
    required_error: 'Heart rate is required',
    invalid_type_error: 'Please enter a valid heart rate',
  }).min(40, 'Heart rate must be at least 40 bpm').max(160, 'Heart rate must be at most 160 bpm'),
  
  diabetes: z.boolean(),
  smoking: z.boolean(),
  obesity: z.boolean(),
  alcohol: z.number().optional(),
  physical_activity: z.number().optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
})

export type FormValues = z.infer<typeof formSchema>

export const defaultInput: FormValues = {
  age: '' as any,
  gender: '' as any,
  blood_pressure: '' as any,
  cholesterol: '' as any,
  heart_rate: '' as any,
  diabetes: false,
  smoking: false,
  obesity: false,
  alcohol: 0,
  physical_activity: 1,
  height: 170,
  weight: 70,
}

export const STATIC_MODEL_CARDS: ModelCardInfo[] = [
  {
    key: 'ann',
    name: 'ANN',
    description: 'Learns layered heart patterns similar to the brain.',
  },
  {
    key: 'svm',
    name: 'SVM',
    description: 'Separates low vs high risk with a flexible boundary.',
  },
  {
    key: 'logistic_regression',
    name: 'Logistic Regression',
    description: 'Classic medical-style classifier built for probabilities.',
  },
  {
    key: 'knn',
    name: 'KNN',
    description: 'Finds people like you and mirrors their outcomes.',
  },
  {
    key: 'linear_regression',
    name: 'Linear Regression',
    description: 'Straight-line trends for quick, interpretable risk.',
  },
  {
    key: 'polynomial_regression',
    name: 'Polynomial Regression',
    description: 'Captures gentle curves in your heart risk story.',
  },
]
