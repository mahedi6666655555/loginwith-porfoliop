document.getElementById("btn-submit").addEventListener("click", function(){



    let doc=document.getElementById("mail")
    let forvalue=doc.value;

    let doc4=document.getElementById("pass")

    let forvalue2=doc4.value

    doc.value=""
    doc4.value=""

if(forvalue==="mahedi111"&&forvalue2==="mahedi"){
    window.location.href="index.html"
}
else{
    alert("not right value and not right mail")
}

})