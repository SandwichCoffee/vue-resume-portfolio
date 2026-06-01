<script setup lang="ts">
import { Github, Mail, Phone } from 'lucide-vue-next'
import { profile } from '@/data/profile'
import { copyEmail } from '@/utils/clipboard'

const handleCopyEmail = () => {
    copyEmail(profile.email)
}
</script>

<template>
    <section id="contact" class="section contact-section">
        <p class="eyebrow">Contact</p>
        <h2 class="section-title">함께 일할 준비가 되어있습니다.</h2>
        <p class="contact-description">운영 환경을 이해하고, 유지보수 가능한 화면과 안정적인 서비스를 고민하는 개발자가 되겠습니다.</p>

        <div class="link-area contact-list">
            <button type="button" class="link-button" @click="handleCopyEmail"><Mail class="link-icon" /> 이메일 주소 복사</button>
            <a v-if="profile.phone" class="link-button" :href="'tel:' + profile.phone"><Phone class="link-icon" /> Phone</a>
            <a class="link-button" :href="profile.githubUrl" target="_blank" rel="noreferrer"><Github class="link-icon " /> GitHub</a>
        </div>
    </section>
</template>

<style scoped>
.contact-section {
    text-align: center;
}

.contact-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
}

.contact-description {
  color: #4b5563;
  line-height: 1.7;
}
</style>
