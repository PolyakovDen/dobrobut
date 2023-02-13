<template>
  <div class="container">
    <h1 class="text-5xl font-bold text-white opacity-20 mt-24 mb-7">Послуги</h1>
    <div class="services overflow-y-auto">
      <template 
        v-for="service in services" 
        :key="service.serviceCategoryGUID"
      >
        <div 
          class="service bg-white mb-3 shadow p-4 rounded-lg cursor-pointer" 
          @click="$router.push(`/services/${service.serviceCategoryGUID}`)"
        >
          <span class="text-gray-700 font-medium text-sm">
            {{ service.serviceCategoryContentName }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.baseURL}/spiAnonymousServiceCategoryContList?top=100`)

const services = computed(() => {
  return data.value.value.reduce((acc, service) => {
    if (acc.map[service.serviceCategoryGUID]) return acc;

    acc.map[service.serviceCategoryGUID] = true
    acc.services.push(service)

    return acc
  }, {
    map: {},
    services: []
  }).services
})
</script>

<style scoped lang="scss">
.services {
  .service {
    &:hover {
      background-color: #EAF6FF;
      color: #094774;
    }
  }
}
</style>
