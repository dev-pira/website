interface Time {
  hour: number
  minute?: number
}

interface Lecture {
  soon?: boolean
  title?: string
  time: Time
  speaker?: string
  role?: string
  profileUrl?: string
}

interface Trail {
  title: string
  speeches: Lecture[]
}

export const trails: Trail[] = [
  {
    title: 'Backend',
    speeches: [
      {
        title: 'Clean Code',
        time: { hour: 9 },
        speaker: 'Rodrigo Branas',
        role: 'Youtuber',
        profileUrl: 'https://www.linkedin.com/in/rodrigobranas/'
      },
      {
        title: 'Vazamento de memória C#',
        time: { hour: 10 },
        speaker: 'Thiago dos Santos',
        role: 'Venturus',
        profileUrl: null
      },
      {
        title: 'AI com JS',
        time: { hour: 11 },
        speaker: 'Cyntia Zanone',
        role: 'Venturus',
        profileUrl: 'https://www.linkedin.com/in/cynthiazanoni/'
      },
      {
        title: 'Arquitetura de IoT para microservicos em node',
        time: { hour: 13 },
        speaker: 'Erik Aceiro',
        role: 'Raizen',
        profileUrl: 'https://www.linkedin.com/in/erik-aceiro-antonio-aa018925/'
      },
      {
        title: 'Serverless',
        time: { hour: 14 },
        speaker: 'Ericson da Fonseca',
        role: 'Dextra',
        profileUrl: 'https://www.linkedin.com/in/ericsondafonseca/'
      },
      {
        title: 'Finite State Machine',
        time: { hour: 15 },
        speaker: 'Guilherme Biff Zarelli',
        role: 'Luiza Labs',
        profileUrl: 'https://www.linkedin.com/in/gbzarelli/'
      },
      {
        title: 'Data Science: desenvolvendo um modelo de machine learning',
        time: { hour: 16 },
        speaker: 'Wesley Nunes Watanabe',
        role: 'VHSYS',
        profileUrl: 'https://www.linkedin.com/in/wesleywatanabe/'
      }
    ]
  },
  {
    title: 'Frontend',
    speeches: [
      {
        title: 'Clean Code',
        time: { hour: 9 },
        speaker: 'Rodrigo Branas',
        role: 'Youtuber',
        profileUrl: 'https://www.linkedin.com/in/rodrigobranas/'
      },
      {
        title: 'Vazamento de memória C#',
        time: { hour: 1 },
        speaker: 'Thiago dos Santos',
        role: 'Venturus',
        profileUrl: null
      },
      {
        title: 'AI com JS',
        time: { hour: 1 },
        speaker: 'Cyntia Zanone',
        role: 'Venturus',
        profileUrl: 'https://www.linkedin.com/in/cynthiazanoni/'
      },
      {
        title: 'Arquitetura de IoT para microservicos em node',
        time: { hour: 1 },
        speaker: 'Erik Aceiro',
        role: 'Raizen',
        profileUrl: 'https://www.linkedin.com/in/erik-aceiro-antonio-aa018925/'
      },
      {
        title: 'Serverless',
        time: { hour: 1 },
        speaker: 'Ericson da Fonseca',
        role: 'Dextra',
        profileUrl: 'https://www.linkedin.com/in/ericsondafonseca/'
      },
      {
        title: 'Finite State Machine',
        time: { hour: 1 },
        speaker: 'Guilherme Biff Zarelli',
        role: 'Luiza Labs',
        profileUrl: 'https://www.linkedin.com/in/gbzarelli/'
      },
      {
        title: 'Data Science: desenvolvendo um modelo de machine learning',
        time: { hour: 1 },
        speaker: 'Wesley Nunes Watanabe',
        role: 'VHSYS',
        profileUrl: 'https://www.linkedin.com/in/wesleywatanabe/'
      }
    ]
  },
  {
    title: 'Devops',
    speeches: [
      {
        title: 'Clean Code',
        time: { hour: 9 },
        speaker: 'Rodrigo Branas',
        role: 'Youtuber',
        profileUrl: 'https://www.linkedin.com/in/rodrigobranas/'
      },
      {
        title: 'Vazamento de memória C#',
        time: { hour: 1 },
        speaker: 'Thiago dos Santos',
        role: 'Venturus',
        profileUrl: null
      },
      {
        title: 'AI com JS',
        time: { hour: 1 },
        speaker: 'Cyntia Zanone',
        role: 'Venturus',
        profileUrl: 'https://www.linkedin.com/in/cynthiazanoni/'
      },
      {
        title: 'Arquitetura de IoT para microservicos em node',
        time: { hour: 1 },
        speaker: 'Erik Aceiro',
        role: 'Raizen',
        profileUrl: 'https://www.linkedin.com/in/erik-aceiro-antonio-aa018925/'
      },
      {
        title: 'Serverless',
        time: { hour: 1 },
        speaker: 'Ericson da Fonseca',
        role: 'Dextra',
        profileUrl: 'https://www.linkedin.com/in/ericsondafonseca/'
      },
      {
        title: 'Finite State Machine',
        time: { hour: 1 },
        speaker: 'Guilherme Biff Zarelli',
        role: 'Luiza Labs',
        profileUrl: 'https://www.linkedin.com/in/gbzarelli/'
      },
      {
        title: 'Data Science: desenvolvendo um modelo de machine learning',
        time: { hour: 1 },
        speaker: 'Wesley Nunes Watanabe',
        role: 'VHSYS',
        profileUrl: 'https://www.linkedin.com/in/wesleywatanabe/'
      }
    ]
  },
  {
    title: 'UI/UX',
    speeches: [
      {
        soon: true,
        time: { hour: 9 }
      },
      {
        title: 'Vazamento de memória C#',
        time: { hour: 1 },
        speaker: 'Thiago dos Santos',
        role: 'Venturus',
        profileUrl: null
      },
      {
        title: 'AI com JS',
        time: { hour: 1 },
        speaker: 'Cyntia Zanone',
        role: 'Venturus',
        profileUrl: 'https://www.linkedin.com/in/cynthiazanoni/'
      },
      {
        title: 'Arquitetura de IoT para microservicos em node',
        time: { hour: 1 },
        speaker: 'Erik Aceiro',
        role: 'Raizen',
        profileUrl: 'https://www.linkedin.com/in/erik-aceiro-antonio-aa018925/'
      },
      {
        title: 'Serverless',
        time: { hour: 1 },
        speaker: 'Ericson da Fonseca',
        role: 'Dextra',
        profileUrl: 'https://www.linkedin.com/in/ericsondafonseca/'
      },
      {
        title: 'Finite State Machine',
        time: { hour: 1 },
        speaker: 'Guilherme Biff Zarelli',
        role: 'Luiza Labs',
        profileUrl: 'https://www.linkedin.com/in/gbzarelli/'
      },
      {
        title: 'Data Science: desenvolvendo um modelo de machine learning',
        time: { hour: 1 },
        speaker: 'Wesley Nunes Watanabe',
        role: 'VHSYS',
        profileUrl: 'https://www.linkedin.com/in/wesleywatanabe/'
      }
    ]
  },
  {
    title: 'Metodologias Ágeis',
    speeches: [
      {
        title: 'Clean Code',
        time: { hour: 9 },
        speaker: 'Rodrigo Branas',
        role: 'Youtuber',
        profileUrl: 'https://www.linkedin.com/in/rodrigobranas/'
      },
      {
        title: 'Vazamento de memória C#',
        time: { hour: 1 },
        speaker: 'Thiago dos Santos',
        role: 'Venturus',
        profileUrl: null
      },
      {
        title: 'AI com JS',
        time: { hour: 1 },
        speaker: 'Cyntia Zanone',
        role: 'Venturus',
        profileUrl: 'https://www.linkedin.com/in/cynthiazanoni/'
      },
      {
        title: 'Arquitetura de IoT para microservicos em node',
        time: { hour: 1 },
        speaker: 'Erik Aceiro',
        role: 'Raizen',
        profileUrl: 'https://www.linkedin.com/in/erik-aceiro-antonio-aa018925/'
      },
      {
        title: 'Serverless',
        time: { hour: 1 },
        speaker: 'Ericson da Fonseca',
        role: 'Dextra',
        profileUrl: 'https://www.linkedin.com/in/ericsondafonseca/'
      },
      {
        title: 'Finite State Machine',
        time: { hour: 1 },
        speaker: 'Guilherme Biff Zarelli',
        role: 'Luiza Labs',
        profileUrl: 'https://www.linkedin.com/in/gbzarelli/'
      },
      {
        title: 'Data Science: desenvolvendo um modelo de machine learning',
        time: { hour: 1 },
        speaker: 'Wesley Nunes Watanabe',
        role: 'VHSYS',
        profileUrl: 'https://www.linkedin.com/in/wesleywatanabe/'
      }
    ]
  }
]
