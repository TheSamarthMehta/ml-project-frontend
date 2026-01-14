import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Activity, Shield, User } from 'lucide-react'
import { defaultInput, formSchema, type FormValues } from '../lib/constants'
import type { PredictionResult } from '../types/model'
import { usePredictMutation, useRecommendations } from '../hooks'
import { Hero } from '../components/layout/Hero'
import { Card, CardHeader, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { FormField } from '../components/forms'
import { LifestyleMarkers } from '../components/forms/LifestyleMarkers'
import { ResultsDisplay } from '../components/ResultsDisplay'
import { ErrorMessage } from '../components/ui/ErrorMessage'
import './Dashboard.css'

export function Dashboard() {
  const [result, setResult] = useState<PredictionResult | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultInput,
    mode: 'onChange',
  })

  const predictMutation = usePredictMutation()
  const recommendations = useRecommendations(result)

  const onSubmit = form.handleSubmit((values) => {
    setResult(null)
    predictMutation.mutate(
      { values },
      {
        onSuccess: (data) => {
          setResult(data)
        },
      }
    )
  })

  return (
    <div className="dashboard-page">
      <Hero
        title="Cardiovascular Risk Assessment"
        description="Enter your health information to receive a personalized cardiovascular risk evaluation based on medical-grade AI analysis."
        badges={[
          { icon: Activity, label: 'Clinical AI' },
          { icon: Shield, label: 'Evidence-Based' },
        ]}
      />

      <div className="dashboard-container">
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="form-section"
        >
          <Card>
            <CardHeader
              title={
                <div className="card-header-with-icon">
                  <div className="card-icon">
                    <User />
                  </div>
                  <div>
                    <h2 className="card-main-title">Patient Information</h2>
                    <p className="card-subtitle">Fill in the details below for risk analysis</p>
                  </div>
                </div>
              }
            />
            <CardContent>
              <FormProvider {...form}>
                <form className="assessment-form" onSubmit={onSubmit}>
                  <div className="form-grid-layout">
                    <FormField
                      name="age"
                      type="number"
                      label="Age (years) *"
                      placeholder="Enter age (e.g., 50)"
                    />

                    <FormField
                      name="gender"
                      type="select"
                      label="Gender *"
                      placeholder="Select gender"
                      options={[
                        { value: '', label: 'Select gender' },
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                      ]}
                    />

                    <FormField
                      name="blood_pressure"
                      type="number"
                      label="Blood Pressure (mmHg) *"
                      placeholder="Enter systolic BP (e.g., 120)"
                    />

                    <FormField
                      name="cholesterol"
                      type="number"
                      label="Cholesterol (mg/dL) *"
                      placeholder="Enter cholesterol (e.g., 200)"
                    />

                    <FormField
                      name="heart_rate"
                      type="number"
                      label="Heart Rate (bpm) *"
                      placeholder="Enter resting heart rate (e.g., 75)"
                    />
                  </div>

                  {/* Lifestyle Factors */}
                  <div className="lifestyle-section">
                    <h3 className="lifestyle-title">Lifestyle Factors</h3>
                    <LifestyleMarkers />
                  </div>

                  {/* Actions */}
                  <div className="form-actions">
                    <Button
                      type="submit"
                      isLoading={predictMutation.isPending}
                      disabled={!form.formState.isValid}
                      className="generate-button"
                    >
                      Generate Risk Assessment
                    </Button>
                  </div>

                  {predictMutation.error && (
                    <ErrorMessage message={predictMutation.error.message} />
                  )}
                </form>
              </FormProvider>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="results-section"
        >
          <Card>
            <CardHeader
              title={
                <div className="card-header-content">
                  <span className="card-eyebrow">Assessment Results</span>
                  <h2 className="card-title">Risk Analysis</h2>
                </div>
              }
            />
            <CardContent>
              {result ? (
                <ResultsDisplay 
                  result={result} 
                  formData={form.getValues()}
                  recommendations={[
                    ...(recommendations.diet || []),
                    ...(recommendations.exercise || []),
                    ...(recommendations.lifestyle || [])
                  ]}
                />
              ) : (
                <div className="results-placeholder">
                  <Activity className="placeholder-icon" />
                  <h3 className="placeholder-title">No Assessment Yet</h3>
                  <p className="placeholder-text">
                    Complete the health profile form and click "Assess Risk" to receive your cardiovascular risk analysis.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
