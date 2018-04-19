<template>
    <div>
        <!--全局顶部导航栏-->
        <nav class="navbar nav-fiexd-top">
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
                <div class="user" @mouseover="userShow=true" @mouseleave="userShow=false">
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
                <div class="my-container">
                    <ul class="nav-list">
                        <li class="active">
                            <nuxt-link to="/">
                                <i class="fa fa-compass"></i>
                                <span>
                                    发现
                                </span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">
                                <i class="fa fa-book"></i>
                                <span>关注</span>
                            </nuxt-link>
                        </li>
                        <li class="notify" @mouseover="notifyShow=true" >
                            <nuxt-link to=/"">
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
                                        <nuxt-link to="/notify/requests">
                                            <i class="fa fa-upload"></i>
                                            投稿请求
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notify/follows">
                                            <i class="fa fa-heart-o"></i>
                                            喜欢和赞
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notify/follows">
                                            <i class="fa fa-user-o"></i>
                                            <span>关注</span>
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li >
                            <form >
                                <input type="text" placeholder="搜索">
                                <nuxt-link to="/search" class="search-btn">
                                    <i class="fa fa-search"></i>
                                </nuxt-link>

                            </form>
                        </li>
                    </ul>
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
                notifyShow:true
            }
        }
    }
</script>

<style scoped>
    nav{
        height: 56px;
        width: 100%;
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
        height: 100%;
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
        bonton: 0;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        min-width: 160px;
        z-index: 999;
        margin:0 ;
        padding: 10px 0;
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
        margin-right: 15px;
        color:#ea6f5a;
        width: 20px;
        height: 20px;
        display: inline-block;
        font-size: 20px;
    }
</style>