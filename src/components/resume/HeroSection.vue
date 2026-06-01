<script setup lang="ts">
import { Github, Mail, ArrowLeft } from 'lucide-vue-next'
import { profile } from '@/data/profile'
import { copyEmail } from '@/utils/clipboard'

const PORTFOLIO_URL = 'https://sandwichcoffee.github.io/ReactProject/'

const heroLinks = [
    {
        id: 1,
        label: 'GitHub',
        url: profile.githubUrl,
        icon: Github,
    }
]

const handleGoBack = () => {
  window.location.href = PORTFOLIO_URL
}

const handleCopyEmail = () => {
    copyEmail(profile.email)
}
</script>

<template>
    <section id="hero" class="hero-section">
        <p class="eyebrow">{{ profile.title }}</p>
        <h1 class="section-title">{{ profile.headline }}</h1>
        <p class="description">{{ profile.description }}</p>

        <div class="link-area">
            <a v-for="link in heroLinks" :key="link.id" :href="link.url" target="_blank" rel="noreferrer"
                class="link-button">
                <component :is="link.icon" class="link-icon" />
                {{ link.label }}
            </a>
            <button type="button" class="link-button" aria-label="포트폴리오로 돌아가기" @click="handleGoBack">
                <ArrowLeft class="link-icon" />
                <span>포트폴리오 페이지</span>
            </button>
            <button type="button" class="link-button" aria-label="이메일 주소 복사" @click="handleCopyEmail">
                <Mail class="link-icon" />
                <span>Email</span>
            </button>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    scroll-margin-top: 80px;
    max-width: 960px;
    margin: 0 auto;
    padding: 96px 24px 64px;
}

.eyebrow {
    margin-bottom: 12px;
    color: var(--color-primary);
    font-weight: 700;
}

h1 {
    max-width: 860px;
    margin: 0;
    font-size: 48px;
    line-height: 1.2;
}

.description {
    max-width: 640px;
    margin-top: 20px;
    color: #4b5563;
    font-size: 18px;
    line-height: 1.7;
}

.link-area {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
}



@media (max-width: 640px) {
    .hero-section {
        padding-top: 64px;
    }

    h1 {
        font-size: 36px;
    }
}
</style>
