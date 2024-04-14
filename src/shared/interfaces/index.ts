export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export interface IFilters {
  _page: number;
  _limit: number;
}

export type ParamsType = Partial<IFilters>;
