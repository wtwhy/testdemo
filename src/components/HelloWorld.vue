<template>
  <div class="hello">
    <input type="text" @input="listeninput" class="input" v-model="inputValue">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: String
  },
  data() {
    return {
      res: null,
      inputValue:''
    }
  },
  methods: {
    listeninput() {

      this.res();
    },
    aaa() {
      this.res = this.Debounce(() => {
        this.$meassage.show("sucess", `输入完毕${this.inputValue}`)
        // console.log('输入完毕');
      }, 500);
    },
    /**
    *防抖函数{函数在rate规定的时间范围内没有再次触发，则开始执行foo函数 }foo 
    * @param{ 进行防抖处理的函数 } foo 
    * @param{ 防抖的消除频率 } rate 
    */
    Debounce(foo, delay) {
      let timer;
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          foo.apply(this, args)
        }, delay);
      }
    }
  }, created() {
    this.aaa();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  transition: all 3s;
  /* translate: ; */
}

input {
  position: relative;
  transform: translate(-40%, -40%);
  top: 100px;
  left: 10%;
}
</style>
