<template>
    <div>
        <!--全局顶部导航栏-->
        <nav class="navbar navbar-fiexd-top">
            <div class="width-limit">
                <!--logo-->
                <nuxt-link to="/" class="logo">
                    <img src="~assets/img/nav-logo.png" alt="">
                </nuxt-link>
                <!--右上角，写文章-->
                <nuxt-link class="write-btn" to="/write">
                    <i class="fa fa-edit"></i>
                    写文章
                </nuxt-link>
                <!--用户登录,显示用户头像，信息-->
                <div class="user" @mouseover="userShow=true"  @mouseleave="userShow=false">
                    <div class="drop-down">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                    </div>
                    <ul class="drop-menu" v-show="userShow">
                        <li>
                            <nuxt-link to="/">
                                <i class="fa fa-home"></i>
                                我的主页
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/user/123/like">
                                <i class="fa fa-heart"></i>
                                喜欢的文章
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/bookmark">
                                <i class="fa fa-bookmark"></i>
                                收藏的文章
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/settings/basic">
                                <i class="fa fa-cog"></i>
                                设置
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/logout">
                                <i class="fa fa-sign-out"></i>
                                退出
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <!--右上角,登录和注册-->


                <!--导航-->
                <div class="container">
                    <div class="row">
                        <button class="navbar-toggle"
                                @click="navShow==true?navShow=false:navShow=true">
                            <i class="fa fa-bars fa-lg"></i>
                        </button>
                        <transition enter-active-class="animated fadeInDown"
                                    leave-active-class="animated fadeOutUp">
                            <ul class="nav-list" v-show="navShow">
                                <li class="tab active">
                                    <nuxt-link to="/" >
                                        <i class="fa fa-compass"></i>
                                        <span>
                                    发现
                                </span>
                                    </nuxt-link>
                                </li>
                                <li class="tab">
                                    <nuxt-link to="/follow">
                                        <i class="fa fa-book"></i>
                                        <span>关注</span>
                                    </nuxt-link>
                                </li>
                                <li class="tab user" @mouseover="notifyShow=true"
                                    @mouseleave="notifyShow=false">
                                    <nuxt-link to="/notify">
                                        <i class="fa fa-bell-o"></i>
                                        <span>消息</span>
                                    </nuxt-link>
                                    <div class="drop-menu" v-show="notifyShow">
                                        <ul>
                                            <li>
                                                <nuxt-link to="/notify/comments">
                                                    <i class="fa fa-comment-o"></i>
                                                    评论
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/notify/chats">
                                                    <i class="fa fa-envelope-o"></i>
                                                    简信
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/notify/follows">
                                                    <i class="fa fa-user-o"></i>
                                                    关注
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/notify/likes">
                                                    <i class="fa fa-heart-o"></i>
                                                    喜欢和赞
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="tab search">
                                    <form method="post">
                                        <input type="text" class="search-input"
                                               placeholder="搜索" @focus="bgShow=true" @blur="bgShow=false">
                                        <a href="#" class="search-btn" :class="{active:bgShow}">
                                            <i class="fa fa-search"></i>
                                        </a>
                                    </form>
                                </li>
                            </ul>
                        </transition>
                    </div>


                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "myHeader",
        data(){
            return{
                userShow:false,
                notifyShow:false,
                bgShow:false,
                navShow:false
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    nav{
        height: 56px;
        width: 100%;
        background: #fff;
    }
    .navbar{
        margin-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        color: #fff;
    }
    .navbar:before{
        content: '';
        display: table;
    }
    .navbar-fiexd-top{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
    }
    nav .width-limit{
        min-width: 768px;
        max-width: 1440px;
        margin: 0 auto;
    }
    nav .logo{
        float: left;
        height: 56px;
        display: block;
    }
    nav .logo img{
        height: 100%;
    }
    nav .write-btn{
        float: right;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        line-height: 40px;
        margin: 8px 15px 0;
        font-size: 15px;
        color: #fff;
        background: #ea6f5a;
        text-align: center;
    }
    nav .write-btn:hover{
        background: #ec6149;
    }
    nav .user{
        position: relative;
        float: right;
    }
    nav .user:hover{
        background: #f5f5f5;
    }
    nav .user .avatar{
        position: relative;
        display: block;
        width: 40px;
        height: 40px;
        margin: 8px 28px 8px 20px;
    }
    nav .user .avatar:before{
        content: "";
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #999;
        top: 18px;
        right: -14px;
    }
    nav .user .avatar img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #eee;
    }
    nav .user .drop-menu{
        position: absolute;
        left: 0;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        min-width: 160px;
        z-index: 999;
        margin:0 ;
        padding: 5px 0;
        font-size: 15px;
        background-color: #fff;
    }
    nav .user .drop-menu li a {
        padding: 10px 20px;
        line-height: 30px;
        display: block;
    }
    nav .user .drop-menu li a:hover{
        background: #f5f5f5;
    }
    nav .user .drop-menu li a i{
        margin-right: 10px;
        color:#ea6f5a;
        width: 20px;
        height: 20px;
        display: inline-block;
        font-size: 20px;
    }
    nav .nav-list{
        margin: 0;
    }
    nav .nav-list:after{
        content: "";
        height: 0;
        clear: both;
        display: block;
        visibility: hidden;
    }
    nav .container .nav-list li{
        float: left;
        margin-right: 5px;
    }
    nav .nav-list .tab>a{
        display: block;
        height: 56px;
        line-height: 26px;
        padding: 15px;
    }
    nav .nav-list>li.active a{
        background: none!important;
        color: #ea6f5a;
    }
    nav .nav-list>li a:hover{
        background: #f5f5f5;
    }
    nav .nav-list>li a i{
        margin-right:5px ;
        font-size: 20px;
    }
    nav .nav-list .search{
        line-height: 20px;
        padding-left: 15px;
        margin-right: 10px;
    }
    nav .nav-list form{
        margin-top: 9px;
        position: relative;
        margin-bottom: 20px;
    }
    nav .nav-list .search form .search-input{
        height: 38px;
        width: 240px;
        font-size: 14px;
        padding: 0 40px 0 20px;
        border: 1px solid #eee;
        background-color: #eee;
        border-radius: 40px;
        transition:width 0.5s ;
        line-height: 30px;
    }
    nav .nav-list .search form .search-input:focus{
        width: 320px;
    }
    nav .nav-list .search form a.search-btn{
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 5px;
        top: 4px;
        text-align: center;
        color: #969696;
        padding: 0;
    }
    nav .nav-list .search form a.active  {
        background: #969696!important;
        border-radius: 50%;
        color: #fff;
    }
    nav .nav-list .search form .search-btn:hover{
        background: none;
    }
    nav .nav-list .search form .search-btn i{
        display:block!important;
        margin: 0;
        text-align: center;
        line-height: 30px;
        font-size: 15px;
        font-weight: 100;
    }

    @media(max-width: 1440px){
        nav .nav-list li>a i{
            display: none;
        }
        nav .nav-list .search form .search-input{
            width: 160px;
        }
        nav .nav-list .search form .search-input:focus{
            width: 240px;
        }
    }
    @media (max-width: 1080px) {
        nav .nav-list  .search form .search-input,
        nav .nav-list  .search form .search-input:focus{
            width: 150px;
        }
        nav .nav-list li span{
            display: none;
        }
        nav .nav-list li>a i{
            display: block;
        }

    }
    @media (max-width: 767px) and (min-width: 320px) {
        nav .nav-list{
            display: block;
            position: absolute;
            top: 56px;
            max-height: 340px;
            width: 100vw;
            overflow-y: auto ;
            overflow-x: hidden;
            padding-right: 15px;
            padding-left: 15px;
            margin-left:-15px;
            margin-right:-15px;
            border: none;
            box-shadow: inset 0 1px 0 hsla(0,0%,100%,.1);
            background: #fff;
            z-index: 10;
        }
        nav .nav-list>li.tab{
            width: 100%;
            display: block;
            margin-right: 10px ;
            float: none;
            border-bottom: 1px solid #eee;
        }
        nav .nav-list>li a{
            text-align: center;
        }
        nav .nav-list>li span{
            display: block;
        }
        nav .nav-list li>a i,
        nav .nav-list .user .drop-menu{
            display: none;
        }
        nav .nav-list form{
            display: block;
            margin: 9px -15px 9px 0px;
        }
        nav .nav-list form a{
            right: 20px!important;
        }
        nav .nav-list form .search-input,
        nav .nav-list form .search-input:focus{
            width: 100% !important;
            margin-left: -15px;
            margin-right: -15px;
            display: block;
        }
    }
    @media (min-width: 768px) {
        nav .navbar-toggle{
            display: none;
        }
        nav .nav-list>li{
            float: left;
        }
        nav .nav-list{
            display: block!important;
        }
    }

    nav .navbar-toggle{
        position: relative;
        float: left;
        border: 1px solid #ddd;
        background: #fff;
        color: #969696;
        border-radius: 4px;
        height: 40px;
        width: 46px;
        padding: 11px 10px;
        margin: 8px 15px 8px 0;
    }
    nav .navbar-toggle i{
    }
    nav .navbar-toggle:hover{
        background: hsla(0,0%,71%,.1)!important;
        border: 1px solid #ddd!important;
    }
    nav .navbar-toggle:focus{
        outline: none;
        background: #ddd;
        border:none;
    }
</style>