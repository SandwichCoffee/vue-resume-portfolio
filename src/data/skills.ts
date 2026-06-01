import type { SkillCategory } from '@/types/resume'

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Frontend',
    description: 'React, Vue.js 기반의 화면 개발과 레거시 UI 전환 경험',
    skills: ['React', 'TypeScript', 'Vue.js', 'JavaScript', 'Nexacro'],
  },
  {
    id: 2,
    title: 'Backend',
    description: 'Java와 Spring 기반의 REST API 개발 및 연동 경험',
    skills: ['Java', 'Spring Framework', 'REST API'],
  },
  {
    id: 3,
    title: 'Database',
    description: '업무 시스템 개발과 데이터 조회를 위한 관계형 DB 활용 경험',
    skills: ['MSSQL', 'MySQL', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Etc',
    description: '형상 관리, 서버 운영 환경, WAS 기반 서비스 운영 이해',
    skills: ['Git', 'Linux/Unix', 'Tomcat'],
  },
]