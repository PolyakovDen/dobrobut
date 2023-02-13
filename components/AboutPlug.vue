<template>
  <div class="container mx-auto bg-white shadow-sm rounded flex p-3">
    <img src="~/assets/images/main.png" width="239" height="239" />
    <div class="pt-3.5 pl-6 pr-6">
      <h2 class="text-3xl font-medium">
        Information about health care network
      </h2>
      <p class="text-sm mt-6 text-gray-500 font-normal">
        Our specialists have developed beneficial complex programs on prevention and detection of various diseases for the patients’ comfort. 
        You can get all the services in comfortable conditions without long waiting in a line at our center working 24/7. 
        There is a recreational area in the building. There is a possibility to book off premise consultations at your home.
      </p>
      <div 
				v-if="showButton"
				class="text-sm font-medium w-40 px-3 pt-2.5 pb-2 bg-rose-600 border-pink-700 border-solid border rounded text-white ml-auto mt-6 cursor-pointer" 
			>
				<NuxtLink to="/about">
					<span class="block">Більше інформації</span>
				</NuxtLink>
      </div>
			<div class="" v-else>
				<p class="text-sm mt-6 text-gray-500 font-normal">
					Friendly and experienced staff will help you to organize your visit to a doctor and 
					provide detailed information on the operation of the clinic center. 
					No queues and pre-appointments at a time convenient to
					you with further SMS informing will make your visit to the
					health care center really comfortable.
				</p>
				<p class="mt-7">Consultations by specialists</p>
				<p class="text-sm mt-6 text-gray-500 font-normal">
					Family doctors and specialized doctors such as superior and first 
					expert category doctors, holders of post-doctoral and doctoral degrees
					in medicine with huge practical experience and high level of 
					academic education consult patients in the health care center. 
					The highly professional team uses modern international clinical protocols of 
					treatment and diagnostics relying on the principles of the evidence-based medicine.
				</p>
			</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showButton: {
    type: Boolean,
    required: true
  }
})

const { showButton } = toRefs(props)
</script>

<style scoped lang="scss">
img {
	width: 239px;
	height: 239px;
}
</style>