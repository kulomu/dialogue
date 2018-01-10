import Dialog from './dialog.vue';
var dialogPlugin = {};

dialogPlugin.install = function (Vue, options = {}) {

    const DialogController = Vue.extend(Dialog);

    Vue.prototype.$dialog = (option = {}) => {

        dialogPlugin.instance = dialogPlugin.instance || new DialogController().$mount(document.createElement('div'));
        let instance = dialogPlugin.instance;
        instance.visible = true;
        instance.message = typeof option === 'string' ? option : option.message;
        instance.title = option.title||'';
        instance.btnQuantity = option.btnQuantity||1;
        instance.confirmText = option.confirmText||'确认';
        instance.cancelText = option.cancelText||'取消';
        instance.confirmCB = option.confirm instanceof Function ? option.confirm:null;
        instance.cancelCB = option.cancel instanceof Function ? option.cancel:null;

        // 将toast的DOM挂载到body上
        document.body.appendChild(instance.$el);

    };
};

export default dialogPlugin;