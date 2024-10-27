var datee = document.getElementById("date");
datee.max = new Date().toISOString().split("T")[0];
let rs = document.getElementById("result");

function ab() {
    var datevalue = new Date(datee.value);
    var da1  = datevalue.getDate();
    var mo1 = datevalue.getMonth() +1;
    var ye1 = datevalue.getFullYear();

    var todaydate = new Date();
    var da2  = todaydate.getDate();
    var mo2 = todaydate.getMonth()+1;
    var ye2 = todaydate.getFullYear();

    let ye3, mo3,da3;
    ye3 = ye2-ye1;
    if (mo2 >= mo1) {
        mo3 = mo2-mo1;
    } else {
        ye3--;
        mo3 = 12 + mo2 - mo1;
    }
    if (da2>=da1) {
        da3=da2-da1;
    } else {
        mo3--
        da3 = getexactdays(ye1,mo1)+ da2 - da1;
    }
    if (mo3<0) {
        mo3=11;
        ye3--;
    }
    rs.innerHTML = `you are ${ye3} years old , ${mo3} months old and ${da3} days old`;

    function getexactdays(year,month) {
        return new Date (year,month,0).getDate();
    }
}