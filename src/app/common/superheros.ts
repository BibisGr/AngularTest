export interface Superheros {
  squadName: string;
  homeTown: string;
  created: string;
  secretBase: string;
  active: boolean;
  members: Member[];
}

export interface Member {
  name: string;
  age: number;
  SecretIdentity: string;
  Powers: string[];
}
