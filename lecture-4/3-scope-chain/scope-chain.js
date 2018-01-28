// scope chain
var p = 22;
function zzz() {
    const p = 12;
    console.log(p);
    function func() {
        var p = 122;
        console.log(p);
        if (true) {
            var p = 1;
            console.log(p);
        }
        console.log(p);
    }
    func();
}
zzz();