export async function up(knex) {
  return knex.schema.createTable('cohort', (table) => {
    table.increments('id')
    table.string('cohort')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('cohort')
}
