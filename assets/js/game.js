new Vue({
  el: "#app",
  data: {
    player_heal : 100,
    monster_heal : 100,
    game_is_on: false,
  },
  methods:{
     start_game: function(){
       this.game_is_on = true;
     },
     attack: function(){
       var point = Math.ceil(Math.random() * 10);
       this.monster_heal -= point;
       this.monster_heal < 0 ? this.monster_heal = 0 : this.monster_heal = this.monster_heal;
       this.monster_attach();
     },
     speacial_attack: function(){
       var point = Math.ceil(Math.random() * 25);
       this.monster_heal -= point;
       this.monster_attach();
     },
     monster_attach: function(){
       var point = Math.ceil(Math.random() * 15);
       this.player_heal -= point;
     },
     heal_up: function(){
       var point = Math.ceil(Math.random() * 20);
       this.player_heal += point;
       this.monster_attach();
     },
     give_up: function(){
       this.player_heal = 0;
     },
     finish_game: function(){
       alert('gagaş oyun bitip');
       this.game_is_on = false;
     },
  },
  watch:{
    player_heal:function(value){
      if (value <= 0 ) {
        this.player_heal = 0;
      }else if (value >= 100) {
        this.player_heal = 100;
      }
    },
    monster_heal:function(value){
      if (value <= 0 ) {
        this.monster_heal = 0;
      }else if (value >= 100) {
        this.monster_heal = 100;
      }
    }
  }
})
