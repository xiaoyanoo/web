<template>
  <div class="hello">
    <br>
    <br>
    <br>
    <router-link to="/book_info" class="">   <!--  记得删除这个标签，仅供展示用！！！！  -->
    <div id="tablebox">
      <ul class="dashuo-list">
        <li>
          <div class="dashuo-list-img">
            <img src="@/assets/book.jpg">
          </div>
          <h1>黑夜如雪</h1>
          <h2>炭白</h2>
          <br>
          <p>他紧张兮兮的再次把头探出去，孟晓涵有点生气，但没有表现出来，只是微笑着拿过水杯说要出去接水。他能想到，孟晓涵一定会把别人用过的杯子洗上。</p>
          <a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a>
        </li>
        <li>
          <div class="dashuo-list-img">
            <img src="@/assets/book.jpg">
          </div>
          <h1>黑夜如雪</h1>
          <h2>炭白</h2>
          <br>
          <p>他紧张兮兮的再次把头探出去，孟晓涵有点生气，但没有表现出来，只是微笑着拿过水杯说要出去接水。他能想到，孟晓涵一定会把别人用过的杯子洗上。</p>
          <a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a>
        </li>
        <li>
          <div class="dashuo-list-img">
            <img src="@/assets/book.jpg">
          </div>
          <h1>黑夜如雪</h1>
          <h2>炭白</h2>
          <br>
          <p>他紧张兮兮的再次把头探出去，孟晓涵有点生气，但没有表现出来，只是微笑着拿过水杯说要出去接水。他能想到，孟晓涵一定会把别人用过的杯子洗上。</p>
          <a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a>
        </li>
        <li>
          <div class="dashuo-list-img">
            <img src="@/assets/book.jpg">
          </div>
          <h1>黑夜如雪</h1>
          <h2>炭白</h2>
          <br>
          <p>他紧张兮兮的再次把头探出去，孟晓涵有点生气，但没有表现出来，只是微笑着拿过水杯说要出去接水。他能想到，孟晓涵一定会把别人用过的杯子洗上。</p>
          <a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a>
        </li>
        <li>
          <div class="dashuo-list-img">
            <img src="@/assets/book.jpg">
          </div>
          <h1>黑夜如雪</h1>
          <h2>炭白</h2>
          <br>
          <p>他紧张兮兮的再次把头探出去，孟晓涵有点生气，但没有表现出来，只是微笑着拿过水杯说要出去接水。他能想到，孟晓涵一定会把别人用过的杯子洗上。</p>
          <a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a>
        </li>
        <li>
          <div class="dashuo-list-img">
            <img src="@/assets/book.jpg">
          </div>
          <h1>黑夜如雪</h1>
          <h2>炭白</h2>
          <br>
          <p>他紧张兮兮的再次把头探出去，孟晓涵有点生气，但没有表现出来，只是微笑着拿过水杯说要出去接水。他能想到，孟晓涵一定会把别人用过的杯子洗上。</p>
          <a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a>
        </li>
        <li>
          <div class="dashuo-list-img">
            <img src="@/assets/book.jpg">
          </div>
          <h1>黑夜如雪</h1>
          <h2>炭白</h2>
          <br>
          <p>他紧张兮兮的再次把头探出去，孟晓涵有点生气，但没有表现出来，只是微笑着拿过水杯说要出去接水。他能想到，孟晓涵一定会把别人用过的杯子洗上。</p>
          <a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a>
        </li>
        <li>
          <div class="dashuo-list-img">
            <img src="@/assets/book.jpg">
          </div>
          <h1>黑夜如雪</h1>
          <h2>炭白</h2>
          <br>
          <p>他紧张兮兮的再次把头探出去，孟晓涵有点生气，但没有表现出来，只是微笑着拿过水杯说要出去接水。他能想到，孟晓涵一定会把别人用过的杯子洗上。</p>
          <a href="#"><span class="icon iconfont f24 tfrte90">&#xe779;</span></a>
        </li>
      </ul>
    </div>
    </router-link>
    <br>
    <br>
    <br>
    <Col span="6" class="index-left">
        <h1>热门</h1>
        <h2><span class="fang">&ensp;</span>全部</h2>
        <ul>
          <li><a href="#">科技宇宙</a></li>
          <li><a href="#">魔法宇宙</a></li>
          <li><a href="#">元气宇宙</a></li>
          <li><a href="#">混乱宇宙</a></li>
          <li><a href="#">蛮荒宇宙</a></li>
          <li><a href="#">虫群宇宙</a></li>
          <li><a href="#">霸体宇宙</a></li>

        </ul>
    </Col>

      <Row type="flex" justify="center">
            <Col span="18" class="bookListCon">
                <div class="bookList">
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑黑夜黑夜黑夜黑夜黑夜夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bookItem" @click="tss">
                        <img src="@/assets/book.jpg" alt="">
                        <div class="bookInfo">
                            <p class="bookTitle">黑夜</p>
                            <p class="bookAuthor">炭白</p>
                            <p class="bookTag">
                                <span @click.stop="ts">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      2134
                                </span>
                                <span>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-mulu"></use>
                                      </svg>
                                      4354
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

  </div>
