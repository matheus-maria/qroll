export enum UserType { 'Aluno','Professor' }
export enum SemesterType { 'EC1','EC2','EC3','EC4','EC5','EC6','EC7','EC8','EC9','EC10' }
export enum WeekType { 'domingo','segunda','terça','quarta','quinta','sexta','sabado' }

export class User {
   _id?: string
   name: string
   type: UserType
   ra: string
   password: string
   semester?: SemesterType
}

export class Class {
   _id?: string
   name: string
   weekDay: WeekType
   index: number
   semester: SemesterType
   user: string
   
   get Week(): string {
      return `${this.weekDay}, ${this.index}º aula`
   }

   set Week(value: string) {

      let comma = value.indexOf(',')

      this.weekDay = WeekType[value.substring(0, comma)]
      this.index = +value.substring(comma + 1, comma + 2)     
   }
}