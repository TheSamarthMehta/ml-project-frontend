export type ModelKey =
  | 'linear_regression'
  | 'polynomial_regression'
  | 'logistic_regression'
  | 'knn'
  | 'svm'
  | 'ann'

export type RiskLevel = 'Low' | 'Medium' | 'High'

export type PredictionResult = {
  model: string
  model_name?: string
  model_key: ModelKey
  risk_level: RiskLevel
  probability: number
  top_factors: Array<{ feature: string; importance: number }>
  message: string
  metrics: {
    accuracy: number
    precision: number
    recall: number
    f1: number
  }
  description: string
}

export type Recommendations = {
  diet: string[]
  exercise: string[]
  lifestyle: string[]
}

export type ModelCardInfo = { key: ModelKey; name: string; description: string }

export type CompareResponse = { mode: 'compare'; predictions: PredictionResult[] }
export type PredictResponse = PredictionResult | CompareResponse