</template>

<script>
import { Row, Col } from 'view-design';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      univ_pai: [],
      novel_pai: [],
    }
  },
  components: {
        Row,
        Col,
    },
  methods:{
        ts: function(){
            console.log(12);
        },
        tss: function(){
            console.log(434);
        }
    },
    computed: {
      userId(){
        return this.$store.state.login; //userId
      }
    },
  mounted() {
    //在用户看到界面之前执行
    var a = document.getElementById("tablebox");
    var scroll_width = 100; //滚动一下的距离
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll', mousewheel_event, false); // FF
    }
    a.onmousewheel = mousewheel_event; // IE/Opera/Chrome
    function mousewheel_event(eee) {
        var eee2 = eee || window.event, v;
        eee2.wheelDelta ? v=eee2.wheelDelta : v=eee2.detail;
        if(v>3||-v>3) v=-v;
        v>0 ? a.scrollLeft+=scroll_width : a.scrollLeft-=scroll_width;

        eee2.preventDefault(); //阻止浏览器的默认滚动
    }

    this.$api.get('api/main/pub/rank/collect/top', {
      topCount: 8
    }, response =>{
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        this.univ_pai = response.data.univ_pai;
        this.novel_pai = response.data.novel_pai;
      } else {
        console.log(response.message);
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../fonts/font/iconfont.css";



.hello{padding-left: 52px;}
#tablebox{overflow-x:scroll;overflow-y: auto;}
.dashuo-list{width: 6000px; height: 248px;
}
.dashuo-list li{width:380px;float: left;
height:248px;
background:rgba(251,251,251,1);
}
.f24{font-size: 24px;}
.dashuo-list li{padding-right: 20px;  list-style: none; margin-right: 20px;}
.dashuo-list li h1{color: #1B1B1B;font-weight: normal;font-size: 24px; text-align: left;color: #1B1B1B;}
.dashuo-list li h2{color: #1B1B1B;font-weight: normal;font-size: 14px; text-align: left; color: #D1D5D5;}
.dashuo-list li p{color: #1B1B1B;font-weight: normal;font-size: 14px; text-align: left; color: #000;line-height: 28px;overflow:hidden; white-space:normal; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:4;text-align: justify;}
.dashuo-list li span{display: inline-block;height: auto; float: right;color: #806BFF;}
.dashuo-list-img{float: left;height: 248px;margin-right: 20px;}
.dashuo-list-img img{width: 152px;height: 227px;}
.tfrte90{transform:rotate(180deg);
-ms-transform:rotate(180deg);  /* IE 9 */
-moz-transform:rotate(180deg);   /* Firefox */
-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
-o-transform:rotate(180deg);   /* Opera */
}
#tablebox::-webkit-scrollbar {display:none}
.index-left{width: 100px;}
.index-left h1{font-weight: bold;font-size: 14px; color: #B7B7B7;text-align: left;}
.index-left h2{font-weight: bold;font-size: 24px; color: #1B1B1B;text-align: left;position: relative;}
.fang{width: 8px;height: 24px;background:#000;position: absolute;left: -15px;top:7px;}
.index-left ul li{font-size: 24px; color: #8F97A2;list-style: none;margin-top: 10px;}
.index-right{float: left;}
</style>
