var k=0
var s
var z
z=document.getElementById('inp').textContent

function ac(){
   document.getElementById('container').style.top='43%'
   document.getElementById('inp').textContent=z
   document.getElementById('res').textContent=0
   document.getElementById('res').style.display='none'
   document.getElementById('inp').style.border='1px solid black'
   document.getElementById('inp').style.borderBottomColor='grey'
   k=0
 }
 function back() {
    let text
    text=document.getElementById('inp').textContent
    if(text.length==1){
      document.getElementById('inp').textContent=0
    }
    else{
    text = text.substring(0, text.length - 1);
    document.getElementById('inp').textContent=text
    }
    let x
x=document.getElementById('inp').textContent
var l
l=x.charAt(text.length - 1)
if(l=='-'||l=='*'||l=='+'||l=='/'){
x = x.slice(0, -1);
}
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
 function per(){
   let text
   text=document.getElementById('inp').textContent;
   
   document.getElementById('inp').textContent=parseFloat(text)/100
   document.getElementById('res').textContent='='+parseFloat(text)/100
 }
function div(){
  let text
  text=document.getElementById('inp').textContent;
  var l
l=text.charAt(text.length - 1)
if(l=='-'||l=='*'||l=='+'||l=='/'){
text = text.slice(0, -1) + '/';
document.getElementById('inp').textContent=text
}
else  if (text==0){
document.getElementById('inp').textContent=0+'/'
}
else{
document.getElementById('inp').textContent=text+'/'
}
k=0
}
function mul(){
  let text
  text=document.getElementById('inp').textContent;
  var l
l=text.charAt(text.length - 1)
if(l=='-'||l=='+'||l=='/'||l=='*'){
text = text.slice(0, -1) + '*';
document.getElementById('inp').textContent=text
}
else  if (text==0){
document.getElementById('inp').textContent=0+'*'
}
else{
document.getElementById('inp').textContent=text+'*'
}
k=0
}
function sev(){
let text
text=document.getElementById('inp').textContent;

if (text==0){
document.getElementById('inp').textContent=7
}
else if (text=='0.'){
  document.getElementById('inp').textContent=text+7
}
else{
  document.getElementById('inp').textContent=text+7
}
let x
x=document.getElementById('inp').textContent
  y=eval(x)


document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function eig(){
let text
text=document.getElementById('inp').textContent;
if (text==0){
document.getElementById('inp').textContent=8
}
else{
document.getElementById('inp').textContent=text+8
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function nin(){
let text
text=document.getElementById('inp').textContent;
if (text==0){
document.getElementById('inp').textContent=9
}
else{
  document.getElementById('inp').textContent=text+9
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function fou(){
let text
text=document.getElementById('inp').textContent;
if (text==0){
document.getElementById('inp').textContent=4
}
else{
  document.getElementById('inp').textContent=text+4
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function fiv(){
let text
text=document.getElementById('inp').textContent;
if (text==0) {
document.getElementById('inp').textContent=5
}
else{
  document.getElementById('inp').textContent=text+5
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function six(){
let text
text=document.getElementById('inp').textContent;
if (text==0){
document.getElementById('inp').textContent=6
}
else{
  document.getElementById('inp').textContent=text+6
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function one(){
let text
text=document.getElementById('inp').textContent;
if (text==0){
document.getElementById('inp').textContent=1
}
else{
  document.getElementById('inp').textContent=text+1
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function two(){
let text
text=document.getElementById('inp').textContent;
if (text==0){
document.getElementById('inp').textContent=2
}
else{
  document.getElementById('inp').textContent=text+2
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function thr(){
let text
text=document.getElementById('inp').textContent;
if (text==0){
document.getElementById('inp').textContent=3
}
else{
  document.getElementById('inp').textContent=text+3
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
function zero(){
let text
text=document.getElementById('inp').textContent;
if (text==0){
document.getElementById('inp').textContent=z
}
else{
  document.getElementById('inp').textContent=text+0
}
let x
x=document.getElementById('inp').textContent
var y
y=eval(x)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}

function p(){

 k=k+1
 
 if (k>1){
   text.charAt(text.length - 1)
 }
  
let text
text=document.getElementById('inp').textContent;
 

var l
l=text.charAt(text.length - 1)
  
 if(l=='.'){
text = text.slice(0, -1) +'.';
document.getElementById('inp').textContent=text
}

else{
  document.getElementById('inp').textContent=text+'.'
}

}
function plus(){
  let text
text=document.getElementById('inp').textContent;
var l
l=text.charAt(text.length - 1)
if(l=='-'||l=='*'||l=='/'||l=='+'){
text = text.slice(0, -1) + '+';
document.getElementById('inp').textContent=text
}
else if (text==0){
document.getElementById('inp').textContent=0+'+'
} 
else{
document.getElementById('inp').textContent=text+'+'
}
k=0
}
function minus(){
  let text
text=document.getElementById('inp').textContent;
var l
l=text.charAt(text.length - 1)
if(l=='+'||l=='*'||l=='/'||l=='-'){
text = text.slice(0, -1) + '-';
document.getElementById('inp').textContent=text
}
else if (text==0){
document.getElementById('inp').textContent=0+'-'
}
else{
document.getElementById('inp').textContent=text+ '-'
}
k=0
}
function sol(){
  
  let text
text=document.getElementById('inp').textContent;
var l
l=text.charAt(text.length - 1)
if(l=='-'||l=='*'||l=='/'||l=='+'){
text = text.slice(0, -1) ;
document.getElementById('inp').textContent=text
}
var y
y=eval(text)
document.getElementById('container').style.top='38%'
document.getElementById('inp').style.border='none'
  document.getElementById('res').style.display='block'
  document.getElementById('res').style.borderbottomcolor='grey'
 document.getElementById('res').textContent='= '+y
}
var c
c=1
function concept(){
  c=c+1
  var a
  a=document.getElementById('a')
  if (c%2==0){
    a.href='calculatorBright.css'
  }
 else{
   a.href='calculatorDark.css'
}
}
