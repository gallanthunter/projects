<template>
  <Card style="width:350px">
    <p slot="title">
      <Icon type="ios-film-outline"></Icon>
      Classic film
    </p>
    <a href="#" slot="extra" @click.prevent="changeLimit">
      <Icon type="ios-loop-strong"></Icon>
      Change
    </a>
    <ul>
      <li>This is a list</li>
      <li>This is a list</li>
      <li>This is a list</li>
      <li>This is a list</li>
      <li>This is a list</li>
      <li>This is a list</li>
    </ul>
  </Card>
</template>
<script>
  export default {}
</script>
