"use strict";(self.webpackChunkownily=self.webpackChunkownily||[]).push([[437],{6437:(U,u,a)=>{a.r(u),a.d(u,{TenantModule:()=>q});var p=a(6814),c=a(800),s=a(6223),y=a(3942);const F=JSON.parse('[{"label":"Nom","controlName":"nom","constraintList":["required"]},{"label":"Pr\xe9nom","controlName":"prenom","constraintList":["required"]},{"label":"Email","controlName":"email","constraintList":["required"]},{"label":"T\xe9lephone","controlName":"telephone","constraintList":["required"]}]');var Z=a(6726),t=a(5879),C=a(7589),A=a(6452),N=a(9862);let f=(()=>{class e extends A.I{constructor(n){super("api/locataires",n),this.http=n}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(N.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=a(1311),h=a(2296),m=a(9157),g=a(3680),T=a(8525),L=a(9753);function M(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",5)(2,"div",6),t._UZ(3,"app-input",13),t.qZA()(),t.BQk()),2&e){const n=r.$implicit,o=t.oxw();t.xp6(3),t.Q6J("label",n.label)("form",o.form)("controlName",n.controlName)("constraintList",n.constraintList)}}function O(e,r){if(1&e&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.Q6J("value",n._id),t.xp6(1),t.Oqu(n.adressePostale)}}function J(e,r){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.errorMessages.required)}}let v=(()=>{class e extends Z._{constructor(n,o,i,d,Q){super(),this.fb=n,this.route=o,this.propertiesService=i,this.service=d,this.router=Q,this.properties=[],this.afterResult=["/locataire","liste"],this.mode={title:"Ajout de locataire",buttonText:"Valider",fn:this.service.create},this.inputs=F,this.errorMessages=y.Q,this.form=this.fb.group({nom:["",s.kI.required],prenom:["",[s.kI.min(0),s.kI.required]],email:["",[s.kI.required,s.kI.email]],telephone:["",s.kI.required],adressePostale:["",s.kI.required]})}ngOnInit(){this.propertiesService.findEverything().then(o=>{this.properties=o});const n=this.route.snapshot.params.id;n&&(this.mode={title:"Modification d'un locataire",buttonText:"Modifier",fn:this.service.update},this.service.findById(n).then(o=>{console.log(o),this.form.patchValue(o)}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.qu),t.Y36(c.gz),t.Y36(C.C),t.Y36(f),t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tenant-form"]],features:[t.qOj],decls:20,vars:6,consts:[[1,"mb-4"],[1,"mb-0"],[1,"container"],[1,"form",3,"formGroup"],[4,"ngFor","ngForOf"],[1,"c-row"],[1,"c-col-12","mb-2"],["appearance","outline"],["formControlName","adressePostale"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"c-col-12"],["mat-raised-button","","color","primary",3,"click"],[3,"label","form","controlName","constraintList"],[3,"value"]],template:function(n,o){if(1&n&&(t.TgZ(0,"c-card",0)(1,"c-card-header")(2,"h1",1),t._uU(3),t.qZA()(),t.TgZ(4,"c-card-body")(5,"div",2)(6,"form",3),t.YNc(7,M,4,4,"ng-container",4),t.TgZ(8,"div",5)(9,"div",6)(10,"mat-form-field",7)(11,"mat-label"),t._uU(12,"Adresse postal"),t.qZA(),t.TgZ(13,"mat-select",8),t.YNc(14,O,2,2,"mat-option",9),t.qZA(),t.YNc(15,J,2,1,"mat-error",10),t.qZA()()(),t.TgZ(16,"div",5)(17,"div",11)(18,"button",12),t.NdJ("click",function(){return o.validate()}),t._uU(19),t.qZA()()()()()()()),2&n){let i;t.xp6(3),t.Oqu(o.mode.title),t.xp6(3),t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("ngForOf",o.inputs),t.xp6(7),t.Q6J("ngForOf",o.properties),t.xp6(1),t.Q6J("ngIf",null==(i=o.form.get("adressePostale"))?null:i.hasError("required")),t.xp6(4),t.Oqu(o.mode.buttonText)}},dependencies:[p.sg,p.O5,l.yue,l.AkF,l.nkx,h.lW,m.KE,m.hX,m.TO,g.ey,T.gD,L.a,s._Y,s.JJ,s.JL,s.sg,s.u],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e})();var I=a(2802),x=a(6731);const b=[{path:"",redirectTo:"/",pathMatch:"full"},{path:"ajout",component:v,pathMatch:"full",data:{title:"Ajout de locataire"}},{path:"modification/:id",component:v,pathMatch:"full",data:{title:"Modification d'un locataire"}},{path:"liste",component:(()=>{class e extends I.J{constructor(n,o){super(),this.service=n,this.router=o,this.titles=["Nom","Pr\xe9nom","Email","Adresse postale","T\xe9lephone"],this.getters=[i=>i.nom,i=>i.prenom,i=>i.email,i=>i.bien?.adressePostale,i=>i.telephone],this.updateCommand=["/locataire","modification"]}ngOnInit(){this.find()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f),t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tenant-list"]],features:[t.qOj],decls:7,vars:6,consts:[[1,"mb-0"],[3,"titles","getters","data","actions","count","pageSize","page"]],template:function(n,o){1&n&&(t.TgZ(0,"c-card")(1,"c-card-header")(2,"h1",0),t._uU(3,"Liste des locataires"),t.qZA()(),t.TgZ(4,"c-card-body")(5,"app-paginated-table",1),t.NdJ("page",function(d){return o.find(d)}),t.qZA()()(),t._UZ(6,"br")),2&n&&(t.xp6(5),t.Q6J("titles",o.titles)("getters",o.getters)("data",o.data)("actions",o.actions)("count",o.count)("pageSize",10))},dependencies:[l.yue,l.AkF,l.nkx,x.v]}),e})(),pathMatch:"full",data:{title:"Liste des locataires"}}];let Y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(b),c.Bz]}),e})();var S=a(1165);let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,Y,l.yue,l.AkF,l.nkx,h.ot,m.lN,g.Ng,T.LD,S.X,s.UX]}),e})()}}]);