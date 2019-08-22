


class Universe  {
	constructor(amount, type){
        let scope = this
        this.energy ={
            total: type === "energy" ? amount : 0,
            destroy: function(value){
                this.total -= value;
                scope.matter.total += value;
            },
            create: function (value){
                this.total += value;
                scope.matter.total -= value;
            }
        };
        this.matter={
            total: type === "matter" ? amount : 0,
            destroy: function(value){
                this.total -= value;
                scope.energy.total += value;
            },
            create: function (value){
                this.total += value;
                scope.energy.total -= value;
            }
        };
    }
}

var universe = new Universe(10, 'matter')





/*class Universe{
    constructor(iniquantity, type){
    if (type === "energy"){
        this.energy = {
            quantity : iniquantity,
            total : function (){
                console.log(this.energy.quantity);
            },
            destroy : function(quantity){
                this.energy.quantity -= quantity;
                this.matter.quantity += quantity;
            },
            create : function (quantity){
                this.energy.quantity += quantity;
                this.matter.quantity -= quantity;
            }

        }
        this.matter ={
            quantity : 0,
            total : function (){
                console.log(this.matter.quantity);
            },
            destroy : function(){
                this.energy.quantity += quantity;
                this.matter.quantity -= quantity;
            },
            create : function (){
                this.energy.quantity -= quantity;
                this.matter.quantity += quantity;
            }

        }
    }else{
        this.matter = {
            quantity : iniquantity,
            total : function (){
                console.log(this.this.matter.quantity);
            },
            destroy : function(){
                this.energy.quantity += quantity;
                this.matter.quantity -= quantity;
            },
            create : function (){
                this.energy.quantity -= quantity;
                this.matter.quantity += quantity;
            }
        }
        this.energy = {
            quantity : 0,
            total : function (){
                console.log(this.energy.quantity);
            },
            destroy : function(){
                this.energy.quantity -= quantity;
                this.matter.quantity += quantity;
            },
            create : function (){
                this.energy.quantity += quantity;
                this.matter.quantity -= quantity;
            }
        }
    }
    }
   
}

var universe = new Universe(10, 'matter');
debugger
console.log(universe.matter.total());
*/

module.exports = {
    Universe
}
