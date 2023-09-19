var default_items = [
``
];
var app = new Vue({
  el:'#app',
  data:{
 
    currDeg:0,
    items_str:'',
  },
  mounted:function(){
    this.toggleItems();
  },
  methods:{
    color:function(n){
      var colors = [

        '#FFD23F','#EE4266','#a94fca','#3BCEAC','#2765d4','#FF715B'
      ];
      return colors[n%colors.length];
    },




    spin:function(e){
      console.log('Button clicked'); 
      var that = this;
      const lengthOfSpin = 3000;
      const startingDeg = Number(that.currDeg) || 500
      that.currDeg = startingDeg + Math.round(Math.random() * (3000 - 360) + 360)
  

    },
    textPercentage:function(n){
      return  90 + (n * (360/this.items.length)) + (360/(this.items.length*2));
    },
    toggleItems:function(){
      if(this.items_str!=default_items[0]){
        this.items_str = default_items[0];
      }
      else{
        this.items_str = default_items[1];
      }
    }
  },
  computed:{
    items:function(){
      return this.items_str.split("\n");
    },
    size:function(){
      return 100/this.items.length;
    },
  }
});

