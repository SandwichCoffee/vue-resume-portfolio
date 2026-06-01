import type { Project } from '@/types/resume'

export const projects: Project[] = [
  {
    id: 1,
    title: 'React Product Management Portfolio',
    summary: 'React와 TypeScript 기반의 상품 관리 포트폴리오',
    description:
      '상품 목록, 검색, 등록, 수정, 삭제 기능을 구현하며 관리자형 CRUD 화면의 기본 흐름을 학습한 개인 포트폴리오 프로젝트입니다. 이후 TanStack Query를 적용해 서버 데이터와 화면 상태를 구분하는 방식까지 확장했습니다.',
    period: '2026',
    role: 'Frontend / Backend',
    techStacks: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Vite',
      'Spring Boot',
      'MyBatis',
      'MySQL',
    ],
    features: [
      '상품 목록 조회 및 검색 조건 처리',
      '상품 등록/수정 폼 구성',
      '상품 삭제 및 사용자 액션 처리',
      '로딩, 에러, 빈 목록 상태 처리',
      'TanStack Query 기반 서버 상태 관리',
      'Spring Boot REST API 연동',
    ],
    learned:
      'React에서 서버에서 가져온 데이터와 화면 내부 상태를 구분하는 방법을 익혔고, query key를 통해 페이지, 검색 조건, 상세 데이터를 분리해 관리하는 흐름을 이해했습니다.',
    githubUrl: 'https://github.com/SandwichCoffee/ReactProduct',
  },
  {
    id: 2,
    title: 'Vue Resume Portfolio',
    summary: 'Vue 3와 TypeScript로 구현하는 이력서형 포트폴리오 페이지',
    description:
      '기존 React Resume 페이지를 Vue 3 Composition API 방식으로 재구현하며, 이력서 데이터를 컴포넌트와 Mock Data로 분리한 원페이지 포트폴리오 프로젝트입니다.',
    period: '2026',
    role: 'Frontend',
    techStacks: ['Vue 3', 'TypeScript', 'Vite', 'CSS', 'lucide-vue-next'],
    features: [
      'Hero, About, Skill, Experience, Project, Contact 섹션 구성',
      '스킬/경력/프로젝트/프로필 데이터 분리',
      'TypeScript 타입 기반 Mock Data 관리',
      'v-for, v-if, 동적 바인딩을 활용한 화면 렌더링',
      '앵커 기반 네비게이션 및 반응형 레이아웃 적용',
    ],
    learned:
      'React의 JSX 기반 컴포넌트 구조와 Vue의 template/script/style 기반 SFC 구조를 비교하며, Vue에서 데이터 기반 화면을 구성하는 방식을 익혔습니다.',
  },
]