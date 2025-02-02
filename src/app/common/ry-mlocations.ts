export interface RyMLocations {
  info: Info;
  results: Location[];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}
