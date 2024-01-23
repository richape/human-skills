import connection from './connection.ts'
import { Cohort } from '../../models/Cohorts.ts'

export async function getAllCohorts(db = connection): Promise<Cohort[]> {
  return db('cohort').select()
}
