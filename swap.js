

//example no 01
// kono 2ta variable er value keaexchange korte chaile shorashori korte hobe na er jonno amader prothome akta temporary variable declare kore nite hobe and shekhane 1st variable er value take rekhe diye -- 1st variable er value 2nd diye change korte hobe -- and then 2nd variable er value shei temporary variable shapekkhe change korte hobe.

let big = 20;
let small = 80;
console.log('Big:', big, 'Small:', small);
//suppose amra boro value take big e rakhte cai so amader first akta temporary variable lageb.
let temp = big;    //akhane big er value take rekhe dilam
big = small;
small = temp;
console.log('Big:', big, 'Small:', small);
//akhon dekha gelo shothik vabe value exchange hoye gelo.


console.log('========================================');


//example no 02
//shorashori value exchange korte caile akoishathe third bracket '[]' er vitor variable name rekhe exchange korte hobe tahole thik thakbe.
let x = 5;
let y = 9;
console.log(x, y);

[x, y] = [y, x];   //
console.log(x, y);

