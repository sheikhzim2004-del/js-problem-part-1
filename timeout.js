for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

//akhane mutoto setTimeout use korar mane holo loop sheshe kaj ta chalaw 100 ms por. tobe 100 ms er jaygay jodi 0 dewa hoy taw loop shesh howar por kajta cola shuru korbe.
//tobe ami jodi var er poriborte let use kori tahole loop ta shathei cola shuru korbe r 0 theke 4 print hobe.



for( let i = 0; i<5; i++){
  setTimeout(function() {
    console.log(i);
    }, 100);
}
console.log('===========================================');

//ai bishoyta amar akhono un clear


