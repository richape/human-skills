export async function seed(knex) {
  await knex('response').insert([
    {
      response: '',
    },
  ])
}
