(function(t){function e(e){for(var a,r,n=e[0],l=e[1],m=e[2],c=0,h=[];c<n.length;c++)r=n[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,m||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,n=1;n<i.length;n++){var l=i[n];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var m=0;m<n.length;m++)e(n[m]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Home")],1)},s=[],o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home-main"},[e("div",{staticClass:"top-main"},[e("section",{staticClass:"top-wrapper"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("div",{staticClass:"item"},[e("div",{staticClass:"item-title"},[t._v(t._s(t.form.name1))]),e("el-form-item",{attrs:{label:t.markName+"："}},[e("el-input-number",{attrs:{size:"medium",controls:!1,min:0},model:{value:t.form.orientation1,callback:function(e){t.$set(t.form,"orientation1",e)},expression:"form.orientation1"}})],1),e("el-form-item",{attrs:{label:t.finshName+"："}},[e("el-input-number",{attrs:{size:"medium",controls:!1,min:0},model:{value:t.form.orientation2,callback:function(e){t.$set(t.form,"orientation2",e)},expression:"form.orientation2"}})],1)],1),e("div",{staticClass:"item"},[e("div",{staticClass:"item-title"},[t._v(t._s(t.form.name2))]),e("el-form-item",{attrs:{label:t.markName+"："}},[e("el-input-number",{attrs:{size:"medium",controls:!1,min:0},model:{value:t.form.statistics1,callback:function(e){t.$set(t.form,"statistics1",e)},expression:"form.statistics1"}})],1),e("el-form-item",{attrs:{label:t.finshName+"："}},[e("el-input-number",{attrs:{size:"medium",controls:!1,min:0},model:{value:t.form.statistics2,callback:function(e){t.$set(t.form,"statistics2",e)},expression:"form.statistics2"}})],1)],1),e("div",{staticClass:"item"},[e("div",{staticClass:"item-title"},[t._v(t._s(t.form.name3))]),e("el-form-item",{attrs:{label:t.markName+"："}},[e("el-input-number",{attrs:{size:"medium",controls:!1,min:0},model:{value:t.form.customer1,callback:function(e){t.$set(t.form,"customer1",e)},expression:"form.customer1"}})],1),e("el-form-item",{attrs:{label:t.finshName+"："}},[e("el-input-number",{attrs:{size:"medium",controls:!1,min:0},model:{value:t.form.customer2,callback:function(e){t.$set(t.form,"customer2",e)},expression:"form.customer2"}})],1)],1)]),e("div",[e("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.init}},[t._v("生成图表")]),e("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.downImage}},[t._v("下载图片")]),e("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.checkDetail}},[t._v("查看明细")])],1)],1),t._m(0)]),e("el-dialog",{staticClass:"table-dialog-box",attrs:{title:t.dialogTitle,width:"1100px",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-table",{attrs:{data:t.listData,border:"","span-method":t.objectSpanMethod,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{width:"222"},scopedSlots:t._u([{key:"header",fn:function(i){return[t.detailForm.isEdit1?e("el-input",{attrs:{placeholder:""},on:{blur:function(e){return t.editHandler(1,!1)}},model:{value:t.detailForm.headName1,callback:function(e){t.$set(t.detailForm,"headName1",e)},expression:"detailForm.headName1"}}):[e("div",{staticClass:"head-name"},[t._v(t._s(t.detailForm.headName1))]),e("i",{staticClass:"el-icon-edit",on:{click:function(e){return t.editHandler(1)}}})]]}},{key:"default",fn:function(i){return[e("el-input",{attrs:{placeholder:""},model:{value:i.row.name,callback:function(e){t.$set(i.row,"name",e)},expression:"scope.row.name"}})]}}])}),e("el-table-column",{attrs:{width:"111"},scopedSlots:t._u([{key:"header",fn:function(i){return[t.detailForm.isEdit2?e("el-input",{attrs:{placeholder:""},on:{blur:function(e){return t.editHandler(2,!1)}},model:{value:t.detailForm.headName2,callback:function(e){t.$set(t.detailForm,"headName2",e)},expression:"detailForm.headName2"}}):[e("div",{staticClass:"head-name"},[t._v(t._s(t.detailForm.headName2))]),e("i",{staticClass:"el-icon-edit",on:{click:function(e){return t.editHandler(2)}}})]]}},{key:"default",fn:function(i){return[e("el-input-number",{attrs:{controls:!1,min:0},model:{value:i.row.mark,callback:function(e){t.$set(i.row,"mark",e)},expression:"scope.row.mark"}})]}}])}),e("el-table-column",{attrs:{width:"111"},scopedSlots:t._u([{key:"header",fn:function(i){return[t.detailForm.isEdit3?e("el-input",{attrs:{placeholder:""},on:{blur:function(e){return t.editHandler(3,!1)}},model:{value:t.detailForm.headName3,callback:function(e){t.$set(t.detailForm,"headName3",e)},expression:"detailForm.headName3"}}):[e("div",{staticClass:"head-name"},[t._v(t._s(t.detailForm.headName3))]),e("i",{staticClass:"el-icon-edit",on:{click:function(e){return t.editHandler(3)}}})]]}},{key:"default",fn:function(i){return[e("el-input-number",{attrs:{controls:!1,min:0},model:{value:i.row.finsh,callback:function(e){t.$set(i.row,"finsh",e)},expression:"scope.row.finsh"}})]}}])}),e("el-table-column",{attrs:{width:"111"},scopedSlots:t._u([{key:"header",fn:function(i){return[t.detailForm.isEdit4?e("el-input",{attrs:{placeholder:""},on:{blur:function(e){return t.editHandler(4,!1)}},model:{value:t.detailForm.headName4,callback:function(e){t.$set(t.detailForm,"headName4",e)},expression:"detailForm.headName4"}}):[e("div",{staticClass:"head-name"},[t._v(t._s(t.detailForm.headName4))]),e("i",{staticClass:"el-icon-edit",on:{click:function(e){return t.editHandler(4)}}})]]}},{key:"default",fn:function(i){return[e("el-input-number",{attrs:{controls:!1,min:0},on:{blur:function(e){return t.changeNumber(i.row)}},model:{value:i.row.score,callback:function(e){t.$set(i.row,"score",e)},expression:"scope.row.score"}})]}}])}),e("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(i){return[t.detailForm.isEdit5?e("el-input",{attrs:{placeholder:""},on:{blur:function(e){return t.editHandler(5,!1)}},model:{value:t.detailForm.headName5,callback:function(e){t.$set(t.detailForm,"headName5",e)},expression:"detailForm.headName5"}}):[e("div",{staticClass:"head-name"},[t._v(t._s(t.detailForm.headName5))]),e("i",{staticClass:"el-icon-edit",on:{click:function(e){return t.editHandler(5)}}})]]}},{key:"default",fn:function(i){return[e("div",{staticClass:"cell-behavior"},[e("el-input",{attrs:{placeholder:""},model:{value:i.row.behavior,callback:function(e){t.$set(i.row,"behavior",e)},expression:"scope.row.behavior"}}),t.shoIcon(i.row.id)?e("i",{staticClass:"el-icon-close",on:{click:function(e){return t.delRow(i.$index)}}}):t._e()],1)]}}])}),e("el-table-column",{attrs:{label:"操作",width:"60",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",{staticClass:"new-beha",on:{click:function(e){return t.newRow(i.row,i.$index)}}},[t._v("新增")])]}}])})],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"medium"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")]),e("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.submitForm}},[t._v("确定")]),e("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.downExcel}},[t._v("导出Excel")])],1)],1)],1)},r=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{attrs:{id:"main"}})])}];i("b7ef"),i("13d5");function n(t){return 1===t.length?t[0]:t.reduce((t,e)=>{let i=Math.max(t,e),a=i;while(a%t!==0||a%e!==0)a+=i;return a})}var l={data(){return{minComg:1,maxComg:1,myChart:null,dialogVisible:!1,markName:"目标",finshName:"已完成",scoreName:"得分",behaviorName:"行为",leading:"领先指标",webTitle:"",dialogTitle:"明细列表",borderColor:["green","blue","red"],barColor:["#91cc75","#5470c6","#ee6666"],form:{name1:"当月已完成目标",name2:"提供统计数据、分析统计分析",name3:"见面客户及其信任方",orientation1:15,orientation2:16,statistics1:6,statistics2:3,customer1:15,customer2:8},listData:[],detailForm:{isEdit1:!1,headName1:"",isEdit2:!1,headName2:"",isEdit3:!1,headName3:"",isEdit4:!1,headName4:"",isEdit5:!1,headName5:""}}},computed:{objectSpanMethod(){return({row:t,column:e,rowIndex:i,columnIndex:a})=>{if([0,1,2,5].includes(a)){if(1===t.id){const t=this.listData.filter(t=>1===t.id).length;return 0===i?{rowspan:t,colspan:1}:{rowspan:0,colspan:0}}if(2===t.id){let t=this.listData.map(t=>t.id).indexOf(2);const e=this.listData.filter(t=>2===t.id).length;return i===t?{rowspan:e,colspan:1}:{rowspan:0,colspan:0}}{let t=this.listData.map(t=>t.id).indexOf(3);const e=this.listData.filter(t=>3===t.id).length;return i===t?{rowspan:e,colspan:1}:{rowspan:0,colspan:0}}}}},shoIcon(){return t=>{const e=this.listData.filter(e=>e.id===t).length;return e>1}}},created(){const t=JSON.parse(sessionStorage.getItem("listJson"))||[],e=JSON.parse(sessionStorage.getItem("infoJson"))||{};this.detailForm.headName1=this.leading,this.detailForm.headName2=this.markName,this.detailForm.headName3=this.finshName,this.detailForm.headName4=this.scoreName,this.detailForm.headName5=this.behaviorName,t.length>=3?(this.listData=t,this.detailForm={...this.detailForm,...e},this.leading=e.headName1,this.markName=e.headName2,this.finshName=e.headName3,this.scoreName=e.headName4,this.behaviorName=e.headName5):this.listData=[{id:1,name:this.form.name1,mark:1,finsh:0,score:0,behavior:""},{id:2,name:this.form.name2,mark:1,finsh:0,score:0,behavior:""},{id:3,name:this.form.name3,mark:1,finsh:0,score:0,behavior:""}],this.setDocummentTitle()},mounted(){document.addEventListener("DOMContentLoaded",()=>{const t=document.body.clientWidth;if(t<900){const e=document.querySelector("#main");e.style.width=t-30+"px",e.style.height=1.3*t-30+"px",e.style.padding="20px 10px"}this.$nextTick(()=>{this.init()})},!1)},methods:{setDocummentTitle(){this.webTitle=this.leading+"进度图",document.title=this.webTitle},editHandler(t,e=!0){this.$set(this.detailForm,"isEdit"+t,e)},delRow(t){this.listData.splice(t,1)},changeNumber(t){let e=0;this.listData.forEach(i=>{i.id===t.id&&(e+=i.score)}),this.listData.forEach(i=>{i.id===t.id&&(i.finsh=e)})},newRow(t,e){const i=this.listData.filter(e=>e.id===t.id).length;this.listData.splice(i+e,0,{id:t.id,name:t.name,mark:t.mark,finsh:t.finsh,score:0,behavior:""})},tableRowClassName({row:t,rowIndex:e}){return 2!==t.id?"warning-row":""},downExcel(){const t=[this.detailForm.headName1||this.leading,this.detailForm.headName2||this.markName,this.detailForm.headName3||this.finshName,this.detailForm.headName4||this.scoreName,this.detailForm.headName5||this.behaviorName];this.downXLSX2(this.listData,this.webTitle,t)},setWidth(t){switch(t){case"name":return 222;case"mark":return 111;case"finsh":return 111;case"score":return 111;case"behavior":return 500}},downXLSX2(t,e,i){let a="<tr>";i.forEach(t=>{a+=`<td>${t}</td>`}),a+="</tr>",t.forEach((t,e)=>{a+="<tr>";for(let i in t)if("id"!==i)if(["name","mark","finsh"].includes(i))if(1===t.id){if(0===e){const e=this.listData.filter(t=>1===t.id).length;a+=`<td width=${this.setWidth(i)}  height="66" rowspan=${e}>${t[i]+"\t"}</td>`}}else if(2===t.id){let s=this.listData.map(t=>t.id).indexOf(2);if(e===s){const e=this.listData.filter(t=>2===t.id).length;a+=`<td width=${this.setWidth(i)}  height="66" rowspan=${e}>${t[i]+"\t"}</td>`}}else{let s=this.listData.map(t=>t.id).indexOf(3);if(e===s){const e=this.listData.filter(t=>3===t.id).length;a+=`<td width=${this.setWidth(i)}  height="66" rowspan=${e}>${t[i]+"\t"}</td>`}}else a+=`<td width=${this.setWidth(i)} height="66">${t[i]+"\t"}</td>`;a+="</tr>"});let s="Sheet1",o="data:application/vnd.ms-excel;base64,",r=`\n        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">\n          <head>\n            \x3c!--[if gte mso 9]>\n            <xml>\n              <x:ExcelWorkbook>\n                <x:ExcelWorksheets>\n                  <x:ExcelWorksheet>\n                    <x:Name>${s}</x:Name>\n                    <x:WorksheetOptions>\n                      <x:DisplayGridlines/>\n                    </x:WorksheetOptions>\n                  </x:ExcelWorksheet>\n                </x:ExcelWorksheets>\n              </x:ExcelWorkbook>\n            </xml>\n            <![endif]--\x3e\n          </head>\n          <body>\n            <table>${a}</table>\n          </body>\n        </html>`;const n=document.createElement("a");n.setAttribute("href",o+this.utf8ToBase64(r)),n.setAttribute("download",e),n.click()},utf8ToBase64(t){return window.btoa(unescape(encodeURIComponent(t)))},downImage(){const t=this.myChart.getDataURL({backgroundColor:"#fff"}),e=document.createElement("a");e.style.display="none",e.download=this.webTitle+".png",e.href=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)},checkDetail(){this.dialogVisible=!0;let t=0,e=0,i=0;this.listData.forEach(a=>{1===a.id?t+=a.score:2===a.id?e+=a.score:i+=a.score}),this.listData.forEach(a=>{1===a.id?(a.name=this.form.name1,a.mark=this.form.orientation1,a.finsh=t||this.form.orientation2):2===a.id?(a.name=this.form.name2,a.mark=this.form.statistics1,a.finsh=e||this.form.statistics2):(a.name=this.form.name3,a.mark=this.form.customer1,a.finsh=i||this.form.customer2)}),this.detailForm.headName1=this.leading,this.detailForm.headName2=this.markName,this.detailForm.headName3=this.finshName,this.detailForm.headName4=this.scoreName,this.detailForm.headName5=this.behaviorName},submitForm(){this.listData.forEach(t=>{1===t.id?(this.form.name1=t.name,this.form.orientation1=t.mark,this.form.orientation2=t.finsh):2===t.id?(this.form.name2=t.name,this.form.statistics1=t.mark,this.form.statistics2=t.finsh):(this.form.name3=t.name,this.form.customer1=t.mark,this.form.customer2=t.finsh)}),this.dialogVisible=!1,this.detailForm.isEdit1=!1,this.detailForm.isEdit2=!1,this.detailForm.isEdit3=!1,this.detailForm.isEdit4=!1,this.detailForm.isEdit5=!1,this.leading=this.detailForm.headName1,this.markName=this.detailForm.headName2,this.finshName=this.detailForm.headName3,this.scoreName=this.detailForm.headName4,this.behaviorName=this.detailForm.headName5,sessionStorage.setItem("listJson",JSON.stringify(this.listData)),sessionStorage.setItem("infoJson",JSON.stringify(this.detailForm)),this.setDocummentTitle(),this.$nextTick(()=>{this.init()})},init(){this.minComg=n([this.form.orientation1,this.form.customer1,this.form.statistics1]);const t=[{name:this.form.name1,total:this.minComg,total2:this.form.orientation1,value:this.tranformLCM(this.form.orientation1,this.form.orientation2),value2:this.form.orientation2},{name:this.form.name2,total:this.minComg,total2:this.form.statistics1,value:this.tranformLCM(this.form.statistics1,this.form.statistics2),value2:this.form.statistics2},{name:this.form.name3,total:this.minComg,total2:this.form.customer1,value:this.tranformLCM(this.form.customer1,this.form.customer2),value2:this.form.customer2}];this.initChart(t)},initChart(t=[]){const e=t[0].total;this.myChart=echarts.init(document.getElementById("main"));const i=t.map((t,e)=>({type:"bar",name:t.name,data:[t],barWidth:"28%",roundCap:!0,showBackground:!0,coordinateSystem:"polar",backgroundStyle:{color:"rgba(89, 113, 126, 0.2)"},itemStyle:{borderColor:this.borderColor[e],opacity:.9,borderWidth:2,color:t=>this.setColor(t)}})),a={color:this.barColor,title:{text:this.webTitle,top:"top",left:"right",textStyle:{fontSize:28}},angleAxis:{max:e,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},radiusAxis:{type:"category",z:10,axisLine:{show:!0,lineStyle:{color:"#000",width:3}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},polar:{center:["55%","55%"],radius:["12%","75%"]},tooltip:{show:!0,formatter:t=>`${t.name}<br/>${this.markName}：${t.data.total2}<br/>${this.finshName}：${t.data.value2}<br/>`},legend:{show:!0,icon:"circle",top:0,left:0,orient:"vertical",itemWidth:20,itemHeight:20,data:t.map(t=>t.name)},series:i};this.myChart.setOption(a)},setColor(t){return t.value>t.data.total?0===t.seriesIndex?new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(145,204,117,0.3)"},{offset:1,color:"#91cc75"}]):1===t.seriesIndex?new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(84,112,198,0.5)"},{offset:1,color:"#5470c6"}]):new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(238,102,102,0.3)"},{offset:1,color:"#ee6666"}]):this.barColor[t.seriesIndex]},tranformLCM(t,e){return this.maxComg=this.minComg/t,e*this.maxComg}}},m=l,d=(i("6f17"),i("2877")),c=Object(d["a"])(m,o,r,!1,null,null,null),h=c.exports,u={name:"App",components:{Home:h}},f=u,p=Object(d["a"])(f,a,s,!1,null,null,null),b=p.exports;Vue.config.productionTip=!1,new Vue({render:t=>t(b)}).$mount("#app")},"6f17":function(t,e,i){"use strict";i("b0c0")},b0c0:function(t,e,i){}});