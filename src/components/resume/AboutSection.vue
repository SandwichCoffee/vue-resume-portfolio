<template>
  <section id="about" class="section">
    <div class="about-card">
      <div class="profile-image">
        👨‍💻
      </div>

      <div class="content">
        <p class="eyebrow">About Me</p>

        <h2>Legacy를 Modern으로, 운영을 이해하는 개발자</h2>

        <p>
          보안관제와 인프라 기술지원 업무를 통해 서비스가 실제 운영 환경에서
          어떻게 동작하고 장애에 대응해야 하는지 경험했습니다. 이후 Java,
          Spring, Vue.js 기반의 대시보드 개발과 Nexacro/MiPlatform 레거시
          시스템 고도화 프로젝트를 수행하며 웹 개발 역량을 확장했습니다.
        </p>

        <p>
          최근에는 React와 TypeScript 기반의 모던 웹 환경으로 레거시 화면을
          전환하는 작업을 경험하며, 화면 구조 설계와 컴포넌트 기반 UI 개발에
          집중하고 있습니다. 단순히 화면을 구현하는 것을 넘어, 운영과 유지보수를
          고려한 안정적인 웹 서비스를 만드는 개발자를 지향합니다.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-card {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 32px;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  background: white;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
}

.profile-image {
  width: 128px;
  height: 128px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #e5e7eb;
  font-size: 48px;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--color-primary);
  font-weight: 700;
}

h2 {
  margin: 0 0 16px;
  font-size: 28px;
  line-height: 1.35;
}

p {
  color: #4b5563;
  line-height: 1.8;
}

.content p:last-child {
  margin-bottom: 0;
}

@media (max-width: 720px) {
  .about-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-image {
    width: 96px;
    height: 96px;
    font-size: 36px;
  }
}
</style>