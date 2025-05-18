type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EMAIL = ''

export const WEB_TITLE = 'Name - Personal Website'
export const WEB_DESCRIPTION =
  'A personal website showcasing my work and projects.'
export const FOOTER_COPYRIGHT = '© 2025 Duong Nhat Cuong.'
export const FOOTER_LINK = 'https://github.com/cuogne/'

export const NAME = 'Cừn'
export const JOB_TITLE = 'Sinh Vien'
export const DESCRIPTION =
  'Sinh vien ga nhat HCMUS dang let qua nam 2 !!!'

export const PROJECTS: Project[] = [
  {
    name: 'Flappy Bird',
    description:
      'A game i built using pygame',
    link: 'https://github.com/cuogne/FlappyBird',
    video:
      'https://upload.wikimedia.org/wikipedia/vi/0/0a/Flappy_Bird_icon.png',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'HCMUS - University of Science',
    title: 'Student',
    start: '2023',
    end: 'Present',
    link: 'https://hcmus.edu.vn/',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Loi chao dau tien',
    description: 'Xin chao cac ban',
    link: '/blog/my-first-blog',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/cuogne',
  },
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/cuoq.nc/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/_cuogne/',
  },
]
