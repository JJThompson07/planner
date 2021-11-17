<template>
  <form @submit.prevent="handleSubmit">
    <h3>Log in</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />

    <div class="error" v-if="error">{{ error }}</div>

    <button v-if="!isPending">Log in</button>
    <button v-else disabled>Loading</button>
    <div class="form__link">
      Not a member? <span class="link" @click="handleClick">Signup</span> here.
    </div>
  </form>
</template>

<script>
export default {
  name: "AccountForm",
};
</script>

<style scoped></style>
