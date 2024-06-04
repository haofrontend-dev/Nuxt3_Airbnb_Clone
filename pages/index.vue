<template>
  <div>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware: 'protected'
})
const user = useUser();

</script>

<style>

</style>