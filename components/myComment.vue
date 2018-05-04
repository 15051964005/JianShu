<template>
    <div class="comment-list">
        <!--提交新内容的表单-->
        <my-form>
            <a href="javascript:void(0)" class="avatar">
                <img src="~assets/img/default-avatar.jpg">
            </a>
        </my-form>
        <div class="normal-comment-list">
            <!--显示留言的信息-->
            <div class="top-title">
                <span>1 条评论</span>
                <a href="#" class="author-only">只看作者</a>
                <div class="pull-right">
                    <a href="#" class="active">按喜欢排序</a>
                    <a href="#">按时间正序</a>
                    <a href="#">按时间倒序</a>
                </div>
            </div>
            <!--显示所有留言的内容-->
            <div class="comment">
                <div class="author">
                    <div class="v-tooltip-container">
                        <nuxt-link to="/u/123" class="avatar">
                            <img src="~assets/img/default-avatar.jpg" alt="">
                        </nuxt-link>
                    </div>
                    <div class="info">
                        <nuxt-link to="/u/123" class="name">
                            简书注册用户
                        </nuxt-link>
                        <div class="meta">
                            <span>68楼 · 2018.04.14 21:38</span>
                        </div>
                    </div>
                </div>
                <div class="comment-wrap">
                    <p>我发现我都可以陪你去做，还有第101件陪你一起看书😂</p>
                    <div class="tool-group" :class="{'iszan':iszan}" @click="iszan=!iszan">
                        <a href="javascrip:void(0)" class="like-btn">
                            <span>8人赞</span>
                        </a>
                        <a href="javascrip:void(0)" class="comment-btn">
                            <i class="fa fa-comment-o"></i>
                            <span>回复</span>
                        </a>
                    </div>
                </div>
                <div class="sub-comment-list">
                    <div class="sub-comment">
                        <div class="sub-comment-content">
                            <div class="v-tooltip-container">
                                <nuxt-link to="/">
                                    南城念北安
                                </nuxt-link>
                                :
                            </div>
                            <span>
                                <a href="#" class="maleskine">
                                    @边瑶姑娘
                                </a>
                                有些人曾经拥有就可以了，他的出现就是为了给你上一课然后离开
                            </span>
                        </div>
                        <div class="sub-tool-group">
                            <span>2018.03.10 13:44</span>
                            <a href="#">
                                <i class="fa fa-comment-o"></i>
                                <span>回复</span>
                            </a>
                        </div>
                    </div>
                    <div class="sub-comment more-comment">
                        <a href="#" class="more-comment-btn">
                            <i class="fa fa-edit"></i>
                            <span>添加新评论</span>
                        </a>
                    </div>
                    <my-form></my-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
    import myForm from '~/components/myForm'
    export default {
        name: "myComment",
        components:{
            myForm
        },
        data() {
            return {
                comments: [
                    {
                        "id": 23204412,
                        "compiled_content": "还不错呦~",
                        "floor": 2,
                        "note_id": 27198662,
                        "user_id": 11696335,
                        "created_at": "2018-04-25T16:37:47.000+08:00",
                        "user": {
                            "id": 11696335,
                            "slug": "ce37c858e871",
                            "nickname": "皮卡林",
                            "avatar": "http://upload.jianshu.io/users/upload_avatars/11696335/84ea8639-f3f1-480a-93d4-e1425762b1c6",
                            "is_author": false,
                            "badge": null
                        },
                        "liked": true,
                        "likes_count": 13,
                        "children_count": 4,
                        "children": [
                            {
                                "id": 23204440,
                                "compiled_content": "是还不错",
                                "user_id": 11696407,
                                "parent_id": 23204412,
                                "created_at": "2018-04-25T16:38:31.000+08:00",
                                "user": {
                                    "id": 11696407,
                                    "slug": "f22f9ffb9bc6",
                                    "nickname": "f22f9ffb9bc6"
                                }
                            },
                            {
                                "id": 23204445,
                                "compiled_content": "约吗？",
                                "user_id": 11696297,
                                "parent_id": 23204412,
                                "created_at": "2018-04-25T16:38:41.000+08:00",
                                "user": {
                                    "id": 11696297,
                                    "slug": "7c3479ef05d2",
                                    "nickname": "0缄默0"
                                }
                            },
                            {
                                "id": 23204464,
                                "compiled_content": "\u003ca href=\"/users/7c3479ef05d2\" class=\"maleskine-author\" target=\"_blank\" data-user-slug=\"7c3479ef05d2\"\u003e@0缄默0\u003c/a\u003e 再见",
                                "user_id": 11696335,
                                "parent_id": 23204412,
                                "created_at": "2018-04-25T16:39:06.000+08:00",
                                "user": {
                                    "id": 11696335,
                                    "slug": "ce37c858e871",
                                    "nickname": "皮卡林"
                                }
                            }
                        ]
                    },
                    {
                        "id": 23204424,
                        "compiled_content": "报警找我110",
                        "floor": 5,
                        "note_id": 27198662,
                        "user_id": 11726469,
                        "created_at": "2018-04-25T16:38:04.000+08:00",
                        "user": {
                            "id": 11726469,
                            "slug": "7466c63a08ac",
                            "nickname": "远方无远方",
                            "avatar": "http://upload.jianshu.io/users/upload_avatars/11726469/2fa7e041-5918-4e17-b3e2-8b252a5a6a32",
                            "is_author": false,
                            "badge": null
                        },
                        "liked": true,
                        "likes_count": 8,
                        "children_count": 1,
                        "children": [
                            {
                                "id": 23204454,
                                "compiled_content": "你是个傻子吧",
                                "user_id": 11726654,
                                "parent_id": 23204424,
                                "created_at": "2018-04-25T16:38:58.000+08:00",
                                "user": {
                                    "id": 11726654,
                                    "slug": "9751bf239b07",
                                    "nickname": "Ace_e60d"
                                }
                            }
                        ]
                    },
                    {
                        "id": 23204418,
                        "compiled_content": "支持一下 ，消灭0回复",
                        "floor": 4,
                        "note_id": 27198662,
                        "user_id": 11726245,
                        "created_at": "2018-04-25T16:37:51.000+08:00",
                        "user": {
                            "id": 11726245,
                            "slug": "b847b7d49625",
                            "nickname": "就是cc",
                            "avatar": "http://cdn2.jianshu.io/assets/default_avatar/8-a356878e44b45ab268a3b0bbaaadeeb7.jpg",
                            "is_author": false,
                            "badge": null
                        },
                        "liked": true,
                        "likes_count": 6,
                        "children_count": 0,
                        "children": []
                    },
                ],
                iszan:false
            }
        }
    }
