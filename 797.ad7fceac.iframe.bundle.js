"use strict";(self.webpackChunk_reyhappen_react_easy_sort=self.webpackChunk_reyhappen_react_easy_sort||[]).push([[797],{"./src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Uq:()=>SortableItem,$B:()=>SortableKnob,Ay:()=>src});var react=__webpack_require__("./node_modules/react/index.js"),findItemIndexAtPosition=function(param,itemsRect){for(var x=param.x,y=param.y,_ref_fallbackToClosest=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fallbackToClosest,fallbackToClosest=void 0!==_ref_fallbackToClosest&&_ref_fallbackToClosest,smallestDistance=1e4,smallestDistanceIndex=-1,index=0;index<itemsRect.length;index+=1){var rect=itemsRect[index];if(x>=rect.left&&x<rect.right&&y>=rect.top&&y<rect.bottom)return index;if(fallbackToClosest){var itemCenterX=(rect.left+rect.right)/2,itemCenterY=(rect.top+rect.bottom)/2,distance=Math.sqrt(Math.pow(x-itemCenterX,2)+Math.pow(y-itemCenterY,2));distance<smallestDistance&&(smallestDistance=distance,smallestDistanceIndex=index)}}return smallestDistanceIndex};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},getTouchPoint=function(touch){return{x:Number(touch.clientX),y:Number(touch.clientY)}},getPointInContainer=function(point,containerTopLeft){return{x:point.x-containerTopLeft.x,y:point.y-containerTopLeft.y}},preventDefault=function(event){event.preventDefault()},enableContextMenu=function(){window.removeEventListener("contextmenu",preventDefault)},useDrag=function(param){var onStart=param.onStart,onMove=param.onMove,onEnd=param.onEnd,_param_allowDrag=param.allowDrag,allowDrag=void 0===_param_allowDrag||_param_allowDrag,containerRef=param.containerRef,knobs=param.knobs,containerPositionRef=react.useRef({x:0,y:0}),handleTouchStartTimerRef=react.useRef(void 0),isFirstMoveRef=react.useRef(!1),callbacksRef=react.useRef({onStart,onMove,onEnd}),_React_useState=_sliced_to_array(react.useState(!1),2),isTouchDevice=_React_useState[0],setTouchDevice=_React_useState[1];react.useEffect((function(){callbacksRef.current={onStart,onMove,onEnd}}),[onStart,onMove,onEnd]);var cancelTouchStart=function(){handleTouchStartTimerRef.current&&window.clearTimeout(handleTouchStartTimerRef.current)},saveContainerPosition=react.useCallback((function(){if(containerRef.current){var bounds=containerRef.current.getBoundingClientRect();containerPositionRef.current={x:bounds.left,y:bounds.top}}}),[containerRef]),onDrag=react.useCallback((function(pointInWindow){var point=getPointInContainer(pointInWindow,containerPositionRef.current);callbacksRef.current.onMove&&callbacksRef.current.onMove({pointInWindow,point})}),[]),onMouseMove=react.useCallback((function(e){if(isFirstMoveRef.current){isFirstMoveRef.current=!1;var pointInWindow=getMousePoint(e),point=getPointInContainer(pointInWindow,containerPositionRef.current);callbacksRef.current.onStart&&callbacksRef.current.onStart({point,pointInWindow})}else onDrag(getMousePoint(e))}),[onDrag]),onTouchMove=react.useCallback((function(e){e.cancelable?(e.preventDefault(),onDrag(getTouchPoint(e.touches[0]))):(document.removeEventListener("touchmove",onTouchMove),callbacksRef.current.onEnd&&callbacksRef.current.onEnd())}),[onDrag]),onMouseUp=react.useCallback((function(){isFirstMoveRef.current=!1,document.removeEventListener("mousemove",onMouseMove),document.removeEventListener("mouseup",onMouseUp),callbacksRef.current.onEnd&&callbacksRef.current.onEnd()}),[onMouseMove]),onTouchEnd=react.useCallback((function(){document.removeEventListener("touchmove",onTouchMove),document.removeEventListener("touchend",onTouchEnd),enableContextMenu(),callbacksRef.current.onEnd&&callbacksRef.current.onEnd()}),[onTouchMove]),onMouseDown=react.useCallback((function(e){0===e.button&&((null==knobs?void 0:knobs.length)&&!knobs.find((function(knob){return knob.contains(e.target)}))||(document.addEventListener("mousemove",onMouseMove),document.addEventListener("mouseup",onMouseUp),saveContainerPosition(),isFirstMoveRef.current=!0))}),[onMouseMove,onMouseUp,saveContainerPosition,knobs]),handleTouchStart=react.useCallback((function(point,pointInWindow){document.addEventListener("touchmove",onTouchMove,{capture:!1,passive:!1}),document.addEventListener("touchend",onTouchEnd),window.addEventListener("contextmenu",preventDefault,{capture:!0,passive:!1}),callbacksRef.current.onStart&&callbacksRef.current.onStart({point,pointInWindow})}),[onTouchEnd,onTouchMove]),onTouchStart=react.useCallback((function(e){if(!(null==knobs?void 0:knobs.length)||knobs.find((function(knob){return knob.contains(e.target)}))){saveContainerPosition();var pointInWindow=getTouchPoint(e.touches[0]),point=getPointInContainer(pointInWindow,containerPositionRef.current);handleTouchStartTimerRef.current=window.setTimeout((function(){return handleTouchStart(point,pointInWindow)}),120)}}),[handleTouchStart,saveContainerPosition,knobs]),detectTouchDevice=react.useCallback((function(){setTouchDevice(!0),document.removeEventListener("touchstart",detectTouchDevice)}),[]),touchScrollListener=react.useCallback((function(){cancelTouchStart()}),[]);return react.useLayoutEffect((function(){if(isTouchDevice){var container=containerRef.current;return allowDrag&&(null==container||container.addEventListener("touchstart",onTouchStart,{capture:!0,passive:!1}),document.addEventListener("touchmove",touchScrollListener,{capture:!1,passive:!1}),document.addEventListener("touchend",touchScrollListener,{capture:!1,passive:!1})),function(){null==container||container.removeEventListener("touchstart",onTouchStart,{capture:!0}),document.removeEventListener("touchmove",touchScrollListener,{capture:!1}),document.removeEventListener("touchend",touchScrollListener,{capture:!1}),document.removeEventListener("touchmove",onTouchMove),document.removeEventListener("touchend",onTouchEnd),enableContextMenu(),cancelTouchStart()}}return document.addEventListener("touchstart",detectTouchDevice),function(){document.removeEventListener("touchstart",detectTouchDevice),document.removeEventListener("mousemove",onMouseMove),document.removeEventListener("mouseup",onMouseUp)}}),[isTouchDevice,allowDrag,detectTouchDevice,onMouseMove,onTouchMove,touchScrollListener,onTouchEnd,onMouseUp,containerRef,onTouchStart]),isTouchDevice?{}:{onMouseDown}};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SortableListContext=react.createContext(void 0),SortableList=function(_param){var _dropTargetLogic_render,content,dropTargetRef,children=_param.children,_param_allowDrag=_param.allowDrag,allowDrag=void 0===_param_allowDrag||_param_allowDrag,onSortEnd=_param.onSortEnd,draggedItemClassName=_param.draggedItemClassName,draggedForbiddenClassName=_param.draggedForbiddenClassName,_param_forbiddenPointType=_param.forbiddenPointType,forbiddenPointType=void 0===_param_forbiddenPointType?"point":_param_forbiddenPointType,as=_param.as,lockAxis=_param.lockAxis,customHolderRef=_param.customHolderRef,dropTarget=_param.dropTarget,rest=_object_without_properties(_param,["children","allowDrag","onSortEnd","draggedItemClassName","draggedForbiddenClassName","forbiddenPointType","as","lockAxis","customHolderRef","dropTarget"]),itemsRef=react.useRef([]),itemsRect=react.useRef([]),knobs=react.useRef([]),containerRef=react.useRef(null),targetRef=react.useRef(null),sourceIndexRef=react.useRef(void 0),lastTargetIndexRef=react.useRef(void 0),offsetPointRef=react.useRef({x:0,y:0}),dropTargetLogic=(content=dropTarget,dropTargetRef=react.useRef(null),content?{show:function(sourceRect){dropTargetRef.current&&(dropTargetRef.current.style.width="".concat(sourceRect.width,"px"),dropTargetRef.current.style.height="".concat(sourceRect.height,"px"),dropTargetRef.current.style.opacity="1",dropTargetRef.current.style.visibility="visible")},hide:function(){dropTargetRef.current&&(dropTargetRef.current.style.opacity="0",dropTargetRef.current.style.visibility="hidden")},setPosition:function(index,itemsRect,lockAxis){if(dropTargetRef.current){var sourceRect=itemsRect[index],newX="y"===lockAxis?sourceRect.left:itemsRect[index].left,newY="x"===lockAxis?sourceRect.top:itemsRect[index].top;dropTargetRef.current.style.transform="translate3d(".concat(newX,"px, ").concat(newY,"px, 0px)")}},render:function(){return react.createElement("div",{ref:dropTargetRef,"aria-hidden":!0,style:{opacity:0,visibility:"hidden",position:"fixed",top:0,left:0,pointerEvents:"none"}},content)}}:{});react.useEffect((function(){var holder=(null==customHolderRef?void 0:customHolderRef.current)||document.body;return function(){targetRef.current&&holder.removeChild(targetRef.current)}}),[customHolderRef]);var updateTargetPosition=function(position){if(targetRef.current&&void 0!==sourceIndexRef.current){var offset=offsetPointRef.current,sourceRect=itemsRect.current[sourceIndexRef.current],newX="y"===lockAxis?sourceRect.left:position.x-offset.x,newY="x"===lockAxis?sourceRect.top:position.y-offset.y;if(containerRef.current&&draggedForbiddenClassName){var _containerRef_current,containerRect=null===(_containerRef_current=containerRef.current)||void 0===_containerRef_current?void 0:_containerRef_current.getBoundingClientRect();"element"===forbiddenPointType?newX<containerRect.left||newY<containerRect.top||newX+sourceRect.width>containerRect.right||newY+sourceRect.height>containerRect.bottom?targetRef.current.classList.add(draggedForbiddenClassName):targetRef.current.classList.remove(draggedForbiddenClassName):position.x<containerRect.left||position.y<containerRect.top||position.x>containerRect.right||position.y>containerRect.bottom?targetRef.current.classList.add(draggedForbiddenClassName):targetRef.current.classList.remove(draggedForbiddenClassName)}targetRef.current.style.transform="translate3d(".concat(newX,"px, ").concat(newY,"px, 0px)")}},copyItem=react.useCallback((function(sourceIndex){if(containerRef.current){var source=itemsRef.current[sourceIndex],sourceRect=itemsRect.current[sourceIndex],copy=source.cloneNode(!0);draggedItemClassName&&draggedItemClassName.split(" ").forEach((function(c){return copy.classList.add(c)})),copy.style.width="".concat(sourceRect.width,"px"),copy.style.height="".concat(sourceRect.height,"px"),copy.style.position="fixed",copy.style.margin="0",copy.style.top="0",copy.style.left="0";var sourceCanvases=source.querySelectorAll("canvas");copy.querySelectorAll("canvas").forEach((function(canvas,index){var _canvas_getContext;null===(_canvas_getContext=canvas.getContext("2d"))||void 0===_canvas_getContext||_canvas_getContext.drawImage(sourceCanvases[index],0,0)})),((null==customHolderRef?void 0:customHolderRef.current)||document.body).appendChild(copy),targetRef.current=copy}}),[customHolderRef,draggedItemClassName]),listeners=useDrag({allowDrag,containerRef,knobs:knobs.current,onStart:function(param){var _dropTargetLogic_show,pointInWindow=param.pointInWindow;if(containerRef.current){itemsRect.current=itemsRef.current.map((function(item){return item.getBoundingClientRect()}));var sourceIndex=findItemIndexAtPosition(pointInWindow,itemsRect.current);if(-1!==sourceIndex){sourceIndexRef.current=sourceIndex,copyItem(sourceIndex);var source=itemsRef.current[sourceIndex];source.style.opacity="0",source.style.visibility="hidden";var sourceRect=source.getBoundingClientRect();offsetPointRef.current={x:pointInWindow.x-sourceRect.left,y:pointInWindow.y-sourceRect.top},updateTargetPosition(pointInWindow),null===(_dropTargetLogic_show=dropTargetLogic.show)||void 0===_dropTargetLogic_show||_dropTargetLogic_show.call(dropTargetLogic,sourceRect),window.navigator.vibrate&&window.navigator.vibrate(100)}}},onMove:function(param){var _dropTargetLogic_setPosition,pointInWindow=param.pointInWindow;updateTargetPosition(pointInWindow);var sourceIndex=sourceIndexRef.current;if(void 0!==sourceIndex&&void 0!==sourceIndexRef.current){var sourceRect=itemsRect.current[sourceIndexRef.current],targetPoint={x:"y"===lockAxis?sourceRect.left:pointInWindow.x,y:"x"===lockAxis?sourceRect.top:pointInWindow.y},targetIndex=findItemIndexAtPosition(targetPoint,itemsRect.current,{fallbackToClosest:!0});if(-1!==targetIndex){lastTargetIndexRef.current=targetIndex;for(var isMovingRight=sourceIndex<targetIndex,index=0;index<itemsRef.current.length;index+=1){var currentItem=itemsRef.current[index],currentItemRect=itemsRect.current[index];if(isMovingRight&&index>=sourceIndex&&index<=targetIndex||!isMovingRight&&index>=targetIndex&&index<=sourceIndex){var nextItemRects=itemsRect.current[isMovingRight?index-1:index+1];if(nextItemRects){var translateX=nextItemRects.left-currentItemRect.left,translateY=nextItemRects.top-currentItemRect.top;currentItem.style.transform="translate3d(".concat(translateX,"px, ").concat(translateY,"px, 0px)")}}else currentItem.style.transform="translate3d(0,0,0)";currentItem.style.transitionDuration="300ms"}null===(_dropTargetLogic_setPosition=dropTargetLogic.setPosition)||void 0===_dropTargetLogic_setPosition||_dropTargetLogic_setPosition.call(dropTargetLogic,lastTargetIndexRef.current,itemsRect.current,lockAxis)}}},onEnd:function(){for(var _dropTargetLogic_hide,index=0;index<itemsRef.current.length;index+=1){var currentItem=itemsRef.current[index];currentItem.style.transform="",currentItem.style.transitionDuration=""}var sourceIndex=sourceIndexRef.current;if(void 0!==sourceIndex){var source=itemsRef.current[sourceIndex];source&&(source.style.opacity="1",source.style.visibility="");var targetIndex=lastTargetIndexRef.current;void 0!==targetIndex&&sourceIndex!==targetIndex&&(itemsRef.current=function arrayMove(arr,fromIndex,toIndex){var array=arr.slice(),elementToMove=array[fromIndex];return array.splice(fromIndex,1),array.splice(toIndex,0,elementToMove),array}(itemsRef.current,sourceIndex,targetIndex),onSortEnd(sourceIndex,targetIndex))}(sourceIndexRef.current=void 0,lastTargetIndexRef.current=void 0,null===(_dropTargetLogic_hide=dropTargetLogic.hide)||void 0===_dropTargetLogic_hide||_dropTargetLogic_hide.call(dropTargetLogic),targetRef.current)&&(((null==customHolderRef?void 0:customHolderRef.current)||document.body).removeChild(targetRef.current),targetRef.current=null)}}),registerItem=react.useCallback((function(item){itemsRef.current.push(item)}),[]),removeItem=react.useCallback((function(item){var index=itemsRef.current.indexOf(item);-1!==index&&itemsRef.current.splice(index,1)}),[]),registerKnob=react.useCallback((function(item){knobs.current.push(item)}),[]),removeKnob=react.useCallback((function(item){var index=knobs.current.indexOf(item);-1!==index&&knobs.current.splice(index,1)}),[]),context=react.useMemo((function(){return{registerItem,removeItem,registerKnob,removeKnob}}),[registerItem,removeItem,registerKnob,removeKnob]);return react.createElement(as||"div",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},allowDrag?listeners:{},rest),{ref:containerRef}),react.createElement(SortableListContext.Provider,{value:context},children,null===(_dropTargetLogic_render=dropTargetLogic.render)||void 0===_dropTargetLogic_render?void 0:_dropTargetLogic_render.call(dropTargetLogic)))};const src=SortableList;var SortableItem=function(param){var children=param.children,context=react.useContext(SortableListContext);if(!context)throw new Error("SortableItem must be a child of SortableList");var registerItem=context.registerItem,removeItem=context.removeItem,elementRef=react.useRef(null);return react.useEffect((function(){var currentItem=elementRef.current;return currentItem&&registerItem(currentItem),function(){currentItem&&removeItem(currentItem)}}),[registerItem,removeItem,children]),react.cloneElement(children,{ref:elementRef})},SortableKnob=function(param){var children=param.children,context=react.useContext(SortableListContext);if(!context)throw new Error("SortableKnob must be a child of SortableList");var registerKnob=context.registerKnob,removeKnob=context.removeKnob,elementRef=react.useRef(null);return react.useEffect((function(){var currentItem=elementRef.current;return currentItem&&registerKnob(currentItem),function(){currentItem&&removeKnob(currentItem)}}),[registerKnob,removeKnob,children]),react.cloneElement(children,{ref:elementRef})};SortableList.__docgenInfo={description:"",methods:[],displayName:"SortableList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},allowDrag:{required:!1,tsType:{name:"boolean"},description:"Determines whether drag functionality is enabled, defaults to true",defaultValue:{value:"true",computed:!1}},onSortEnd:{required:!0,tsType:{name:"signature",type:"function",raw:"(oldIndex: number, newIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"oldIndex"},{type:{name:"number"},name:"newIndex"}],return:{name:"void"}}},description:"Called when the user finishes a sorting gesture."},draggedItemClassName:{required:!1,tsType:{name:"string"},description:"Class applied to the item being dragged"},draggedForbiddenClassName:{required:!1,tsType:{name:"string"},description:"Class applied to the item being dragged out of the container element"},forbiddenPointType:{required:!1,tsType:{name:"union",raw:"'point' | 'element'",elements:[{name:"literal",value:"'point'"},{name:"literal",value:"'element'"}]},description:"whether to use a point or an element to determine the item is in the forbidden position",defaultValue:{value:"'point'",computed:!1}},as:{required:!1,tsType:{name:"TTag"},description:"Determines which type of html tag will be used for a container element"},lockAxis:{required:!1,tsType:{name:"union",raw:"'x' | 'y'",elements:[{name:"literal",value:"'x'"},{name:"literal",value:"'y'"}]},description:"Determines if an axis should be locked"},customHolderRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement | null>",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}]},description:"Reference to the Custom Holder element"},dropTarget:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Drop target to be used when dragging"}}},SortableItem.__docgenInfo={description:"SortableItem only adds a ref to its children so that we can register it to the main Sortable",methods:[],displayName:"SortableItem",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}},SortableKnob.__docgenInfo={description:"",methods:[],displayName:"SortableKnob",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}}}}]);