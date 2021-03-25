function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let date = this.responseText.replace(/[TZ\]\[\"\""]/g, " ")
        document.getElementById("output").innerHTML = date;
       }
    };
    xhttp.open("GET", "date.json", true);
    xhttp.send();
  }

loadDoc()

// lulululu


// 'use strict';
/*
import * as rawdata from "date.json";

// let rawdata = fs.readFileSync('date.json');
let date = JSON.parse(rawdata);
console.log(date[0]);




 import { execSync } from "child_process";

const gitCommand = "git show -s --format=%ci";

export default function getGitCommitDate() {
    return execSync(gitCommand).toString().trim();
}

var date = getGitCommitDate();

document.getElementById("output").textContent = date[0];
*/