export const workflowOrder = [
  'select-collection',
  'scan-qr',
  'choose-action',
  'take-photo',
  'edit-title',
  'edit-description',
  'set-price',
  'review',
] as const;

export type WorkflowStep = (typeof workflowOrder)[number];

export function getNextStep(
  currentStep: WorkflowStep
): WorkflowStep | undefined {
  const index = workflowOrder.indexOf(currentStep);
  return workflowOrder[index + 1];
}

export function getPreviousStep(
  currentStep: WorkflowStep
): WorkflowStep | undefined {
  const index = workflowOrder.indexOf(currentStep);
  return workflowOrder[index - 1];
}