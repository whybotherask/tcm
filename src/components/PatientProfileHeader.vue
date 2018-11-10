
<template>
	<nav class="ui fixed inverted borderless square menu">
    <div class="ui container">
      <a class="header item" @click="goBack">
        <i class="arrow left icon"/> 
      </a>
      <a v-show="last_scroll_position > 100" class="item">
        <h3>{{ title }}</h3>
      </a>
      <div class="right menu">
        <a class="item">
          <i class="user circle icon"></i>
          Hi, Andy
        </a>
      </div>
    </div>
  </nav>
</template>

<script> 
export default {
  props: [ 'patient' ],
  data() {
    return {
      title: '',
      last_scroll_position: 0,
      ticking: false
    }
  },
  methods: {
    updateTitle( scrollY ){
      if ( !this.patient || !this.patient.personal_info ) return 
        
      if( scrollY > 100) {
        this.title = `${this.patient.personal_info.first_name} ${this.patient.personal_info.last_name}`
      }
      else {
        this.title = ''
      }
    },
    scrollHandler(){
      this.last_scroll_position = window.scrollY

      if (!this.ticking) {
        window.requestAnimationFrame( ()=>{
          this.updateTitle( this.last_scroll_position )
          this.ticking = false
        })
        this.ticking = true
      }
    },
    goBack(){
      this.$router.push({
        name: 'Patient List',
        param: {}
      })
    }
  },
  created() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.scrollHandler)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
nav {
	min-height: 64px !important
}
.square {
	border-radius: 0px !important
}
</style>


