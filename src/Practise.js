// const str = "1234454321"
// let fr='';
// let bk='';

// console.log((str.length-1)/2)

    // for(let i=0;i<=str.length;i++){
    //     fr=fr+str[i];
    //     bk=bk+str[str.length-i-1]
    //  }
    //  if(fr==bk){console.log("string is palindrome")}
    //  else{console.log("Given String is Not a Palindrome")}     

{const str ="1234444321";let bk ="";for(let i=0;i<=str.length;i++){bk=bk+str[str.length-i-1]};if(str==bk){console.log("Given String is Palindrome")}else{console.log("Given String is Not Palindrome")}}
// {const arr=['1','2','3','4','5'];const newArr=[];for(let i=arr.length-1;i>=0;i--){newArr.push(arr[i])};console.log(newArr)}
// {const str ="missisipeerr";let result={};const strArr=[...str];uniq=[...new Set(str)];uniq.map((ele)=>{const count =strArr.filter((item)=>{ return item==ele}).length;result={...result,[ele]:count}});console.log(result)}

