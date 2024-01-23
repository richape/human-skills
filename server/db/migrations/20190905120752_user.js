export async function up(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.string('full_name').primary()
    table.string('email')
    table.string('cohort')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('user')
}
