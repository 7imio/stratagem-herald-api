export enum StratagemType {
  OFFENSIVE = 'Offensive',
  DEFENSIVE = 'Defensive',
  SUPPORT = 'Support',
  MISSION = 'Mission',
}

interface StratagemRaw {
  id: string;
  name: string;
  type: StratagemType;
  imageUrl: string;
}

export interface StratagemAPI extends StratagemRaw {
  code: string;
}

export interface Stratagem extends StratagemRaw {
  code: string[];
}
