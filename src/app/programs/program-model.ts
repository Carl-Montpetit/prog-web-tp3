// Describe what is a program
export class Program {
  constructor( private name: string, private description: string, private monitors: Monitor[],
               private blocsActivities: BlocActivities[], private activities: Activity[],
               private price: number ) {
  }
}

export class ShoppingItem {
  constructor( public name: string, public kidSubscribed: string, public price: number ) {
  }
}

// definition of a session
export class Session {
  constructor( private session: Program[]) {
  }
}

/**
 * Definition of Type
 */
export enum Type {
  A = 'art',
  SC = 'science',
  SP = 'sport',
  AA = 'aquatique',
  EX = 'exploration',
  MU = 'musique',
  ED = 'éducatif',
}

/**
 * list of existing monitors
 */
export enum Monitor {
  CM = 'Carl Montpetit',
  MJ = 'Matthew Jovani',
  PL = 'Patrick Lafontaine',
  PD = 'Pascal Desjardin',
  MP = 'Michelle Pignar',
  JM = 'Jennefer Morgan',
}

/**
 * Definition of activity
 */
export class Activity {
  constructor( private name: string, private type: Type ) {
  }

  getName(): string {
    return this.name;
  }

  getType(): Type {
    return this.type;
  }
}

/**
 * Definition of a bloc of activities
 */
export class BlocActivities {
  constructor( private blocActivities: Activity[] ) {
  }

  /**
   * return the activity of a given position in the array of activities
   * @param i
   */
  getActivity( i: number ): Activity {
    return this.blocActivities[ i ];
  }
}
