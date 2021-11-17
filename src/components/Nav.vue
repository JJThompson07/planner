<template>
  <div class="nav flex gap-2 w-100">
    <div class="flex-1 flex justify-start p-2">
      <router-link class="btn btn-primary" :to="{ name: 'Home' }"
        >Home</router-link
      >
    </div>
    <div class="flex-1 flex justify-center p-2">
      <router-link class="btn btn-primary" :to="{ name: 'CreatePlan' }"
        >Create</router-link
      >
    </div>

    <div class="flex gap-2 flex-1 justify-end p-2">
      <router-link class="btn btn-primary" :to="{ name: 'Login' }"
        >Login</router-link
      >
      <router-link class="btn btn-primary" :to="{ name: 'Signup' }"
        >Signup</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped></style>
