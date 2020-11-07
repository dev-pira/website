/* eslint-disable camelcase */
import { GoogleSpreadsheet } from 'google-spreadsheet'
import googleSheetsCredentials from '../credentials/google-sheets-api'

export default async function googleSheetsApi(): Promise<GoogleSpreadsheet> {
  const { sheet_id, ...credentials } = googleSheetsCredentials

  const doc = new GoogleSpreadsheet(sheet_id)

  await doc.useServiceAccountAuth(credentials)

  await doc.loadInfo()

  return doc
}
