import googleSheetsApi from '../services/googleSheetsApi'

export interface Testimonial {
  text: string
  name: string
}

export default async function getTestimonials(): Promise<Testimonial[]> {
  const doc = await googleSheetsApi()

  const sheet = doc.sheetsByIndex[1]
  const rows = await sheet.getRows()

  const testimonials = rows.map(({ text, name }) => ({
    text,
    name
  }))

  return testimonials
}
