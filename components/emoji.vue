<template>
  <div class="emoji-all">
    <ul class="emoji-controller">
      <li 
        v-for="(pannel,index) in pannels"
        @click="changeActive(index)"
        :class="{'active': index === activeIndex}" :key="index">
        <a href="javascript:void(0)">{{pannel}}</a>
      </li>
    </ul>
    <ul class="emoji-container">
      <li 
        v-for="(emojiGroup, index) in emojis" 
        style="padding: 0" 
        :key="index"
        v-if="index === activeIndex">
        <a 
          href="javascript:void (0);"
          v-for="(emoji, index) in emojiGroup"  
          :key="index" @click="selectItem(emoji)">
           <span 
              class="emoji-item"
              :title="emoji"
              :class="'sprite-' + getPureName(emoji)"></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import data from '../data/emoji-data.js'

export default {
  name: 'emoji',
  data () {
    return {
      emojiData: data,
      pannels: ['表情', '自然', '物品', '地点', '符号'],
      activeIndex: 0
    }
  },
  methods: {
    changeActive (index) {
      this.activeIndex = index
    },
    getPureName (name) {
      return name.replace(/:/g, '')
    },
    selectItem (emoji) {
      this.$emit('select', emoji)
    }
  },
  computed: {
    emojis () {
      return this.pannels.map(item => {
        return Object.keys(this.emojiData[item])
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/emoji-sprite.scss';

.emoji-all {
  width: 380px;
  height: 200px;
  bottom: 30px;
  background: #fff;
  z-index: 10;
  padding-bottom: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  .emoji-controller {
    height: 50px;
    overflow: hidden;
    background: #eeeeee;
    text-align: center;
    margin: 0;
    padding: 7px 0;
    li {
      float: left;
      width: 65px;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      text-align: center;
      position: relative;
      &.active::after{
        content: '';
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 4px;
        position: absolute;
      }
    }
    li.active{
      a{
        color: #ea6f5a!important;
      }
    }
  }
  .emoji-controller:before{
    content: '';
    display: table;
  }
  .emoji-container {
    height: 140px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;

    li {
      font-size: 0;
      padding: 5px;
      a {
        float: left;
        overflow: hidden;
        height: 35px;
        transition: all ease-out .2s;
        border-radius: 4px;
        &:hover {
          background-color: #d8d8d8;
          border-color: #d8d8d8;
        }
        span {
          width: 25px;
          height: 25px;
          display: inline-block;
          border: 1px solid transparent;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
