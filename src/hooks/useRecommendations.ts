import { useMemo } from 'react'
import type { Recommendations, PredictionResult } from '../types/model'

export function useRecommendations(
  result: PredictionResult | null
): Recommendations {
  return useMemo(() => {
    const risk = result?.risk_level || 'Low'

    const recommendationsMap: Record<string, Recommendations> = {
      High: {
        diet: [
          'Prioritize vegetables, lean proteins, and fiber each meal.',
          'Cut down salty and fried foods this week.',
          'Swap sugary drinks for water or unsweetened tea.',
        ],
        exercise: [
          'Aim for 30 minutes of brisk walking most days.',
          'Add two short strength sessions to support metabolism.',
        ],
        lifestyle: [
          'Book a primary care check for blood pressure and cholesterol review.',
          'Reduce tobacco exposure and seek support if quitting.',
        ],
      },
      Medium: {
        diet: [
          'Fill half your plate with produce and fiber-rich sides.',
          'Limit red meat to once weekly; choose fish or poultry instead.',
        ],
        exercise: [
          'Target 25 minutes of moderate cardio four times weekly.',
          'Stretch or take movement breaks each hour when sitting.',
        ],
        lifestyle: [
          'Track blood pressure monthly to spot changes early.',
          'Keep caffeine moderate and prioritize 7-8 hours of sleep.',
        ],
      },
      Low: {
        diet: [
          'Maintain balanced meals with whole grains and healthy fats.',
          'Stay hydrated and keep sodium modest.',
        ],
        exercise: [
          'Keep a mix of cardio and light strength work weekly.',
          'Take daily walks after meals to support heart health.',
        ],
        lifestyle: [
          'Continue not smoking and manage stress with short breaks.',
          'Schedule annual checkups to stay ahead of changes.',
        ],
      },
    }

    return recommendationsMap[risk]
  }, [result])
}
