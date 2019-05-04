export class Aluno {
  static cont:number = 0;
  id: number = ++Aluno.cont;
  nome: string;
  mail: string;
  nascimento: Date;
  curso: string;
}

export const cursos: string[] = ['Caçapava','Guararema','Guaratinguetá','Jacareí', 'Paraibuna', 'Santa Branca', 'São José dos Campos', 'Taubaté'];