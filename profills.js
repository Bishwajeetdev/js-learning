let arr1=[1,2,2,5,4,7];

if(!Array.prototype.mymap){
    Array.prototype.mymap = function(userfn){
        const result = []

        for(let i = 0 ; i < this.length; i++){
            const value = userfn(this[i],i)
            result.push(value);

        }
        return result;
    }
}

const n1 = arr1.mymap((e) => e * 2);
console.log(n) 

// filter method profil
//signature: return-new | input: userFn


if(!Array.prototype.myfilter){
    Array.prototype.myfilter=function(userFn){

        const result = []

        for(let i=0;i<this.length;i++){
            if(userFn(this[i])){
                result.push(this[i])
            }
        }
        return result;
    }
}

const n2 =arr1.myfilter((e)=> e%2==0)

console.log(n)


