//console.log("hii");
//console.log("hello world");

//creating new  para by using createlement and to add content in this created para we use textcontent
//then this created para need to added to document for this we are going to use append child method;

//let newpara=document.createElement('p');
//newpara.textContent='Hii i am new para';
//document.body.appendChild(newpara);
//
//let content=document.querySelector('p');
//console.log(content)

//checking performance of our code i.e time taken in adding 100 para by using performance.now() function;

//const t1=performance.now();
//for(let i=0;i<100;i++){
//let hunpara=document.createElement('p');
//hunpara.textContent="hello i am hundred para";
//document.body.appendChild(hunpara);
//}
//const t2=performance.now();
//
//console.log('time taken to add hundred para by using the above code is'+(t2-t1) + "ms");
//

//we can reduce the time taken to add 100 para to document a little bit by firstly creatinf the new div and then creating 100 para then
//firstly append this 100 para to newly created div then append this newly created div to document;

//const t3=performance.now();
//let mydiv=document.createElement('div');
//
//for(let i=0;i<100;i++){
//    let paragra=document.createElement('p');
//paragra.textContent="hii i am the new para which are going to add in mydiv first";
//mydiv.appendChild(paragra);
//}
//document.body.appendChild(mydiv);
//const t4=performance.now();
//
//console.log("this method take time to add 100 para to document is " +(t4-t3) + "ms");

//adding new para or any element cause reflow and repaint
//Reflow= change in dimenstions of existing nodes while adding the new element to the js dom;
//Repaint=when browser show these changes on offscreen then this is repaint;

//Reflow and repaint are very expensive task which made the js dom slower while loading;


//Adding hunderd para one by one cause 100 reflow and repaint;

//To avoid this we use document fragment i.e firstky we create the fragemnt by using the createDocumentfragment(); 
// then add hundred para to created fragment;
//DOCUMENT FRAGMENT CAUSE ONLY ONE REFLOW AND ONE REAPAINT

//adding 100 para to document fragment;

//const t5=performance.now();
//let fragment=document.createDocumentFragment();//fragment created
// for (let i=0;i<100;i++){
//let par=document.createElement('p');
//par.textContent="hii i am para which are going to add in fragment to reduce reflow and repaint";
//fragment.appendChild(par);
// }
//
// document.body.appendChild(fragment);
//
// const t6=performance.now();
// console.log(+(t6-t5) +"ms");


 //EVENT LOOP

 //addEventlistner is asynchronous

 console.log("hii");

 document.addEventListener('click',function(){
    console.log("hey champ");
 });
 console.log('hello world');

 //explanation of event loop

//firstly console.log('hii'); function gets into the call stack then hii gets printed and console.log('hi') gets removed from call stack;
//then addeventlistner gets into the call stack then it gets transfered to the browser;
// and the call stack become empty;

//then console.log('hey champ') gets into the call stack and execited and call stack gets empty;
//then on 'click'(or any event type passed) the function gets pass to the event queue;

//and if the callstack is EMPTY only then function gets into the call stack and gets executed;






