<template>
  <view class="text-center">
    <image style="width: 100px;height: 100px;margin-top: 24px;" src="/static/logo.png" />
    <view>
      <text>{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello')
</script>

<style></style>
