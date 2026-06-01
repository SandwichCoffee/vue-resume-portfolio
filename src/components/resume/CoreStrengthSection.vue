<script setup lang="ts">
import { coreStrengths } from '@/data/coreStrengths'
</script>

<template>
    <section id="strengths" class="section">
        <div class="section-header">
            <p class="eyebrow">Core Strengths</p>
            <h2 class="section-title">핵심 역량</h2>
            <p class="section-summary">
                인프라와 보안 경험을 바탕으로, 실제 운영 환경을 고려하는 개발자로 성장하고 있습니다.
            </p>
        </div>

        <div class="strength-grid">
            <article v-for="strength in coreStrengths" :key="strength.id" class="strength-card card">
                <h3>{{ strength.title }}</h3>
                <p>{{ strength.description }}</p>
            </article>
        </div>
    </section>
</template>

<style scoped>
.strength-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.strength-card {
    padding: 24px;
}

.strength-card h3 {
    margin: 0 0 12px;
    font-size: 20px;
}

.strength-card p {
    margin: 0;
    color: #4b5563;
    line-height: 1.7;
}

@media (max-width: 640px) {
    .strength-grid {
        grid-template-columns: 1fr;
    }
}
</style>