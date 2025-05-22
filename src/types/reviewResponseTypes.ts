import type { ReviewTypes } from '@/types/reviewTypes';

export type ReviewResponseTypes = {
  reviewCounts: number;
  reviewList: ReviewTypes[];
};
