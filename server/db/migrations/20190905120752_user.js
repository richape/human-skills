export async function up(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.string('name')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('user')
}
