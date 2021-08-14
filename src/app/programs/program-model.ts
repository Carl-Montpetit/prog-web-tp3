// Describe what is a program
export class Program {
  //FIXME : maybe some fields will be private here
  constructor( public name: string, public description: string, public monitors: string[],
               public kidsSubscribed: string[], public blocActivities: string[], public activities: string[],
               public price: number , public imagePath: string ) {}
}