</script>

<style >
    .comment-list {
        padding-top: 20px;
    }

    .comment-list .new-comment {
        position: relative;
        margin: 0 0 20px 48px;
    }

    .comment-list .new-comment .avatar {
        width: 38px;
        height: 38px;
        display: inline-block;
        position: absolute;
        left: -48px;
        margin-right: 10px;
    }

    .comment-list .new-comment textarea {
        padding: 10px 15px;
        width: 100%;
        height: 80px;
        outline: none;
        resize: none;
        display: inline-block;
        font-size: 13px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        background: #f7f7f7;
        vertical-align: top;
    }
    .comment-list .new-comment .write-function-block {
        height: 50px;
    }
    comment-list .new-comment .write-function-block .emoji-modal-wrap{
        position: relative;
    }
    .comment-list .new-comment .write-function-block .emoji {
        margin-top: 14px;
        float: left;
    }

    .comment-list .new-comment .write-function-block .emoji i {
        font-size: 20px;
        color: #969696;
    }

    .comment-list .new-comment .write-function-block .emoji i:hover {
        color: #2f2f2f;
    }
    /****************表情弹出框样式*****************/
    .comment-list .new-comment .write-function-block .emoji-modal{
        position: absolute;
        top:135px;
        left: -48px;
        z-index: 100;
    }
    .comment-list .new-comment .write-function-block .emoji-modal:before{
        position: absolute;
        left: 12%;
        top: -10px;
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
        border-color: red;
        border-width: 9px 9px 9px 9px;
        /*border-color:  transparent transparent #333 transparent;*/

    }
    .comment-list .new-comment .write-function-block .hint {
        float: left;
        margin: 17px 0 0 20px;
        font-size: 13px;
        color: #969696;

    }

    .comment-list .new-comment .write-function-block .btn-send {
        float: right;
        width: 78px;
        padding: 8px 18px;
        margin: 10px 0;
        display: block;
        font-size: 16px;
        background: #42c02e;
        color: #fff;
        text-align: center;
        border-radius: 20px;
        outline: none;
    }

    .comment-list .new-comment .write-function-block .btn-send:hover {
        background: #3db922;
    }

    .comment-list .new-comment .write-function-block .btn-cancel {
        float: right;
        margin: 18px 30px 0 0;
        font-size: 16px;
        color: #969696;
    }
    .comment-list .new-comment .write-function-block .btn-cancel:hover{
        color: #333333;
    }
    .comment-list .normal-comment-list {
        margin-top: 30px;
    }

    .comment-list .normal-comment-list .top-title {
        padding-bottom: 20px;
        border-bottom: 1px solid #e1e1e1;
        font-size: 17px;
        font-weight: 700;
    }

    .comment-list .normal-comment-list .top-title span {
        vertical-align: middle;
    }

    .comment-list .normal-comment-list .top-title .author-only {
        font-size: 12px;
        padding: 4px 8px;
        margin-left: 10px;
        color: #969696;
        border: 1px solid #dcdcdc;
        border-radius: 20px;
    }
    .comment-list .normal-comment-list .top-title .pull-right{
        float: right;
        display: inline-block;
    }
    .comment-list .normal-comment-list .top-title .pull-right a {
        font-size: 12px;
        color: #969696;
        margin-left: 10px;
        font-weight: 400;
    }
    .comment-list .normal-comment-list .top-title .pull-right a:hover{
        color:#2f2f2f ;
    }
    .comment-list .normal-comment-list .top-title .pull-right a.active {
        color: #2f2f2f;
    }
    .comment-list .normal-comment-list .comment{
        padding: 20px 0 30px 0;
        border-bottom: 1px solid #f0f0f0;
    }
    .comment-list .comment .author{
        margin-bottom: 20px;
    }
    .comment-list .comment .author .v-tooltip-container{
        display: inline-block;
    }
    .comment-list .comment .author .avatar{
        width: 38px;
        height: 38px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
    }
    .comment-list .comment .author .info{
        display: inline-block;
        vertical-align: middle;
    }
    .comment-list .comment .author .info .name{
        font-size: 13px;
    }
    .comment-list .comment .author .info .meta{
        font-size: 12px;
        color: #969696;
    }
    .comment-list .comment .comment-wrap .like-btn{
        padding-left: 23px;
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        font-size: 0;
        color: #969696;
        position: relative;
    }

    .comment-list .comment .comment-wrap .like-btn:before{
        content: "";
        width: 50px;
        height: 50px;
        position: absolute;
        left: -16px;
        top: -16px;
        background-image: url("../assets/img/zan.png");
        background-size: 1050px 50px;
        background-repeat: no-repeat;
        background-position: left;
    }
    .comment-list .comment .comment-wrap .like-btn span{
        font-size: 14px;
        color: #969696;
    }
    .comment-list .comment .comment-wrap .like-btn:hover span{
        color: #333!important;
    }
    .comment-list .comment .comment-wrap .like-btn:hover:before{
        background-position-x: -50px;
    }

    /****************完成点赞的动画效果******************/
    .comment-list .comment .comment-wrap .iszan .like-btn span{
        color: #333;
    }
    .comment-list .comment .comment-wrap .iszan .like-btn:before{
        animation: changeZan .6s 1 steps(19) forwards;
    }
    @keyframes changeZan {
        0%{
            background-position: -50px;
        }
        100%{
            background-position: right;
        }
    }

    .comment-list .comment .comment-wrap .comment-btn{
        font-size: 14px;
        color: #969696;
    }
    .comment-list .comment .comment-wrap .comment-btn:hover{
        color: #333;
    }
    .comment-list .comment .comment-wrap .comment-btn i{
        font-size: 18px;
        margin-right: 5px;
    }
    .comment-list .sub-comment-list{
        margin-top: 20px;
        padding: 5px 0 5px 20px;
        border-left: 2px solid #f0f0f0;
    }
    .comment-list .sub-comment-list .sub-comment{
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #f0f0f0;
    }
    .comment-list .sub-comment-list .sub-comment .sub-comment-content{
        font-size: 14px;
        margin-bottom: 5px;
        line-height: 1.5;
    }
    .comment-list .sub-comment-list  .v-tooltip-container{
        display: inline-block;
    }
    .comment-list .sub-comment-list .sub-comment-content a{
        color: #3194d0;
    }
    .comment-list .sub-comment-list .sub-comment .sub-tool-group{
        font-size: 12px;
        color: #969696;
    }
    .comment-list .sub-comment-list .sub-comment .sub-tool-group a{
        margin-left: 10px;
        color: #969696;
    }
    .comment-list .sub-comment-list .sub-comment .sub-tool-group a:hover{
        color: #333333;
    }
    .comment-list .sub-comment-list .sub-comment .sub-tool-group a i{
        font-size: 14px;
        margin-right: 10px;
    }
    .comment-list .sub-comment-list .more-comment{
        color: #969696;
        font-size: 14px;
        border: 0;
    }
    .comment-list .sub-comment-list .more-comment a{
        color: #969696;
    }
    .comment-list .sub-comment-list .more-comment a:hover{
        color: #333;
    }
    .comment-list .sub-comment-list .more-comment a i{
        margin-right: 5px;
    }
    .comment-list .sub-comment-list form{
        margin: 0;
    }
</style>