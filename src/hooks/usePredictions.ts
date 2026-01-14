import { useMutation } from '@tanstack/react-query'
import type { FormValues } from '../lib/constants'
import type { PredictionResult } from '../types/model'
import { API_BASE } from '../lib/constants'

export function usePredictMutation() {
  return useMutation<PredictionResult, Error, { values: FormValues }>({
    mutationFn: async ({ values }) => {
      const res = await fetch(`${API_BASE}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Unable to get prediction')
      return data as PredictionResult
    },
  })
}
