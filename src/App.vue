<template>
  <div id="app">
    <Row class="nav" v-if="nav == 1">
        <Col span="20">
          <Row type="flex" justify="center" class="top">
            <Col span="3"><router-link to="/" class="font">大说</router-link></Col>
            <Col span="3"><router-link to="/universePage" class="font">宇宙</router-link></Col>
            <Col span="3"><router-link to="/loadpage" class="font">作者</router-link></Col>
          </Row>
        </Col>
        <Col span="4"><router-link to="/loadpage" class="load">登录/注册</router-link></Col>
    </Row>
    <router-view></router-view>
  </div>
</template>

<script>
import {Row, Col} from 'view-design'

export default {
  name: 'App',
  components: {
    Row,
    Col
  },
  computed: {
    nav(){
      return this.$store.state.nav;
    }
  }
}
</script>

<style lang="scss">
  #app{
    margin-top: 40px;
  }

  .font{
    font-size: 30px;
    font-family:SimHei;
    font-weight:bold;
    color:white;
  }

  .nav{

    box-shadow:0px 10px 13px 3px rgba(51,51,51,0.1);
    a{
      color: #000;
      padding-bottom: 6px;
    }
    a.active{
      border-bottom: 4px solid #000;
    }
    a:hover{
      border-bottom: 4px solid #000;
    }
  }
</style>
