export interface Sheep {
  name: string;
  title: string;
  tagline: string;
}

export interface SheepDetailed extends Sheep {
  description: string;
}
