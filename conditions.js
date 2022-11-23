let i = 2
if(i)
{
    console.log("Yahoo")
}
else
{
    console.log("Gand Mara BSDK")
}
for(i;i>=0;i-=1)
{
    console.log("Yahtzee!")
}
const names = ["Manasi","Patil"]
console.log(names.map(name=>name.length===5))

try {
    const a = 6/0
    console.log(a)
}
catch(weirdError)
{
    console.log(weirdError)
}
