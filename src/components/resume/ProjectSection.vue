<script setup lang="ts">
import { projects } from '@/data/projects'
</script>

<template>
  <section id="projects" class="section">
    <div class="section-header">
      <p class="eyebrow">Personal Projects</p>
      <h2 class="section-title">학습 및 개인 프로젝트</h2>
      <p class="section-summary">
        React와 Vue, Spring Boot 기반으로 학습하고 구현한 주요 프로젝트입니다.
      </p>
    </div>

    <div class="project-list">
      <article v-for="project in projects" :key="project.id" class="project-card card">
        <div class="project-header">
          <h3>{{ project.title }}</h3>
          <p class="project-summary">{{ project.summary }}</p>
        </div>

        <span class="period">{{ project.period }}</span>

        <p class="description">{{ project.description }}</p>

        <div class="meta">
          <span>역할: {{ project.role }}</span>
        </div>

        <div class="tech-list">
          <span v-for="tech in project.techStacks" :key="tech" class="tech-badge">{{ tech }}</span>
        </div>

        <div class="feature-area">
          <h4>주요 기능</h4>
          <ul>
            <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>

        <div class="learned-box">
          <h4>배운 점</h4>
          <p>{{ project.learned }}</p>
        </div>

        <div class="link-area">
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noreferrer">GitHub</a>
          <a v-if="project.deployUrl" :href="project.deployUrl" target="_blank" rel="noreferrer">배포 페이지</a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-card {
  padding: 24px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.project-header h3 {
  margin: 0 0 8px;
  font-size: 22px;
}

.project-summary {
  margin: 0;
  color: var(--color-primary);
  font-weight: 700;
  line-height: 1.5;
}

.period {
  align-self: flex-start;
  flex-shrink: 0;
  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 999px;
  background: #f8fafc;
  color: #4b5563;
  font-size: 14px;
  font-weight: 600;
}

.description {
  margin: 16px 0 16px;
  color: #4b5563;
  line-height: 1.7;
}

.meta {
  margin-bottom: 16px;
  color: #374151;
  font-size: 14px;
  font-weight: 700;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-badge {
  padding: 6px 10px;
  border-radius: 999px;
  background: #eff6ff;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 600;
}

.feature-area {
  margin-top: 16px;
}

.feature-area h4,

.learned-box h4 {
  margin: 0 0 8px;
  font-size: 16px;
}

ul {
  margin: 0;
  padding-left: 20px;
}

li {
  margin-bottom: 6px;
  color: #4b5563;
  line-height: 1.6;
}

.learned-box {
  margin-top: 20px;
  padding: 16px;
  border-radius: 14px;
  background: #f8fafc;
}

.learned-box p {
  margin: 0;
  color: #4b5563;
  line-height: 1.7;
}

.link-area {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.link-area a {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 999px;
  color: #111827;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
}

.link-area a:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .project-header {
    flex-direction: column;
  }
}
</style>
