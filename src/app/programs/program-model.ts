// Describe what is a program
export class Program {
  constructor( public name: string, public description: string, public monitors: string[],
               public kidsSubscribed: string[], public blocActivities: string[], public activities: string[],
               public price: number , public imagePath: string ) {}
}

export class ShoppingItem {
  constructor( public name: string, public kidSubscribed: string, public price: number) {}
}

export enum Type {
  A = 'art',
  SC = 'science',
  SP = 'sport',
  AA = 'aquatique',
  EX = 'exploration',
  MU = 'musique',
  ED = 'éducatif',
}

export enum Monitors {
  CM = 'Carl Montpetit',
  MJ = 'Matthew Jovani',
  PL = 'Patrick Lafontaine',
  PD = 'Pascal Desjardin',
  MP = 'Michelle Pignar',
  JM = 'Jennefer Morgan',
}

export class Activity {
  constructor(private name: string, private type: Type) {
  }

  getName(): string {
    return this.name;
  }

  getType():Type {
    return this.type;
  }
}

export class BlocActivities {
  constructor(private blocActivities: Activity[]) {
  }

  /**
   * return the activity of a given position in the array of activities
   * @param i
   */
  getActivity(i: number): Activity {
    return BlocActivities[i];
  }
}
