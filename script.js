document.addEventListener("DOMContentLoaded",function()
{
    const newMeal = document.getElementById("newMeal");
    //a
    const pAPlus1 = document.getElementById("ap+");
    const pAPlus5 = document.getElementById("ap++");
    const pAMinus1 = document.getElementById("ap-");
    const pAMinus5 = document.getElementById("ap--");
    const cAPlus1 = document.getElementById("ac+");
    const cAPlus5 = document.getElementById("ac++");
    const cAMinus1 = document.getElementById("ac-");
    const cAMinus5 = document.getElementById("ac--");
    const fAPlus1 = document.getElementById("af+");
    const fAPlus5 = document.getElementById("af++");
    const fAMinus1 = document.getElementById("af-");
    const fAMinus5 = document.getElementById("af--");
    //e
    const pEPlus1 = document.getElementById("ep+");
    const pEPlus5 = document.getElementById("ep++");
    const pEMinus1 = document.getElementById("ep-");
    const pEMinus5 = document.getElementById("ep--");
    const cEPlus1 = document.getElementById("ec+");
    const cEPlus5 = document.getElementById("ec++");
    const cEMinus1 = document.getElementById("ec-");
    const cEMinus5 = document.getElementById("ec--");
    const fEPlus1 = document.getElementById("ef+");
    const fEPlus5 = document.getElementById("ef++");
    const fEMinus1 = document.getElementById("ef-");
    const fEMinus5 = document.getElementById("ef--");
    //d
    const pDPlus1 = document.getElementById("dp+");
    const pDPlus5 = document.getElementById("dp++");
    const pDMinus1 = document.getElementById("dp-");
    const pDMinus5 = document.getElementById("dp--");
    const cDPlus1 = document.getElementById("dc+");
    const cDPlus5 = document.getElementById("dc++");
    const cDMinus1 = document.getElementById("dc-");
    const cDMinus5 = document.getElementById("dc--");
    const fDPlus1 = document.getElementById("df+");
    const fDPlus5 = document.getElementById("df++");
    const fDMinus1 = document.getElementById("df-");
    const fDMinus5 = document.getElementById("df--");

    const nameTable = document.getElementById("mainMeal");
    const appTable = document.getElementById("Appetizer");
    const entTable = document.getElementById("Entree");
    const desTable = document.getElementById("Dessert");
    const oldMeal = document.getElementById("oldMeals");

    const appReset = document.getElementById("ar");
    const entReset = document.getElementById("er");
    const desReset = document.getElementById("dr");

    newMeal.addEventListener("click",function(){
        const name1 = prompt("What is the name of this meal?");
        nameTable.rows[1].cells[0].innerHTML = name1;  
        //oldMeal.rows[-1].cells[0].innerHTML = name1;
        const name2 = prompt("What is the name of the appetizer?");
        appTable.rows[1].cells[1].innerHTML = name2;  
        const name3 = prompt("What is the name of the entree?");
        entTable.rows[1].cells[1].innerHTML = name3;  
        const name4 = prompt("What is the name of the dessert?");
        desTable.rows[1].cells[1].innerHTML = name4;
        fACals = 0;
        cACals = 0;
        pACals = 0;
        document.getElementById("atc").innerHTML = fACals+cACals+pACals;
        document.getElementById("apg").innerHTML = "0";
        document.getElementById("apc").innerHTML = pACals;
        document.getElementById("acg").innerHTML = "0";
        document.getElementById("acc").innerHTML = cACals;
        document.getElementById("afg").innerHTML = "0";
        document.getElementById("afc").innerHTML = fACals;
        fECals = 0;
        cECals = 0;
        pECals = 0;
        document.getElementById("etc").innerHTML = fECals+cECals+pECals;
        document.getElementById("epg").innerHTML = "0";
        document.getElementById("epc").innerHTML = pECals;
        document.getElementById("ecg").innerHTML = "0";
        document.getElementById("ecc").innerHTML = cECals;
        document.getElementById("efg").innerHTML = "0";
        document.getElementById("efc").innerHTML = fECals;
        fDCals = 0;
        cDCals = 0;
        pDCals = 0;
        document.getElementById("dtc").innerHTML = fDCals+cDCals+pDCals;
        document.getElementById("dpg").innerHTML = "0";
        document.getElementById("dpc").innerHTML = pDCals;
        document.getElementById("dcg").innerHTML = "0"; 
        document.getElementById("dcc").innerHTML = cDCals;
        document.getElementById("dfg").innerHTML = "0";
        document.getElementById("dfc").innerHTML = fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals;
    })

    appReset.addEventListener("click",function(){
        fACals = 0;
        cACals = 0;
        pACals = 0;
        document.getElementById("atc").innerHTML = fACals+cACals+pACals;
        document.getElementById("apg").innerHTML = "0";
        document.getElementById("apc").innerHTML = pACals;
        document.getElementById("acg").innerHTML = "0";
        document.getElementById("acc").innerHTML = cACals;
        document.getElementById("afg").innerHTML = "0";
        document.getElementById("afc").innerHTML = fACals;
        document.getElementById("tc").innerHTML = pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    entReset.addEventListener("click",function(){
        fECals = 0;
        cECals = 0;
        pECals = 0;
        document.getElementById("etc").innerHTML = fECals+cECals+pECals;
        document.getElementById("epg").innerHTML = "0";
        document.getElementById("epc").innerHTML = pECals;
        document.getElementById("ecg").innerHTML = "0";
        document.getElementById("ecc").innerHTML = cECals;
        document.getElementById("efg").innerHTML = "0";
        document.getElementById("efc").innerHTML = fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pDCals + cDCals + fDCals;
    })
    desReset.addEventListener("click",function(){
        fDCals = 0;
        cDCals = 0;
        pDCals = 0;
        document.getElementById("dtc").innerHTML = fDCals+cDCals+pDCals;
        document.getElementById("dpg").innerHTML = "0";
        document.getElementById("dpc").innerHTML = pDCals;
        document.getElementById("dcg").innerHTML = "0"; 
        document.getElementById("dcc").innerHTML = cDCals;
        document.getElementById("dfg").innerHTML = "0";
        document.getElementById("dfc").innerHTML = fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals;
    })

    let pACals = 0;
    let cACals = 0;
    let fACals = 0;
    let pECals = 0;
    let cECals = 0;
    let fECals = 0;
    let pDCals = 0;
    let cDCals = 0;
    let fDCals = 0;

    //a
    pAPlus1.addEventListener("click",function(){
        const grams = document.getElementById("apg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("apg").innerHTML = value;
        pACals = 4*value;
        document.getElementById("apc").innerHTML = pACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pAPlus5.addEventListener("click",function(){
        const grams = document.getElementById("apg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("apg").innerHTML = value;
        pACals = 4*value;
        document.getElementById("apc").innerHTML = pACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pAMinus1.addEventListener("click",function(){
        const grams = document.getElementById("apg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("apg").innerHTML = value;
        pACals = 4*value;
        document.getElementById("apc").innerHTML = pACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pAMinus5.addEventListener("click",function(){
        const grams = document.getElementById("apg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("apg").innerHTML = value;
        pACals = 4*value;
        document.getElementById("apc").innerHTML = pACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cAPlus1.addEventListener("click",function(){
        const grams = document.getElementById("acg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("acg").innerHTML = value;
        cACals = 4*value;
        document.getElementById("acc").innerHTML = cACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cAPlus5.addEventListener("click",function(){
        const grams = document.getElementById("acg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("acg").innerHTML = value;
        cACals = 4*value;
        document.getElementById("acc").innerHTML = cACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cAMinus1.addEventListener("click",function(){
        const grams = document.getElementById("acg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("acg").innerHTML = value;
        cACals = 4*value;
        document.getElementById("acc").innerHTML = cACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cAMinus5.addEventListener("click",function(){
        const grams = document.getElementById("acg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("acg").innerHTML = value;
        cACals = 4*value;
        document.getElementById("acc").innerHTML = cACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fAPlus1.addEventListener("click",function(){
        const grams = document.getElementById("afg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("afg").innerHTML = value;
        fACals = 9*value;
        document.getElementById("afc").innerHTML = fACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fAPlus5.addEventListener("click",function(){
        const grams = document.getElementById("afg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("afg").innerHTML = value;
        fACals = 9*value;
        document.getElementById("afc").innerHTML = fACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fAMinus1.addEventListener("click",function(){
        const grams = document.getElementById("afg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("afg").innerHTML = value;
        fACals = 9*value;
        document.getElementById("afc").innerHTML = fACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fAMinus5.addEventListener("click",function(){
        const grams = document.getElementById("afg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("afg").innerHTML = value;
        fACals = 9*value;
        document.getElementById("afc").innerHTML = fACals;
        document.getElementById("atc").innerHTML = pACals + cACals + fACals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    //e
    pEPlus1.addEventListener("click",function(){
        const grams = document.getElementById("epg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("epg").innerHTML = value;
        pECals = 4*value;
        document.getElementById("epc").innerHTML = pECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pEPlus5.addEventListener("click",function(){
        const grams = document.getElementById("epg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("epg").innerHTML = value;
        pECals = 4*value;
        document.getElementById("epc").innerHTML = pECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pEMinus1.addEventListener("click",function(){
        const grams = document.getElementById("epg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("epg").innerHTML = value;
        pECals = 4*value;
        document.getElementById("epc").innerHTML = pECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pEMinus5.addEventListener("click",function(){
        const grams = document.getElementById("epg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("epg").innerHTML = value;
        pECals = 4*value;
        document.getElementById("epc").innerHTML = pECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cEPlus1.addEventListener("click",function(){
        const grams = document.getElementById("ecg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("ecg").innerHTML = value;
        cECals = 4*value;
        document.getElementById("ecc").innerHTML = cECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cEPlus5.addEventListener("click",function(){
        const grams = document.getElementById("ecg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("ecg").innerHTML = value;
        cECals = 4*value;
        document.getElementById("ecc").innerHTML = cECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cEMinus1.addEventListener("click",function(){
        const grams = document.getElementById("ecg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("ecg").innerHTML = value;
        cECals = 4*value;
        document.getElementById("ecc").innerHTML = cECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cEMinus5.addEventListener("click",function(){
        const grams = document.getElementById("ecg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("ecg").innerHTML = value;
        cECals = 4*value;
        document.getElementById("ecc").innerHTML = cECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fEPlus1.addEventListener("click",function(){
        const grams = document.getElementById("efg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("efg").innerHTML = value;
        fECals = 9*value;
        document.getElementById("efc").innerHTML = fECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fEPlus5.addEventListener("click",function(){
        const grams = document.getElementById("efg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("efg").innerHTML = value;
        fECals = 9*value;
        document.getElementById("efc").innerHTML = fECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fEMinus1.addEventListener("click",function(){
        const grams = document.getElementById("efg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("efg").innerHTML = value;
        fECals = 9*value;
        document.getElementById("efc").innerHTML = fECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fEMinus5.addEventListener("click",function(){
        const grams = document.getElementById("efg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("efg").innerHTML = value;
        fECals = 9*value;
        document.getElementById("efc").innerHTML = fECals;
        document.getElementById("etc").innerHTML = pECals + cECals + fECals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    //d
    pDPlus1.addEventListener("click",function(){
        const grams = document.getElementById("dpg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("dpg").innerHTML = value;
        pDCals = 4*value;
        document.getElementById("dpc").innerHTML = pDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pDPlus5.addEventListener("click",function(){
        const grams = document.getElementById("dpg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("dpg").innerHTML = value;
        pDCals = 4*value;
        document.getElementById("dpc").innerHTML = pDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pDMinus1.addEventListener("click",function(){
        const grams = document.getElementById("dpg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("dpg").innerHTML = value;
        pDCals = 4*value;
        document.getElementById("dpc").innerHTML = pDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    pDMinus5.addEventListener("click",function(){
        const grams = document.getElementById("dpg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("dpg").innerHTML = value;
        pDCals = 4*value;
        document.getElementById("dpc").innerHTML = pDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cDPlus1.addEventListener("click",function(){
        const grams = document.getElementById("dcg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("dcg").innerHTML = value;
        cDCals = 4*value;
        document.getElementById("dcc").innerHTML = cDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cDPlus5.addEventListener("click",function(){
        const grams = document.getElementById("dcg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("dcg").innerHTML = value;
        cDCals = 4*value;
        document.getElementById("dcc").innerHTML = cDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cDMinus1.addEventListener("click",function(){
        const grams = document.getElementById("dcg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("dcg").innerHTML = value;
        cDCals = 4*value;
        document.getElementById("dcc").innerHTML = cDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    cDMinus5.addEventListener("click",function(){
        const grams = document.getElementById("dcg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("dcg").innerHTML = value;
        cDCals = 4*value;
        document.getElementById("dcc").innerHTML = cDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fDPlus1.addEventListener("click",function(){
        const grams = document.getElementById("dfg");
        let value = grams.innerHTML;
        ++value;
        document.getElementById("dfg").innerHTML = value;
        fDCals = 9*value;
        document.getElementById("dfc").innerHTML = fDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fDPlus5.addEventListener("click",function(){
        const grams = document.getElementById("dfg");
        let value = grams.innerHTML;
        value++;value++;value++;value++;value++;
        document.getElementById("dfg").innerHTML = value;
        fDCals = 9*value;
        document.getElementById("dfc").innerHTML = fDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fDMinus1.addEventListener("click",function(){
        const grams = document.getElementById("dfg");
        let value = grams.innerHTML;
        value--;
        document.getElementById("dfg").innerHTML = value;
        fDCals = 9*value;
        document.getElementById("dfc").innerHTML = fDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
    fDMinus5.addEventListener("click",function(){
        const grams = document.getElementById("dfg");
        let value = grams.innerHTML;
        value--;value--;value--;value--;value--;
        document.getElementById("dfg").innerHTML = value;
        fDCals = 9*value;
        document.getElementById("dfc").innerHTML = fDCals;
        document.getElementById("dtc").innerHTML = pDCals + cDCals + fDCals;
        document.getElementById("tc").innerHTML = pACals + cACals + fACals + pECals + cECals + fECals + pDCals + cDCals + fDCals;
    })
});
