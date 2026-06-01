<script setup lang="ts">
import { experiences } from '@/data/experiences'
</script>

<template>
    <section id="experience" class="section">
        <div class="section-header">
            <p class="eyebrow">Work Experience</p>
            <h2 class="section-title">주요 경력</h2>
            <p class="section-summary">
                보안/인프라 운영 경험에서 시작해, Spring Boot와 Vue.js, React 기반의
                웹 시스템 개발 경험으로 확장해왔습니다.
            </p>
        </div>

        <div class="experience-list">
            <article v-for="experience in experiences" :key="experience.id" class="experience-card card">
                <div class="experience-header">
                    <div>
                        <h3>{{ experience.company }}</h3>
                        <p class="role">{{ experience.role }}</p>
                    </div>

                    <span class="period">{{ experience.period }}</span>
                </div>

                <div class="detail-list">
                    <div v-for="detail in experience.details" :key="detail.id" class="detail-item">
                        <h4>{{ detail.project }}</h4>
                        <p class="detail-description">{{ detail.description }}</p>

                        <ul>
                            <li v-for="task in detail.tasks" :key="task">{{ task }}</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.experience-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.experience-card {
    overflow: hidden;
}

.experience-header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 24px;
    border-bottom: 1px solid #e5e7eb;
    background: #f8fafc;
}

.experience-header h3 {
    margin: 0 0 8px;
    font-size: 22px;
}

.role {
    margin: 0;
    color: var(--color-primary);
    font-weight: 700;
}

.period {
    align-self: flex-start;
    flex-shrink: 0;
    padding: 6px 10px;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    color: #4b5563;
    font-size: 14px;
    font-weight: 600;
}

.detail-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
}

.detail-item h4 {
    margin: 0 0 8px;
    font-size: 18px;
}

.detail-description {
    margin: 0 0 12px;
    color: #6b7280;
    line-height: 1.6;
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

@media (max-width: 640px) {
    .experience-header {
        flex-direction: column;
    }
}
</style>
