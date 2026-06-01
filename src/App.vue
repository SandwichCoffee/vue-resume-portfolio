<script setup lang="ts">
import HeaderNav from './components/layout/HeaderNav.vue'
import HeroSection from '@/components/resume/HeroSection.vue'
import AboutSection from '@/components/resume/AboutSection.vue'
import CoreStrengthSection from '@/components/resume/CoreStrengthSection.vue'
import SkillInventorySection from '@/components/resume/SkillInventorySection.vue'
import ExperienceSection from '@/components/resume/ExperienceSection.vue'
import ProjectSection from '@/components/resume/ProjectSection.vue'
import ContactSection from '@/components/resume/ContactSection.vue'
</script>

<template>
  <HeaderNav />
  <main class="page">
    <HeroSection />
    <AboutSection />
    <CoreStrengthSection />
    <SkillInventorySection />
    <ExperienceSection />
    <ProjectSection />
    <ContactSection />
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--color-bg);
  color: #111827;
}
</style>
