/*
 * @Author: 孙璐 
 * @Date: 2018-10-15 10:08:43 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-10-15 10:12:24
 */

var nav = document.querySelector(".nav");
var ul = nav.querySelector("ul");
var uls = ul.querySelectorAll("li");
var box = document.querySelector(".box");
console.log(uls);
uls[1].onclick = function() {
    box.style.display = "block";
}