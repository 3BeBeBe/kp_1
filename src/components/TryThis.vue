<template>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/contact" class="nav-link">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TryThis',
};
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

.nav-link:hover {
  color: #ddd;
}
</style>