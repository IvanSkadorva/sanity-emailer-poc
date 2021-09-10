export interface SanityEvent {
  transactionId: string;
  projectId: string;
  dataset: string;
  ids: {
    created: string[];
    deleted: string[];
    updated: string[];
    all: string[];
  };
}
