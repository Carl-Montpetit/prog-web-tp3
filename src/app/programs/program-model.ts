// Describe what is a program
export class Program {
  constructor( public name: string, public description: string, public monitors: string[],
               public kidsSubscribed: string[], public blocActivities: string[], public activities: string[],
               public price: number , public imagePath: string ) {}
}

export class ShoppingItem {
  constructor( public name: string, public kidSubscribed: string, public price: number) {}
}
