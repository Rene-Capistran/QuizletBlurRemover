// ==UserScript==
// @name         Quizlet blur remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Gets rid of quizlet's silly answer blurring so you don't have to!
// @author       MrCleans
// @match        https://quizlet.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quizlet.com
// @grant        none
// ==/UserScript==




setInterval(()=>{
    if (document.getElementsByClassName("SetPageTerm-side SetPageTerm-largeSide b1sa2ccx")[0] !== undefined){
        document.getElementsByClassName("SetPageTerm-side SetPageTerm-largeSide b1sa2ccx")[0].className = "SetPageTerm-side SetPageTerm-largeSide";
    }
},100);