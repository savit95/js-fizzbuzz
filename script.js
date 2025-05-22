


for (let i = 0; i <= 100; i++) {
    console.log(i);
    let restoTre= i % 3;
    let restoCinque= i % 5;

    if(restoTre === 0 && restoCinque === 0) {
        console.log(`${i} FizzBuzz`)
    } else if (restoTre === 0 ) {
        console.log(`${i} Fizz`)
    } 

}