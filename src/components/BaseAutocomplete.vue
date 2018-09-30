
<template>
<div id="searchField" class="ui fluid search">
  <div class="ui left icon dark input">
    <input class="wide" 
      type="text"
      name="search"
      placeholder="Search by name, phone, or visition date" 
      autocomplete="off" 
      v-model="search"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <i class="search icon"></i>
  </div>
  <div class="ui relaxed divided visible autosuggestions"
    v-show="isOpen"
  >
    <div class="autosuggest item"
      v-if="isLoading" 
    >
      <div class="content">
        <div class="header">Loading...</div>
      </div>
    </div>
    <div class="autosuggest item" 
      :class="{ 'is-active': i === arrowCounter }"
      v-else
      v-for="(result, i) in results"
      :key="i"
      @click="setResult(result)"
    >
      <suggest :search="search" :data="result"/>
    </div>
    <div class="autosuggest item"
      v-if="!isLoading && isPhone"
      @click="searchPhone">
      <category-suggest :search="search" type="Phone number"/>
    </div>
    <div class="autosuggest item"
      v-if="!isLoading && isDate"
      @click="searchDates">
      <category-suggest :search="search" type="Date of birth"/>
    </div>
    <div class="autosuggest item"
      v-if="!isLoading && isDate"
      @click="searchDates">
      <category-suggest :search="search" type="Visit date"/>
    </div>
  </div>
</div>
</template>

<script>
import Suggest  from './BaseAutocompleteSuggestion'
import Category from './BaseAutocompleteCategory'
import moment   from 'moment'

export default {
  name: 'autocomplete',
  components: {
    'suggest'         : Suggest,
    'category-suggest': Category
  },
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
    prefill: {
      type: String,
      require: false,
      default: ''
    }
  },

  data() {
    return {
      isOpen: false,
      results: [],
      search: '',
      isLoading: false,
      arrowCounter: -1,
      isPhone: false,
      isDate: false,
    };
  },
  computed: {
    searchTitle() {
      return this.search.title
    }
  },
  methods: {
    onChange( evt ) {
      // Let's warn the parent that a change was made
      this.$emit('input', this)
      this.isPhone = this.isDate = this.isOpen = false

      if ( evt.target.value.length <= 1 ) {
        this.isOpen = false
        return
      }
      if ( this.isAsync ) {
        this.isOpen = this.isLoading = true
        return
      }
      
      
      if ( this.couldBeName( evt.target.value ) ) {
        this.filterResults()
        if ( this.results.length > 0 ) this.isOpen = true
      }
      if ( this.couldBePhone( evt.target.value ) ) {
        this.Loading = false
        this.isOpen = this.isPhone = true 
      }
      if ( this.couldBeDate( evt.target.value ) ) {
        this.Loading = false
        this.isOpen = this.isDate = true
      }
      return
    },
    couldBePhone ( text ) {
      var alpha = /[a-z/,]/gi    // phone numbers will not have / , characters
      var phone = /[()-\d^a-z]/gi
      return ( text.match(alpha)==null && text.match(phone) )
    },
    couldBeDate ( text ) {
      return moment(text).isValid()
    },
    couldBeName ( text ) {
      var alpha = /[a-z]/gi
      return (text.match(alpha)!=null)
    },
    filterResults() {
      var list = this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
      this.results = list.slice(0,5)
    },
    setResult( result ) {
      this.search = result.title
      this.isOpen = false
      this.$router.push({ 
        name: 'Patient Profile', 
        params: {
          id: result.id 
        } 
      })
    },
    onArrowDown( evt ) {
      if (this.arrowCounter < this.results.length-1) {
        this.arrowCounter = this.arrowCounter + 1
      } else {
        this.arrowCounter = 0
      }
    },
    onArrowUp( evt ) {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter -1
      } else {
        this.arrowCounter = this.results.length -1
      }
      evt.preventDefault()
    },
    onEnter( evt ) {
      // user did not choose from the suggestions and arrowCounter == -1. 
      // Run a search
      if (this.arrowCounter == -1 ) {  
        this.$router.push({ 
          name: 'Search Patient', 
          params: {
            type: 'name', 
            data:`${this.search}` 
          } 
        })
      }
      // user choose from the suggestions, arrowCounter > -1
      // Go to specific patient
      else { 
        var target = this.results[this.arrowCounter]
        this.search = target.title
        this.$router.push({ 
          name: 'Patient Profile', 
          params: {
            id:`${ target.id }` 
          } 
        })
      } 
      this.isOpen = false
      this.arrowCounter = -1
      // if is one of the autosuggest, set default
      // otherwise, check search type and run a search
    },
    handleClickOutside( evt ) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    },
    searchDates( ) {
      this.$router.push({ 
        name: 'Search Patient', 
        params: {
          type: 'date', 
          data:`${this.search}` 
        } 
      })
    },
    searchPhone( ) {
      this.$router.push({ 
        name: 'Search Patient', 
        params: {
          type: 'phone', 
          data:`${this.search}` 
        } 
      })
    },
  },
  watch: {
    items: function (val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val
        this.isLoading = false
      }
    },
  },
  created() {
    this.search = this.prefill
    $(document).on("keypress", ":input:not(textarea)", function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
      }
    });
  },
  mounted() {
    $(document).on('click', this.handleClickOutside)
  },
  destroyed() {
    $(document).off('click', this.handleClickOutside)
  }
};
</script>

<style scoped>
.autocomplete {
  position: relative;
}
.autocomplete-results {
  padding: 0;
  margin: 0;
  margin-top: 20px;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
  width: 100%;
}
.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}
.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4AAE9B;
  color: white;
}


.autosuggest {
  cursor: pointer;
  display: block;
  overflow: hidden;
  font-size: 1em;
  padding: .85714286em 1.14285714em;
  padding-left: 2.67142857em!important;
  color: rgba(0,0,0,.87) !important;
  line-height: 1.33;
  border-bottom: 1px solid rgba(34,36,38,.1);
}
.hoverable:hover {
  background-color: rgba(0,0,0,.1) !important;
}
.wide {
  width: 40vw !important;
}
.ui.search > .autosuggestions {
  /*display: none;*/
  position: absolute;
  top: 100%;
  left: 0;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  white-space: normal;
  background: #fff;
  margin-top: .5em;
  width: 100%;
  border-radius: .28571429rem;
  box-shadow: 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15);
  border: 1px solid #d4d4d5;
  z-index: 998;
}
.visible {
  display: block;
}
.is-active {
  background-color: rgba(0,0,0,.1) !important;
}
.dark {
  color: #ddd !important;
}
.dark input{
  background-color: #444 !important;
  color: #ddd !important;
}
.dark input:focus {
  background-color: white !important;
  color: #000 !important;
  border-color: transparent !important;
}
</style>


