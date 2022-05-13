export type ThemeType = 'dark' | 'light';

export type GetListItemType<T> = T extends Array<infer V> ? V : unknown;

export type FeatureData = GetListItemType<
  typeof import('../components/_home/sections/RoadMap/features-data.json')
>;

export type ObjectDimension = {
  width: number;
  height: number;
};
