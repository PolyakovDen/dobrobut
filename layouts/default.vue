<template>
  <div class="h-full min-h-screen">
    <div 
      class="header bg-white shadow-xl flex" 
      :class="{ 'header_sticky': isHeaderSticky }"
    >
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/">
          <img 
            src="~/assets/images/logo.png" 
            width="139" 
            height="60"
          />
        </NuxtLink>
        <ul class="flex">
          <li class="mr-6">
            <NuxtLink 
              to="/services" 
              activeClass="header__link_active"
            >
            Services
          </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/about" 
              activeClass="header__link_active"
            >
            About
          </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="main flex justify-center items-center">
      <slot />
    </div>
  </div>
</template>

<script setup>
  const isHeaderSticky = ref(false)

  const scrollHandler = () => {
    isHeaderSticky.value = window.scrollY > 200 ? true : false
  }

  if (process.client) {
    window.addEventListener('scroll', scrollHandler)
  }
</script>

<style scoped lang="scss">
a {
  color: #1F2937;
}
.header {
  height: 100px;

  &_sticky {
    position: sticky; 
    top: 0;
  }

  &__link {
    &_active {
      color: #E11D48;
    }
  }
}
.main {
  min-height: calc(100vh - 100px);
  background: linear-gradient(262.03deg, #094774 1.73%, #094774 36.19%, #136BAB 113.87%);
}
</style>