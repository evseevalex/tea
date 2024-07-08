import{Aa as te,D as j,E as d,Ea as $,I as B,L as ee,O as U,P as _,S as o,U as R,X as g,a,aa as H,b as u,e as Y,g as K,ha as L,i as J,j as Q,ta as w,v as M,w as E,y as T,z as p}from"./chunk-OPIRWY2I.js";var ce=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(o(R),o(U))},e.\u0275dir=d({type:e});let t=e;return t})(),Pe=(()=>{let e=class e extends ce{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=ee(e)))(s||e)}})(),e.\u0275dir=d({type:e,features:[g]});let t=e;return t})(),he=new p("");var ke={provide:he,useExisting:E(()=>fe),multi:!0};function Ge(){let t=$()?$().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Te=new p(""),fe=(()=>{let e=class e extends ce{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ge())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(o(R),o(U),o(Te,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&L("input",function(f){return s._handleInput(f.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(f){return s._compositionEnd(f.target.value)})},features:[w([ke]),g]});let t=e;return t})();function c(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function pe(t){return t!=null&&typeof t.length=="number"}var ge=new p(""),me=new p(""),je=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ie=class{static min(e){return Be(e)}static max(e){return Ue(e)}static required(e){return Re(e)}static requiredTrue(e){return He(e)}static email(e){return Le(e)}static minLength(e){return $e(e)}static maxLength(e){return We(e)}static pattern(e){return qe(e)}static nullValidator(e){return ve(e)}static compose(e){return be(e)}static composeAsync(e){return Me(e)}};function Be(t){return e=>{if(c(e.value)||c(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<t?{min:{min:t,actual:e.value}}:null}}function Ue(t){return e=>{if(c(e.value)||c(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>t?{max:{max:t,actual:e.value}}:null}}function Re(t){return c(t.value)?{required:!0}:null}function He(t){return t.value===!0?null:{required:!0}}function Le(t){return c(t.value)||je.test(t.value)?null:{email:!0}}function $e(t){return e=>c(e.value)||!pe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function We(t){return e=>pe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function qe(t){if(!t)return ve;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(c(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function ve(t){return null}function ye(t){return t!=null}function _e(t){return te(t)?K(t):t}function Ce(t){let e={};return t.forEach(i=>{e=i!=null?a(a({},e),i):e}),Object.keys(e).length===0?null:e}function Ve(t,e){return e.map(i=>i(t))}function ze(t){return!t.validate}function De(t){return t.map(e=>ze(e)?e:i=>e.validate(i))}function be(t){if(!t)return null;let e=t.filter(ye);return e.length==0?null:function(i){return Ce(Ve(i,e))}}function Ae(t){return t!=null?be(De(t)):null}function Me(t){if(!t)return null;let e=t.filter(ye);return e.length==0?null:function(i){let n=Ve(i,e).map(_e);return Q(n).pipe(J(Ce))}}function Ee(t){return t!=null?Me(De(t)):null}function ne(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function we(t){return t._rawValidators}function Fe(t){return t._rawAsyncValidators}function W(t){return t?Array.isArray(t)?t:[t]:[]}function I(t,e){return Array.isArray(t)?t.includes(e):t===e}function re(t,e){let i=W(e);return W(t).forEach(r=>{I(i,r)||i.push(r)}),i}function se(t,e){return W(e).filter(i=>!I(t,i))}var S=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ae(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ee(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},y=class extends S{get formDirective(){return null}get path(){return null}},A=class extends S{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},O=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ze={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Rt=u(a({},Ze),{"[class.ng-submitted]":"isSubmitted"}),Ht=(()=>{let e=class e extends O{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(o(A,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&H("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[g]});let t=e;return t})(),Lt=(()=>{let e=class e extends O{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(o(y,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&H("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[g]});let t=e;return t})();var C="VALID",F="INVALID",m="PENDING",V="DISABLED",h=class{},x=class extends h{constructor(e,i){super(),this.value=e,this.source=i}},D=class extends h{constructor(e,i){super(),this.pristine=e,this.source=i}},b=class extends h{constructor(e,i){super(),this.touched=e,this.source=i}},v=class extends h{constructor(e,i){super(),this.status=e,this.source=i}},q=class extends h{constructor(e){super(),this.source=e}},z=class extends h{constructor(e){super(),this.source=e}};function Ie(t){return(G(t)?t.validators:t)||null}function Xe(t){return Array.isArray(t)?Ae(t):t||null}function Se(t,e){return(G(e)?e.asyncValidators:t)||null}function Ye(t){return Array.isArray(t)?Ee(t):t||null}function G(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ke(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new M(1e3,"");if(!n[i])throw new M(1001,"")}function Je(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new M(1002,"")})}var N=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new Y,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===C}get invalid(){return this.status===F}get pending(){return this.status==m}get disabled(){return this.status===V}get enabled(){return this.status!==V}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(se(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(se(e,this._rawAsyncValidators))}hasValidator(e){return I(this._rawValidators,e)}hasAsyncValidator(e){return I(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(a({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new b(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new b(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(a({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new D(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new D(!0,n))}markAsPending(e={}){this.status=m;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(a({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=V,this.errors=null,this._forEachChild(r=>{r.disable(u(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.value,n)),this._events.next(new v(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(a({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=C,this._forEachChild(n=>{n.enable(u(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(a({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===m)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.value,i)),this._events.next(new v(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(a({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=m,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=_e(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new v(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?F:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(m)?m:this._anyControlsHaveStatus(F)?F:C}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new D(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new b(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){G(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Xe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ye(this._rawAsyncValidators)}},oe=class extends N{constructor(e,i,n){super(Ie(i),Se(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){Je(this,!0,e),Object.keys(e).forEach(n=>{Ke(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i,this),this._updateTouched(i,this),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,s)=>{n=i(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Oe=new p("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function Qe(t,e){return[...e.path,t]}function ae(t,e,i=Z){X(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),tt(t,e),nt(t,e),it(t,e),et(t,e)}function le(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),k(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function P(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function et(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function X(t,e){let i=we(t);e.validator!==null?t.setValidators(ne(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Fe(t);e.asyncValidator!==null?t.setAsyncValidators(ne(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();P(e._rawValidators,r),P(e._rawAsyncValidators,r)}function k(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=we(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(l=>l!==e.validator);s.length!==r.length&&(i=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Fe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(l=>l!==e.asyncValidator);s.length!==r.length&&(i=!0,t.setAsyncValidators(s))}}}let n=()=>{};return P(e._rawValidators,n),P(e._rawAsyncValidators,n),i}function tt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&xe(t,e)})}function it(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&xe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function xe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function nt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function rt(t,e){t==null,X(t,e)}function st(t,e){return k(t,e)}function ot(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function at(t){return Object.getPrototypeOf(t.constructor)===Pe}function lt(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ut(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===fe?i=s:at(s)?n=s:r=s}),r||n||i||null}function dt(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function ue(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function de(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ct=class extends N{constructor(e=null,i,n){super(Ie(i),Se(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(i)&&(i.nonNullable||i.initialValueIsDefault)&&(de(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ue(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ue(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){de(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ht=t=>t instanceof ct;var Wt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Ne=new p("");var ft={provide:y,useExisting:E(()=>pt)},pt=(()=>{let e=class e extends y{constructor(n,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(k(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){let r=this.form.get(n.path);return ae(r,n,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),r}getControl(n){return this.form.get(n.path)}removeControl(n){le(n.control||null,n,!1),dt(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,r){this.form.get(n.path).setValue(r)}onSubmit(n){return this.submitted=!0,lt(this.form,this.directives),this.ngSubmit.emit(n),this.form._events.next(new q(this.control)),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1,this.form._events.next(new z(this.form))}_updateDomValue(){this.directives.forEach(n=>{let r=n.control,s=this.form.get(n.path);r!==s&&(le(r||null,n),ht(s)&&(ae(s,n,this.callSetDisabledState),n.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){let r=this.form.get(n.path);rt(r,n),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){let r=this.form.get(n.path);r&&st(r,n)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){X(this.form,this),this._oldForm&&k(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(ge,10),o(me,10),o(Oe,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&L("submit",function(f){return s.onSubmit(f)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[w([ft]),g,B]});let t=e;return t})();var gt={provide:A,useExisting:E(()=>mt)},mt=(()=>{let e=class e extends A{set isDisabled(n){}constructor(n,r,s,l,f){super(),this._ngModelWarningConfig=f,this._added=!1,this.name=null,this.update=new _,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=ut(this,l)}ngOnChanges(n){this._added||this._setUpControl(),ot(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return Qe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(y,13),o(ge,10),o(me,10),o(he,10),o(Ne,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[w([gt]),g,B]});let t=e;return t})();var vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=j({type:e}),e.\u0275inj=T({});let t=e;return t})();var qt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Ne,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:Oe,useValue:n.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=j({type:e}),e.\u0275inj=T({imports:[vt]});let t=e;return t})();export{fe as a,ie as b,Ht as c,Lt as d,oe as e,ct as f,Wt as g,pt as h,mt as i,qt as j};
