export async function seed(knex) {
  await knex('week').insert([
    {
      week: 'Week 1',
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
