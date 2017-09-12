/**
 * MdsProgress
 */

export type IProgressTheme = 'info' | 'success' | 'warning' | 'danger'

// This will ensure the percentage is a whole number between 0 and 100
export const ProgressValue = (percentage: number) => Math.min(100, Math.max(0, Math.floor(percentage)))

export * from './mds-progress-bar'
export * from './mds-progress-circle'
