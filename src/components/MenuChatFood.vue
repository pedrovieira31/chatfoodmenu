<template>
  <div class="menu">
    <div class="background-box">
      <div class="top-bar">
        <div id="back-icon">
          <i class="fas fa-arrow-left"></i>
        </div>
      </div> 
      <h2>Search</h2>
      <div class="search">
        <input type="text" placeholder="Search for dishes..."/>
        <i class="fas fa-search"></i>
      </div>
      <ul>
        <h2 v-for="categoria in categorias" :key="categoria.name">{{categoria.name}}</h2>
        <h3 v-for="item in categorias" :key="item.id">{{item.name}}</h3>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'MenuChatFood',
  data: function(){
    return{
      categorias: [],
      itens: []
    };
  },
  methods:{
    carregarCategorias(){
      axios.get('http://my-json-server.typicode.com/pedrovieira31/menujson/categories')
      .then(res => {this.categorias = res.data});
    },
    carregarItens(){
      axios.get('http://my-json-server.typicode.com/pedrovieira31/menujson/items')
      .then(res => {this.itens = res.data});
    }
  },
  mounted(){
    this.carregarCategorias();
    this.carregarItens();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background-box {
  background-color: #fff;
  width: 375px;
  height: 2839px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  margin-left: 0px;
  margin-top: 0px;
  position: absolute;
}
input{
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 7px;
  height: 49px;
  width: 333px;
  left: 0px;
  top: 0px;
  border-radius: 7px;
  border: 2px solid #EBEFF4

}
.placeholder{
  height: 21px;
  width: 281px;
  left: 38px;
  top: 14px;
  border-radius: nullpx;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  background: #838DA6;
}
h2 {
  font-weight: 600;
  font-style: normal;
  font-size: 26px;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 5%;
}
h3 {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: midnightblue;
  margin-left: 5%;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 7px 0px;
  margin-left: 5%;
}
.descricao {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #838DA6;
  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  margin: 7px 0px;
  margin-left: 5%;
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
}
</style>
