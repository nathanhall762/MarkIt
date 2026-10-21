
import type { WorkflowStep } from './WorkflowSteps';

interface WorkflowValidationState {
  currentStep: WorkflowStep;
  userId: string | undefined;
  selectedCollection: string;
  QRCode: string;
  actionType: string;
  photo1: string;
  title: string;
  titlePreview: string;
  description: string;
  descriptionPreview: string;
  priceRange: number[];
}

export function canAdvanceWorkflow(
  state: WorkflowValidationState
): boolean {
  const {
    currentStep,
    userId,
    selectedCollection,
    QRCode,
    actionType,
    photo1,
    title,
    titlePreview,
    description,
    descriptionPreview,
    priceRange,
  } = state;

  const hasTitle = title.trim() !== '';
  const hasTitlePreview = titlePreview.trim() !== '';
  const hasDescription = description.trim() !== '';
  const hasDescriptionPreview = descriptionPreview.trim() !== '';

  switch (currentStep) {
    case 'select-collection':
      return Boolean(userId);

    case 'scan-qr':
      return QRCode.trim() !== '';

    case 'choose-action':
      return Boolean(selectedCollection && QRCode && actionType);

    case 'take-photo':
      return Boolean(selectedCollection && QRCode && actionType && photo1);

    case 'edit-title':
      return Boolean(
        selectedCollection &&
        QRCode &&
        actionType &&
        photo1 &&
        hasTitlePreview
      );

    case 'edit-description':
      return Boolean(
        selectedCollection &&
        QRCode &&
        actionType &&
        photo1 &&
        hasTitle &&
        hasDescriptionPreview
      );

    case 'set-price':
      return Boolean(
        selectedCollection &&
        QRCode &&
        actionType &&
        photo1 &&
        hasTitle &&
        hasDescription
      );

    case 'review':
      return Boolean(
        selectedCollection &&
        QRCode &&
        actionType &&
        photo1 &&
        hasTitle &&
        hasDescription &&
        priceRange.length > 0
      );
  }
}
