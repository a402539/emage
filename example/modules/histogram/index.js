define(["require","../module","text!./histogram.xml","qpf","../layers/index","./histogram"],function(e){var t=e("../module"),n=e("text!./histogram.xml"),r=e("qpf"),i=e("../layers/index"),s=r.use("knockout");e("./histogram");var o,u=new t({name:"histogram",xml:n,onResize:function(){var e=this;setTimeout(function(){var t=e.$el.find(".qpf-panel-body");o.resize(t.width(),t.height())})},update:function(e){e?setTimeout(function(){o.setImage(e)}):o.refresh()},histogram:null});return u.on("start",function(){o=u.$el.find(".qpf-ui-histogram").qpf("get")[0]}),u});