import type { Experience } from '@/types/resume'

export const experiences: Experience[] = [
  {
    id: 1,
    company: '투비소프트에이엑스',
    period: '2023.11 ~ 2026.03',
    role: '선임 / 웹 서비스 React(TypeScript) 개발 및 레거시 고도화',
    details: [
      {
        id: 1,
        project: 'Nexacro Legacy 시스템 React Migration',
        description:
          '내부 프로젝트 및 농협물류 업무 시스템을 대상으로 기존 Nexacro 화면을 React와 TypeScript 기반의 모던 웹 환경으로 전환했습니다.',
        tasks: [
          '기존 Nexacro 화면 구조와 데이터 바인딩 흐름 분석',
          'React 컴포넌트 기반 화면 구조 설계 및 재구성',
          'TypeScript 기반 화면 개발 및 Java/REST API 연동',
          'MySQL, MSSQL 기반 업무 데이터 조회 흐름 이해 및 화면 반영',
        ],
      },
      {
        id: 2,
        project: 'MiPlatform Legacy 시스템 Nexacro Migration',
        description:
          'LX 판토스, 한국마사회 등 노후화된 MiPlatform 기반 업무 시스템을 Nexacro N 환경으로 고도화했습니다.',
        tasks: [
          'MiPlatform 기반 레거시 화면 및 업무 로직 분석',
          'Nexacro N 기반 화면 개발 및 기능 이관',
          'MSSQL 기반 데이터 조회 쿼리 확인 및 화면 연동',
          '대용량 데이터 그리드 처리와 화면 성능 개선 대응',
        ],
      },
    ],
  },
  {
    id: 2,
    company: '포에버소프트',
    period: '2022.01 ~ 2022.11',
    role: '사원 / 플랫폼 외부 API 연동 및 대시보드 개발',
    details: [
      {
        id: 1,
        project: '실시간 센서 데이터 모니터링 대시보드 구축',
        description:
          '케이티알파 에어맵 프로젝트에서 Vue.js와 Java 기반의 실시간 모니터링 대시보드를 개발하고 운영 기능 개선에 대응했습니다.',
        tasks: [
          'Vue.js 기반 모니터링 대시보드 화면 개발',
          'Java 기반 REST API 연동 및 데이터 표시 처리',
          'PostgreSQL 기반 센서 데이터 조회 및 통계 쿼리 개선',
          '운영 중 발생하는 기능 개선 요청 대응',
        ],
      },
    ],
  },
  {
    id: 3,
    company: '이글루코퍼레이션',
    period: '2019.07 ~ 2020.09',
    role: '사원 / 금융권 망 보안관제(SOC) 및 로그 분석',
    details: [
      {
        id: 1,
        project: '금융권 통합 보안관제(SOC) 및 실시간 로그 분석',
        description:
          '금융권 보안관제 업무를 수행하며 SIEM 솔루션과 보안 네트워크 장비를 기반으로 실시간 로그 분석 및 침해 대응을 경험했습니다.',
        tasks: [
          'SIEM 기반 보안 이벤트 모니터링 및 로그 분석',
          '이상 트래픽 탐지 및 침해 의심 이벤트 대응',
          'SQL Injection, XSS 등 웹 취약점 관련 보안 이벤트 분석',
          'DDoS 공격 대응 및 트래픽 분석 경험',
        ],
      },
    ],
  },
  {
    id: 4,
    company: '시큐어스',
    period: '2018.05 ~ 2019.07',
    role: '사원 / 공공기관 인프라 기술지원 및 장애 조치',
    details: [
      {
        id: 1,
        project: '경찰청 네트워크 인프라 기술 지원 및 장애 조치',
        description:
          '공공기관 네트워크 및 보안 장비 운영 환경에서 장애 대응과 인프라 기술지원을 수행했습니다.',
        tasks: [
          '네트워크 스위치, 라우터, 방화벽 장비 운영 지원',
          'Linux 및 Windows Server 기반 시스템 운영 환경 이해',
          '장애 발생 시 원인 파악 및 조치 지원',
          '보안 및 네트워크 장비 유지보수 업무 수행',
        ],
      },
    ],
  },
]