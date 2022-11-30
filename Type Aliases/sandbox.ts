type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}
let objWithName = {name: "apple", uid: "coconut"}

// const logDetails = (uid: StringOrNum, item: string) =>{
//     // console.log(`${item} has a uid of ${uid}`)
// }

// logDetails("apple", "kuyan")
const greet = (user: objWithName) => {
    console.log(`${user.name} says hello to ${user.uid}`)
}
greet(objWithName)
