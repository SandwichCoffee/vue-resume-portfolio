import type { Profile } from '@/types/resume'

export const profile: Profile = {
  name: '김세현',
  title: 'Frontend Developer Portfolio',
  headline: '인프라의 바닥부터 이해하는 웹 개발자입니다.',
  description:
    '보안관제와 인프라 운영 경험을 바탕으로, Vue.js와 React TypeScript 기반의 웹 시스템 개발 및 레거시 시스템 고도화 경험을 쌓아온 개발자입니다.',
  email: 'giveshajob@gmail.com',
  phone: '010-5709-2772',
  githubUrl: 'https://github.com/SandwichCoffee/ReactProject',
  portfolioUrl: 'https://sandwichcoffee.github.io/ReactProject/#/',
  links: [
    {
      id: 1,
      label: 'GitHub',
      url: 'https://github.com/SandwichCoffee/ReactProject',
    },
    {
      id: 2,
      label: 'Portfolio',
      url: 'https://sandwichcoffee.github.io/ReactProject/#/',
    },
    {
      id: 3,
      label: 'Email',
      url: 'mailto:giveshajob@gmail.com',
    },
  ],
}