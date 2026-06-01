<script setup lang="ts">
import { skillCategories } from '@/data/skills'
</script>

<template>
    <section id="skills" class="section">
        <div class="section-header">
            <p class="eyebrow">Skill Inventory</p>
            <h2 class="section-title">기술 스택</h2>
            <p class="section-summary">
                웹 개발과 시스템 운영 경험을 바탕으로 프론트엔드, 백엔드, 데이터베이스,
                운영 환경을 함께 이해하며 개발합니다.
            </p>
        </div>

        <div class="skill-grid">
            <div v-for="category in skillCategories" :key="category.id" class="skill-card card">
                <h3>{{ category.title }}</h3>
                <p class="description">{{ category.description }}</p>

                <div class="skill-list">
                    <span v-for="skill in category.skills" :key="skill" class="badge">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.skill-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.skill-card {
    padding: 20px;
}

.skill-card h3 {
    margin-top: 0;
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

@media (max-width: 640px) {
    .skill-grid {
        grid-template-columns: 1fr;
    }
}
</style>
