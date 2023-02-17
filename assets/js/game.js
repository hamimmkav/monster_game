new Vue({
  el: "#app",
  data: {
    player_heal : 100,
    monster_heal : 100,
    game_is_on: false,
    logs: [],
  },
  methods:{
     start_game: function(){
       this.game_is_on = true;
     },
     attack: function(){
       var point = Math.ceil(Math.random() * 10);
       this.monster_heal -= point;
       this.add_logs({ turn :"player", text: "player attack( "+point+" )"});
       this.monster_attach();

     },
     speacial_attack: function(){
       var point = Math.ceil(Math.random() * 25);
       this.monster_heal -= point;
       this.add_logs({ turn :"player", text: "special player attack( "+point+" )"});
       this.monster_attach();
     },
     monster_attach: function(){
       var point = Math.ceil(Math.random() * 15);
       this.player_heal -= point;
       this.add_logs({ turn :"monster", text: "monster attack( "+point+" )"});
     },
     heal_up: function(){
       var point = Math.ceil(Math.random() * 20);
       this.player_heal += point;
       this.add_logs({ turn :"player", text: "Player Heal Up( "+point+" )"});
       this.monster_attach();
     },
     give_up: function(){
       this.player_heal = 0;
       this.add_logs({ turn :"player", text: "Player Give Up :( "});
     },
     finish_game: function(){
       alert('gagaş oyun bitip');
       this.game_is_on = false;
     },
     add_logs : function(log){
       this.logs.push(log);
     }
  },
  watch:{
    player_heal:function(value){
      if (value <= 0 ) {
        this.player_heal = 0;
        if (confirm("You loss, Do you want play again?")) {
          this.player_heal = 100;
          this.monster_heal = 100;
        }
      }else if (value >= 100) {
        this.player_heal = 100;
      }
    },
    monster_heal:function(value){
      if (value <= 0 ) {
        this.monster_heal = 0;
        if (confirm("You win, Do you want play again?")) {
          this.player_heal = 100;
          this.monster_heal = 100;
        }
      }else if (value >= 100) {
        this.monster_heal = 100;
      }
    }
  }
})
