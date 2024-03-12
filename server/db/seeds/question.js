export async function seed(knex) {
  await knex('question').insert([
    {
      Question_1: '',
    },
  ])
}
