import googleSheetsApi from '../services/googleSheetsApi'

interface Lecture {
  active?: boolean
  theme?: string
  time: string
  speaker?: string
  role?: string
  profileUrl?: string
  photoUrl?: string
}

export interface Trail {
  title: string
  speeches: Lecture[]
}

function handlePhotoUrl(url: string) {
  if (!url) return

  const isGoogleDriveUrl = url.match(
    /^https?:\/\/drive\.google\.com\/file\/d\/(.+)\//
  )

  if (!isGoogleDriveUrl) return
  const [, fileId] = isGoogleDriveUrl

  return `https://drive.google.com/uc?id=${fileId}`
}

export default async function getTrails(): Promise<Trail[]> {
  try {
    const doc = await googleSheetsApi()

    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()

    const trails = []

    rows.map(
      ({
        trail: trailTitle,
        theme,
        time,
        speaker,
        role,
        profile_url,
        photo_url,
        active
      }) => {
        const trailNotExists =
          trails.findIndex(({ title }) => title === trailTitle) <= -1

        if (trailNotExists) {
          trails.push({
            title: trailTitle,
            speeches: []
          })
        }

        const trail = trails.find(({ title }) => title === trailTitle)

        const lecture: Lecture = {
          theme: theme || null,
          time: time.replace(':', 'h'),
          speaker: speaker || null,
          role: role || null,
          profileUrl: profile_url || null,
          photoUrl: handlePhotoUrl(photo_url) || null,
          active: active === 'TRUE'
        }

        trail.speeches.push(lecture)
      }
    )
    return trails
  } catch (error) {
    console.error(error)
    return []
  }
}
