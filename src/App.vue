<template>
  <div id="app">
    <Row class="nav" v-if="nav == 1">
        <Col span="20">
          <Row type="flex" justify="center" class="top">
            <Col span="3"><router-link to="/" class="font">大说</router-link></Col>
            <Col span="3"><router-link to="/universePage" class="font">宇宙</router-link></Col>
            <Col span="3" v-if ="login == true"><el-button type="primary" style="font-size: 18px" @click="application">成为作者</el-button></Col>
          </Row>
        </Col>
        <Col span="4" v-if = "login == false"><router-link to="/loadpage" class="load"><el-button type="primary">登录/注册</el-button></router-link></Col>
     <Col span="4" v-if ="login == true"><el-button type="danger" @click="log_off">退出登录</el-button></Col>
      <h1 v-if ="login == true">QAQ欢迎你~{{username}}</h1>
    </Row>
    <router-view></router-view>
  </div>
</template>

<script>
import {Row, Col} from 'view-design'

export default {
  data(){
    return{

    }
  },
  name: 'App',
  components: {
    Row,
    Col
  },
  methods:{
    log_off(){
      this.$store.commit('changeinfoLogin', false)
    },
    application(){
      var jsons={
        "email": "string",
        "headImage": "string",
        "isAuthor": Boolean ,
        "isFrozen": Boolean ,
        "nickname": "string",
        "phone": "string",
        "score": 0,
        "username": "string"
      }
      this.$axios({
        url:'api/main/user/info',
        menthod: 'get',
        data:jsons,
        header:{
          'Content-Type':'application/json'
        }
      })
          .then(res=>{
            // eslint-disable-next-line no-empty
            if(res.data.resCode === '1111'){
              this.$router.push({path: '/loadpage'})
            }else if(res.data.resCode === '2222'){
              this.$message({
                message: '你的作者状态是'+res.data.resMsg+'人工快要忙疯啦~',
                type: 'success'
              })
            }else if(res.data.resCode === '9999'){
              this.$message.error(res.data.resMsg+'\n诶QAQ');
            }
            console.log(res.data)
          })
          .catch(Error=>{
            console.log(Error)
          })
    },
  },
  computed: {
    nav(){
      return this.$store.state.nav;
    },
    login(){
      return this.$store.state.login;
    },
    username(){
      return this.$store.state.username;
    },
  }
}
</script>

<style lang="scss">
  #app{

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
