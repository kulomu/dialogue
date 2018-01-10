<template>
    <transition name="opacity">
        <div id="dialog" class="dialog" v-show="visible" @click.prevent @touchmove.prevent>
            <div>
                <p class="lv-bd-bottom">
                   <span class="title">{{title}}</span>
                   <span>{{message}}</span> 
                </p>
                <span class="btn cancel" v-if="btnQuantity===2" @click="cancel">{{cancelText}}</span>
                <span class="btn" :class="{'one-btn':btnQuantity===1}" @click="confirm">{{confirmText}}</span>
            </div>
        </div>
    </transition>
</template>
<style>
.dialog{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
}
.dialog .cancel{
    color: #999999!important;
}
.dialog div{
    position: absolute;
    width: 70%;
    background: #fff;
    border-radius: 8px;
    top: 50%;
    left: 15%;
    text-align: center;
    color: #333;
    overflow: hidden;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.dialog  div p {
    padding:15px;
    font-size: 12px;
}
.dialog .title{
    font-size: 16px;
    color: #333333;
    line-height: 16px;
    margin-bottom: 10px;
    display: block;
    font-weight: bold;
}
.dialog .btn{
    float: left;
    width: 50%;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #FF8800;
}
.dialog .btn.one-btn{
    width: 100%;
}
.dialog .btn:nth-of-type(2n){
    border-right: 1px solid #ddd;
}
.opacity-enter-active, .opacity-leave-active {
  opacity: 1;
  transition: all 0.3s;
}
.opacity-enter, .opacity-leave-to {
  /* transform: scale(0); */
  opacity:0;
  transition: all 0.3s;
}
</style>

<script type="text/ecmascript-6">
export default {
    name:'dialog',
    data() {
        return{
            visible:false,
            title:'',
            message:'提示',
            confirmText:'确认',
            cancelText:'取消',
            btnQuantity:1,
            confirmCB:null,
            cancelCB:null
        }
    },
    methods:{
        confirm(){
            this.visible = false;
            if(this.confirmCB){
                this.confirmCB()
            }
        },
        cancel(){
            this.visible = false;
            if(this.cancelCB){
                this.cancelCB()
            }
        }
    },
    // mounted() {
    //     this.visible = true;
    // }
};
</script>
