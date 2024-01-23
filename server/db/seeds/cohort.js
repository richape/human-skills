export async function seed(knex) {
  await knex('cohort').insert([
    {
      cohort: 'Harakeke (Tāmaki Makaurau / Auckland)',
    },
    {
      cohort: 'Kahikātea (Tāmaki Makaurau / Auckland)',
    },
    {
      cohort: 'Mataī (Tāmaki Makaurau / Auckland)',
    },
    {
      cohort: 'Pōhutukawa (Tāmaki Makaurau / Auckland)',
    },
    {
      cohort: 'Tohora (Tuihono / On-line)',
    },
    {
      cohort: 'Whai (Tuihono / On-line)',
    },
    {
      cohort: 'Mako (Tuihono / On-line)',
    },
    {
      cohort: 'Manaia (Tuihono / On-line)',
    },
    {
      cohort: 'Pikopiko (Tuihono / On-line part-time)',
    },
    {
      cohort: 'Karaka (Tuihono / On-line part-time)',
    },
    {
      cohort: 'Karengo (Tuihono / On-line part-time)',
    },
    {
      cohort: 'Kawakawa (Tuihono / On-line part-time)',
    },
    {
      cohort: 'Kahu (Pōneke / Wellington)',
    },
    {
      cohort: 'Piwakawaka (Pōneke / Wellington)',
    },
    {
      cohort: 'Kōtare (Pōneke / Wellington)',
    },
    {
      cohort: 'Roa (Pōneke / Wellington)',
    },
  ])
}
