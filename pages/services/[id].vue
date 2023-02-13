<template>
	<div class="container mb-auto">
    <div class="service pt-16 pb-16" >
      <h1 class="service__title text-5xl font-bold text-white opacity-20">
        {{ serviceTitle }}
      </h1>

      <div class="search mt-8 mb-3">
        <input
          v-model="title"
          placeholder="Search by title"
          type="text"
        >
      </div>

      <div v-if="displayedServices && displayedServices.length > 0">
        <div class="service__items">
          <template 
            v-for="service in displayedServices" 
            :key="service.serviceCategoryGUID"
          >
            <div 
              class="bg-white mb-3 shadow p-4 rounded-lg"
            >
              <span class="text-gray-700 font-medium text-sm">
                {{ service.serviceContentName }} - {{ service.servicePrice }} грн
              </span>
            </div>
          </template>
        </div>

        <div class="pages flex mt-3" v-if="pages && pages.length > 1">
          <div
            v-for="page in pages"
            :key="page"
            class="page"
            :class="{'page_active': currentPage == page}"
            @click="setPage(page)"
          >
            {{ page }}
          </div>
        </div>
      </div>
      <div v-else>
        <h2 class="text-3xl font-bold text-white opacity-40">Послугу не зайдено</h2>
      </div>
    </div>
	</div>
</template>

<script setup>
const route = useRoute()
const pages = ref([])
const currentPage =  ref(1)
const perPage = ref(10)
const title = ref('')

const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.baseURL}/spiAnonymousServiceContList?top=1000`)

const services = computed(() => {
	return data.value.value.filter(el => el.serviceCategoryGUID === route.params.id)
})

const setPages = (services) => {
  pages.value = []

  const numberOfPages = Math.ceil(services.length / perPage.value)

  for (let i = 1; i <= numberOfPages; i++) {
    pages.value.push(i)
  }
}

const setPage = (page) => {
  currentPage.value = page
}

const paginateServices = (services) => {
  const from = (currentPage.value * perPage.value) - perPage.value
  const to = (currentPage.value * perPage.value)

  setPages(services)

  return services.slice(from, to)
}

const displayedServices = computed(() => {
	return paginateServices(services.value.filter(el => el.serviceContentName.toLowerCase().includes(title.value.toLowerCase())))
})

const serviceTitle = computed(() => {
  return displayedServices.value && displayedServices.value.length > 0 ? displayedServices.value[0].serviceCategoryContentName : 'Послуга'
} )

watch(title, () => currentPage.value = 1)
</script>

<style scoped lang="scss">

.service__items {
  min-height: 692px;
}

.search {
  input {
    width: 320px;
    font-size: 12px;
    font-weight: 400;
    outline: none;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    padding: 8px;
    color: #9CA3AF;
    transition: 0.1s ease-out;

    &:focus {
      border-color: #6200EE;
    }
  }
}
.page {
  width: 69px;
  height: 38px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #E5E7EB;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &_active {
    background-color: #3697e2;
    color: #fff;
    border-color: #063960;
    transition: background-color .3s;
  }
}
</style>