export const riskMeta = (probability: number) => {
  if (probability < 0.33) return { label: 'Low', color: '#15c47e', icon: '✅' }
  if (probability < 0.66) return { label: 'Medium', color: '#f5a524', icon: '⚠️' }
  return { label: 'High', color: '#ef4444', icon: '❤️' }
}
