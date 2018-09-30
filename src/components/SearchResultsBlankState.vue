
<template>
	<div class="ui flex vertical segment">
    <div class="ui text fullpage padding-left">
      <p>Your search - <strong class="bold">{{search}}</strong> - did not match any patient's information</p>
      <p>Suggestions</p>
      <ul>
        <li>Try the patient's birthdate, name, or phone number</li>
        <li>Be less specific with the search</li>
        <li><a>Add a new patient</a></li>
      </ul>
    </div>
    <img></img>
  </div>
</template>

<script> 
export default {
  props: ['search']
}
</script>

<style scoped>
.flex {
  display: flex;
}
.centered {
  justify-content: center;
  text-align: center;
}
.vertical {
  align-items: center;
}
.fullpage {
  min-height: 60vh;
}
.bold {
  font-weight: bold;
}
.padding-lg {
  padding-top: 0rem !important;
  padding-bottom: 10rem !important;
}
.padding-left {
  padding-left: 130px !important;
}
</style>


