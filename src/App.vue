<script setup>
    import Add from './add.vue';
    import Item from './item.vue';
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <Add />
    <Item />
  </div>
</template>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
</style>
