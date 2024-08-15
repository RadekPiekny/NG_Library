//import * as from '@faker-js/faker';

export function generateTable_1(rows = 15): ITableFakeData[] {
  const data: any[] = [];

  for (let index = 0; index < rows; index++) {
    const status: 'good' | 'error' | 'warn' = 'good';
    const random: number = Math.random();
    console.log(random);
    /*const row: ITableFakeData = {
      firstName: faker.faker.name.firstName(),
      lastName: faker.faker.name.lastName(),
      gender: faker.faker.name.gender(),
      jobTitle: faker.faker.name.jobTitle(),
      status: random > 0.85 ? 'error' : random > 0.3 ? 'good' : 'warn',
      jobDescription: faker.faker.name.jobDescriptor()
    };
    data.push(row);*/
  }
  return data;
}

export interface ITableFakeData {
  firstName: string;
  lastName: string;
  gender: string;
  jobTitle: string;
  status: 'good' | 'error' | 'warn';
  jobDescription: string;
}
