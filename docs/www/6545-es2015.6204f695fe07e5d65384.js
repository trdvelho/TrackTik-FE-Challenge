(self.webpackChunkTracktikFeTest=self.webpackChunkTracktikFeTest||[]).push([[6545],{6545:function(t,n,e){"use strict";e.r(n),e.d(n,{HomePageModule:function(){return A}});var i=e(8583),o=e(3083),r=e(665),a=e(8739),l=e(4762),c=e(639),s=e(4419);let g=(()=>{class t{constructor(t,n,e,i){this.modalCtrl=t,this.formBuilder=n,this.trackTikService=e,this.toastCtrl=i,this.form=this.formBuilder.group({title:["",[r.kI.required]],street:["",[r.kI.required]],city:["",[r.kI.required]],country:["",[r.kI.required]],state:["",[r.kI.required]],zip:["",[r.kI.required]],firstName:["",[r.kI.required]],lastName:["",[r.kI.required]],contactJobTitle:["",[r.kI.required]],contactEmail:[""],contactPhoneNumber:["",[r.kI.required]],contactStreet:[""],contactCity:[""],contactCountry:[""],contactState:[""],contactZip:[""]})}closeModal(){this.modalCtrl.dismiss()}addSite(){this.trackTikService.addSite({title:this.form.value.title,address:{city:this.form.value.city,state:this.form.value.state,country:this.form.value.country,street:this.form.value.street,zipCode:this.form.value.zip},contacts:{main:{firstName:this.form.value.firstName,lastName:this.form.value.lastName,jobTitle:this.form.value.contactJobTitle,address:{city:this.form.value.contactCity,street:this.form.value.contactStreet,zipCode:this.form.value.contactZip,country:this.form.value.contactCountry,state:this.form.value.contactState},email:this.form.value.contacEmail,phoneNumber:this.form.value.contactPhoneNumber}}}).then(t=>(0,l.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Site added successfully!",duration:2e3,position:"top"})).present(),this.modalCtrl.dismiss(t)}))}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(o.IN),c.Y36(r.qu),c.Y36(s.p),c.Y36(o.yF))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-new-site"]],decls:83,vars:2,consts:[["slot","end",3,"click"],["name","close-outline"],[1,"title"],[1,"ion-padding"],["novalidate","",1,"login-form",3,"formGroup","submit"],[1,"form-name"],["lines","none",1,"ion-margin"],[1,"ion-margin-bottom","ion-margin-top"],["position","floating"],["formControlName","title","type","text","placeholder","Type it here"],["type","text","placeholder","type it here","formControlName","street"],["type","text","placeholder","type it here","formControlName","city"],["type","text","placeholder","type it here","formControlName","state"],["type","text","placeholder","type it here","formControlName","country"],["type","text","placeholder","type it here","formControlName","zip"],["type","text","placeholder","Type it here","formControlName","firstName"],["type","text","placeholder","type it here","formControlName","lastName"],["type","text","placeholder","type it here","formControlName","contactJobTitle"],["type","text","placeholder","type it here","formControlName","contactEmail"],["type","text","placeholder","type it here","formControlName","contactPhoneNumber"],["type","text","placeholder","type it here","formControlName","contactCity"],["type","text","placeholder","type it here","formControlName","contactStreet"],["type","text","placeholder","type it here","formControlName","contactState"],["type","text","placeholder","type it here","formControlName","contactZip"],["size","block","type","submit",1,"ion-text-uppercase",3,"disabled"]],template:function(t,n){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c.NdJ("click",function(){return n.closeModal()}),c._UZ(3,"ion-icon",1),c.qZA(),c.TgZ(4,"ion-title"),c.TgZ(5,"div",2),c._uU(6,"Add "),c.TgZ(7,"span"),c._uU(8,"Site"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"ion-content",3),c.TgZ(10,"form",4),c.NdJ("submit",function(){return n.addSite()}),c.TgZ(11,"div",5),c._uU(12,"Site infos"),c.qZA(),c.TgZ(13,"ion-list",6),c.TgZ(14,"p"),c._uU(15," Required fields (*)"),c.qZA(),c.TgZ(16,"ion-item",7),c.TgZ(17,"ion-label",8),c._uU(18,"Name *"),c.qZA(),c._UZ(19,"ion-input",9),c.qZA(),c.TgZ(20,"ion-item",7),c.TgZ(21,"ion-label",8),c._uU(22,"Street *"),c.qZA(),c._UZ(23,"ion-input",10),c.qZA(),c.TgZ(24,"ion-item",7),c.TgZ(25,"ion-label",8),c._uU(26,"City *"),c.qZA(),c._UZ(27,"ion-input",11),c.qZA(),c.TgZ(28,"ion-item",7),c.TgZ(29,"ion-label",8),c._uU(30,"State *"),c.qZA(),c._UZ(31,"ion-input",12),c.qZA(),c.TgZ(32,"ion-item",7),c.TgZ(33,"ion-label",8),c._uU(34,"Country *"),c.qZA(),c._UZ(35,"ion-input",13),c.qZA(),c.TgZ(36,"ion-item",7),c.TgZ(37,"ion-label",8),c._uU(38,"Zip Code *"),c.qZA(),c._UZ(39,"ion-input",14),c.qZA(),c.qZA(),c.TgZ(40,"div",5),c._uU(41,"Main contact"),c.qZA(),c.TgZ(42,"ion-list",6),c.TgZ(43,"p"),c._uU(44," Required fields (*)"),c.qZA(),c.TgZ(45,"ion-item",7),c.TgZ(46,"ion-label",8),c._uU(47,"First name *"),c.qZA(),c._UZ(48,"ion-input",15),c.qZA(),c.TgZ(49,"ion-item",7),c.TgZ(50,"ion-label",8),c._uU(51,"Last name *"),c.qZA(),c._UZ(52,"ion-input",16),c.qZA(),c.TgZ(53,"ion-item",7),c.TgZ(54,"ion-label",8),c._uU(55,"Job title *"),c.qZA(),c._UZ(56,"ion-input",17),c.qZA(),c.TgZ(57,"ion-item",7),c.TgZ(58,"ion-label",8),c._uU(59,"Email"),c.qZA(),c._UZ(60,"ion-input",18),c.qZA(),c.TgZ(61,"ion-item",7),c.TgZ(62,"ion-label",8),c._uU(63,"Phone number *"),c.qZA(),c._UZ(64,"ion-input",19),c.qZA(),c.TgZ(65,"ion-item",7),c.TgZ(66,"ion-label",8),c._uU(67,"City"),c.qZA(),c._UZ(68,"ion-input",20),c.qZA(),c.TgZ(69,"ion-item",7),c.TgZ(70,"ion-label",8),c._uU(71,"Street"),c.qZA(),c._UZ(72,"ion-input",21),c.qZA(),c.TgZ(73,"ion-item",7),c.TgZ(74,"ion-label",8),c._uU(75,"State"),c.qZA(),c._UZ(76,"ion-input",22),c.qZA(),c.TgZ(77,"ion-item",7),c.TgZ(78,"ion-label",8),c._uU(79,"Zip Code"),c.qZA(),c._UZ(80,"ion-input",23),c.qZA(),c.qZA(),c.TgZ(81,"ion-button",24),c._uU(82," Add "),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(10),c.Q6J("formGroup",n.form),c.xp6(71),c.Q6J("disabled",!n.form.valid))},directives:[o.Gu,o.sr,o.Sm,o.gu,o.wd,o.W2,r._Y,r.JL,r.sg,o.q_,o.Ie,o.Q$,o.pK,o.j9,r.JJ,r.u,o.YG],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#f7f7f7;position:relative}ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{position:absolute;right:0;font-size:30px}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:center}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:25px}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:var(--ion-tracktikred-color);padding:2px;color:#fff}ion-content[_ngcontent-%COMP%]{--background:#d3d3d3}ion-content[_ngcontent-%COMP%]   .form-name[_ngcontent-%COMP%]{color:var(--ion-tracktikred-color);font-size:15px;text-transform:uppercase;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:10px;font-size:12px}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:gray}"]}),t})(),u=(()=>{class t{constructor(t){this.popOverCtrl=t}ngOnInit(){}applyFilter(){this.siteTitle||this.contactFirstName?this.popOverCtrl.dismiss({title:this.siteTitle,contactFirstName:this.contactFirstName}):(console.log("p"),this.popOverCtrl.dismiss())}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(o.Dh))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-filter"]],decls:12,vars:2,consts:[[1,"ion-padding"],["position","floating"],["placeholder","Type it here",3,"ngModel","ngModelChange"],["expand","full","fill","solid",3,"click"]],template:function(t,n){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-title"),c._uU(2,"Filter by"),c.qZA(),c.qZA(),c.TgZ(3,"ion-content",0),c.TgZ(4,"ion-label",1),c._uU(5,"Site title"),c.qZA(),c.TgZ(6,"ion-input",2),c.NdJ("ngModelChange",function(t){return n.siteTitle=t}),c.qZA(),c.TgZ(7,"ion-label",1),c._uU(8,"Contact first name"),c.qZA(),c.TgZ(9,"ion-input",2),c.NdJ("ngModelChange",function(t){return n.contactFirstName=t}),c.qZA(),c.TgZ(10,"ion-button",3),c.NdJ("click",function(){return n.applyFilter()}),c._uU(11," Apply "),c.qZA(),c.qZA()),2&t&&(c.xp6(6),c.Q6J("ngModel",n.siteTitle),c.xp6(3),c.Q6J("ngModel",n.contactFirstName))},directives:[o.Gu,o.wd,o.W2,o.Q$,o.pK,o.j9,r.JJ,r.On,o.YG],styles:["ion-content[_ngcontent-%COMP%]{--background:#d3d3d3}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:gray}"]}),t})();var d=e(2533);function p(t,n){if(1&t&&(c.TgZ(0,"div"),c.TgZ(1,"strong"),c._uU(2,"Filtered by"),c.qZA(),c._uU(3),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.AsE(" ",(null==t.filterData?null:t.filterData.title)&&"Site title: "+(null==t.filterData?null:t.filterData.title)," ",(null==t.filterData?null:t.filterData.contactFirstName)&&"Contact first name: "+(null==t.filterData?null:t.filterData.contactFirstName)," ")}}function Z(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"ion-button",13),c.NdJ("click",function(){return c.CHM(t),c.oxw().getSiteListData()}),c.YNc(1,p,4,2,"div",7),c._UZ(2,"ion-icon",14),c.qZA()}if(2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.filterData)}}function f(t,n){1&t&&(c.TgZ(0,"ion-item"),c.TgZ(1,"ion-avatar",15),c._UZ(2,"ion-skeleton-text",16),c.qZA(),c.TgZ(3,"ion-label"),c.TgZ(4,"h3"),c._UZ(5,"ion-skeleton-text",17),c.qZA(),c.TgZ(6,"p"),c._UZ(7,"ion-skeleton-text",18),c.qZA(),c.TgZ(8,"p"),c._UZ(9,"ion-skeleton-text",19),c.qZA(),c.qZA(),c.qZA())}function m(t,n){if(1&t&&(c.TgZ(0,"div"),c.TgZ(1,"ion-list"),c.YNc(2,f,10,0,"ion-item",8),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(2),c.Q6J("ngForOf",t.fakeList)}}const h=function(t){return["/site-detail",t]};function _(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"ion-item-sliding"),c.TgZ(1,"ion-item-options",20),c.TgZ(2,"ion-item-option",21),c.NdJ("click",function(){const n=c.CHM(t).index;return c.oxw().deleteSite(n)}),c._uU(3,"Delete"),c.qZA(),c.qZA(),c.TgZ(4,"ion-item",22),c.TgZ(5,"ion-grid"),c.TgZ(6,"ion-row"),c.TgZ(7,"ion-col",23),c.TgZ(8,"ion-avatar"),c._UZ(9,"img",24),c.qZA(),c.qZA(),c.TgZ(10,"ion-col",25),c.TgZ(11,"div",26),c.TgZ(12,"ion-label"),c._uU(13),c.qZA(),c.TgZ(14,"div",1),c.TgZ(15,"strong"),c._uU(16,"Address:"),c.qZA(),c._uU(17),c.qZA(),c.TgZ(18,"div",1),c.TgZ(19,"strong"),c._uU(20,"Main contact:"),c.qZA(),c._uU(21),c.qZA(),c.qZA(),c.qZA(),c.TgZ(22,"ion-col",27),c._UZ(23,"ion-icon",28),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=n.$implicit;c.xp6(4),c.Q6J("routerLink",c.VKq(5,h,t.id)),c.xp6(5),c.Q6J("src",t.images[0].replace(".com",".com.br"),c.LSH),c.xp6(4),c.Oqu(t.title),c.xp6(4),c.hij(" ",t.address.city,""),c.xp6(4),c.hij(" ",t.contacts.main.address.city,"")}}const C=function(t,n){return{itemsPerPage:10,currentPage:t,totalItems:n}},T=[{path:"",component:(()=>{class t{constructor(t,n,e,i){this.trackTikService=t,this.toastCtrl=n,this.modalCtrl=e,this.popoverCtrl=i,this.fakeList=Array(10),this.sitesList=[]}ngOnInit(){this.getSiteListData()}getSiteListData(){this.filterData=null,this.sitesList=null,this.trackTikService.getSitesList(1,null).then(t=>{setTimeout(()=>{this.sitesList=[...t.body],this.currentPage=1,this.sitesTotalCount=t.headers.get("X-Total-Count")},1500)})}getPage(t){return(0,l.mG)(this,void 0,void 0,function*(){this.sitesList=null,yield this.trackTikService.getSitesList(t,null,this.filterData).then(n=>{setTimeout(()=>{this.currentPage=t,this.sitesList=n.body},200)})})}deleteSite(t){this.trackTikService.deleteSite(this.sitesList[t].id).then(()=>(0,l.mG)(this,void 0,void 0,function*(){this.sitesList.splice(t,1),(yield this.toastCtrl.create({message:"Site deleted successfully",duration:1500,position:"top"})).present()}))}addSite(){return(0,l.mG)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:g});t.present(),t.onDidDismiss().then(t=>{})})}showFilter(t){return(0,l.mG)(this,void 0,void 0,function*(){const n=yield this.popoverCtrl.create({component:u,event:t});n.present(),n.onDidDismiss().then(t=>{if(t.data){console.log(t);const n={title:t.data.title,firstName:t.data.contactFirstName};this.trackTikService.getSitesList(1,null,n).then(t=>(0,l.mG)(this,void 0,void 0,function*(){0==t.body.length?(yield this.toastCtrl.create({message:"None sites found for your filter",duration:2e3,position:"top"})).present():(n&&(this.filterData=n),this.sitesList=t.body,this.sitesTotalCount=t.headers.get("X-Total-Count")),console.log(t)}))}})})}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(s.p),c.Y36(o.yF),c.Y36(o.IN),c.Y36(o.Dh))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-home"]],decls:26,vars:10,consts:[[1,"title"],[1,"subtitle"],[1,"filter","ion-padding"],["class","filter-info",3,"click",4,"ngIf"],["slot","end",3,"click"],["name","funnel-outline"],[3,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","person-add-outline"],[3,"pageChange"],[1,"filter-info",3,"click"],["name","close-circle-outline","slot","end"],["slot","start"],["animated",""],["animated","",2,"width","50%"],["animated","",2,"width","80%"],["animated","",2,"width","60%"],["side","end"],["color","danger",3,"click"],[3,"routerLink"],["size","2",1,"avatar"],["onError","this.src='/assets/img/avatar-person.png'",3,"src"],["size","9"],[1,"site-infos"],["size","1",1,"arrow-right"],["name","chevron-forward-outline"]],template:function(t,n){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c.TgZ(3,"div",0),c._uU(4,"Track"),c.TgZ(5,"span"),c._uU(6,"Tik"),c.qZA(),c.qZA(),c.TgZ(7,"div",1),c.TgZ(8,"span"),c._uU(9,"FE"),c.qZA(),c._uU(10,"Challenge"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"ion-toolbar",2),c.YNc(12,Z,3,1,"ion-button",3),c.TgZ(13,"ion-buttons",4),c.NdJ("click",function(t){return n.showFilter(t)}),c._UZ(14,"ion-icon",5),c.qZA(),c.qZA(),c.qZA(),c.TgZ(15,"ion-content",6),c.YNc(16,m,3,1,"div",7),c.TgZ(17,"ion-list"),c.YNc(18,_,24,7,"ion-item-sliding",8),c.ALo(19,"paginate"),c.qZA(),c.TgZ(20,"ion-fab",9),c.TgZ(21,"ion-fab-button",10),c.NdJ("click",function(){return n.addSite()}),c._UZ(22,"ion-icon",11),c.qZA(),c.qZA(),c.qZA(),c.TgZ(23,"ion-footer"),c.TgZ(24,"ion-toolbar"),c.TgZ(25,"pagination-controls",12),c.NdJ("pageChange",function(t){return n.getPage(t)}),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(12),c.Q6J("ngIf",n.filterData),c.xp6(3),c.Q6J("fullscreen",!0),c.xp6(1),c.Q6J("ngIf",!n.sitesList),c.xp6(2),c.Q6J("ngForOf",c.xi3(19,4,n.sitesList,c.WLB(7,C,n.currentPage,n.sitesTotalCount))))},directives:[o.Gu,o.sr,o.wd,i.O5,o.Sm,o.gu,o.W2,o.q_,i.sg,o.IJ,o.W4,o.fr,d.LS,o.YG,o.Ie,o.BJ,o.CK,o.Q$,o.td,o.IK,o.u8,o.YI,a.rH,o.jY,o.Nd,o.wI],pipes:[d._s],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#f7f7f7}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:center}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:25px}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:var(--ion-tracktikred-color);padding:2px;color:#fff}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:12px}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-tracktikred-color)}.filter[_ngcontent-%COMP%]{padding:0 10px;--background:#d3d3d3}.filter[_ngcontent-%COMP%]   .filter-info[_ngcontent-%COMP%]{--background:transparent;font-size:10px;--color:#000}ion-content[_ngcontent-%COMP%]{--background:#d3d3d3}ion-content[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--ion-item-background:transparent}ion-content[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;align-items:center;--border-radius:50%}ion-content[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:2px solid #000}ion-item[_ngcontent-%COMP%]   .site-infos[_ngcontent-%COMP%]{margin-left:5px;padding:15px 0;color:#cf2c26;font-weight:700}ion-item[_ngcontent-%COMP%]   .site-infos[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:gray}ion-item[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{display:flex;align-items:center}ion-item[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%]{justify-content:flex-end}ion-item[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{background:transparent url(http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif) 50% no-repeat}ion-fab-button[_ngcontent-%COMP%]{--background:#fff}ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-tracktikred-color)}ion-footer[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]{padding:0;margin-left:0;font-size:11px}"]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(T)],a.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,d.JX,r.u5,o.Pc,q,r.UX]]}),t})()}}]);