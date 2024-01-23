export async function seed(knex) {
  await knex('user').insert([
    {
      full_name: 'John Smith',
      email: 'john.smith@example.com',
      cohort: 'Harakeke_2024',
    },
  ])
}
