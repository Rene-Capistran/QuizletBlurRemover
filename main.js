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
    if (document.getElementsByClassName("s1mdxb3l l150nly7 b1sa2ccx")[0] !== undefined){
        document.getElementsByClassName("s1mdxb3l l150nly7 b1sa2ccx")[0].className = "s1mdxb3l l150nly7 s1q0b356";
    }
},100);
