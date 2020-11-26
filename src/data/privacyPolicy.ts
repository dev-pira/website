import googleSheetsApi from '../services/googleSheetsApi'

export default async function getPrivacyPolicy(): Promise<string> {
  try {
    const doc = await googleSheetsApi()

    const sheet = doc.sheetsByIndex[3]

    const { rowCount } = sheet.gridProperties

    await sheet.loadCells(`A1:A${rowCount}`)

    const rows = []

    let rowIndex = 0
    while (sheet.getCell(rowIndex, 0).value) {
      const { textFormat, formattedValue } = sheet.getCell(rowIndex, 0)

      let value = formattedValue

      if (textFormat.italic) value = `<em>${value}</em>`

      if (textFormat.bold) value = `<h2>${value}</h2>`

      value = `<p>${value}</p>`

      rows.push(value)

      rowIndex++
    }

    const privacyPolicy = rows.join('\n')

    return privacyPolicy
  } catch (error) {
    console.error(error)
    return null
  }
}
