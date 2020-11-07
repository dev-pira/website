import { NextApiRequest, NextApiResponse } from 'next'
import googleSheetsApi from '../../../services/googleSheetsApi'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const doc = await googleSheetsApi()

  const sheet = doc.sheetsByIndex[0]
  const rows = await sheet.getRows()

  const trails = rows.map(({ trail, time, speaker }) => ({
    trail,
    time,
    speaker
  }))

  res.status(200).json({
    trails: trails
  })
}
