<script setup lang="ts">
const navItems = [
  {
    label: 'Home',
    href: '#hero',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Strengths',
    href: '#strengths',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]
</script>

<template>
  <header class="header">
    <nav class="nav">
      <a href="#hero" class="logo">
        Kim Sehyeon
      </a>

      <div class="nav-links">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e5e7eb;
  background: rgba(248, 250, 252, 0.9);
  backdrop-filter: blur(12px);
}

.nav {
  max-width: 960px;
  height: 64px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #111827;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-links a {
  color: #4b5563;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--color-primary);
}

@media (max-width: 760px) {
  .nav {
    height: auto;
    padding: 16px 24px;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .nav-links {
    width: 100%;
    overflow-x: auto;
    gap: 14px;
    padding-bottom: 4px;
  }

  .nav-links a {
    flex-shrink: 0;
  }
}
</style>