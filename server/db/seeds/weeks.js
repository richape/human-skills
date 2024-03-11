export async function seed(knex) {
  await knex('week').insert([
    {
      week: 'Week 1',
      Question_1:
        'THS01 - Create and follow a self directed learning plan, incorporating well-being / oranga',
      Question_2:
        'THS05 - Reflect on your personal and professional growth while demonstrating the ability to show self compassion',
      Question_3:
        'Demonstrate the ability to create & contribute to a supportive and inclusive team culture',
    },
    {
      week: 'Week 2',
    },
    {
      week: 'Week 3',
    },
    {
      week: 'Week 4',
    },
    {
      week: 'Week 5',
    },
    {
      week: 'Week 6',
    },
    {
      week: 'Week 7',
    },
    {
      week: 'Week 8',
    },
    {
      week: 'Week 9',
    },
  ])
}
