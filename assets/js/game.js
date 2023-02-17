new Vue({
  el: "#app",
  data: {
    player_healty : 100,
    monster_healty : 100,
    game_is_on: false,
    logs: [],
    attack_multiple : 10,
    special_attack_multiple : 25,
    monster_attack_multiple : 15,
    heal_up_multiple : 20,
    log_text : {
      attack : "player attack :",
      special_attack : "special player attack :",
      monster_attack : "monster attack :",
      heal_up : "Player Heal Up :",
      give_up : "Player Give Up :"
    }
  },
  methods:{
     start_game: function(){
       this.game_is_on = true;
     },
     attack: function(){
       var point = Math.ceil(Math.random() * this.attack_multiple);
       this.monster_healty -= point;
       this.add_logs({ turn :"player", text: this.log_text.attack + point });
       this.monster_attack();

     },
     speacial_attack: function(){
       var point = Math.ceil(Math.random() * this.special_attack_multiple);
       this.monster_healty -= point;
       this.add_logs({ turn :"player", text: this.log_text.special_attack + point });
       this.monster_attack();
     },
     monster_attack: function(){
       var point = Math.ceil(Math.random() * this.monster_attack_multiple);
       this.player_healty -= point;
       this.add_logs({ turn :"monster", text: this.log_text.monster_attack + point });
     },
     heal_up: function(){
       var point = Math.ceil(Math.random() * this.heal_up_multiple);
       this.player_healty += point;
       this.add_logs({ turn :"player", text: this.log_text.heal_up + point });
       this.monster_attack();
     },
     give_up: function(){
       this.player_healty = 0;
       this.add_logs({ turn :"player", text: this.log_text.give_up + point });
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
    player_healty:function(value){
      if (value <= 0 ) {
        this.player_healty = 0;
        if (confirm("You loss, Do you want play again?")) {
          this.player_healty = 100;
          this.monster_healty = 100;
          this.logs = [];
        }
      }else if (value >= 100) {
        this.player_healty = 100;
      }
    },
    monster_healty:function(value){
      if (value <= 0 ) {
        this.monster_healty = 0;
        if (confirm("You win, Do you want play again?")) {
          this.player_healty = 100;
          this.monster_healty = 100;
          this.logs = [];
        }
      }else if (value >= 100) {
        this.monster_healty = 100;
      }
    }
  },
  computed : {
    player_progress : function(){
      return {
        width : this.player_healty + "%"
      }
    },
    monster_progress : function(){
      return {
        width : this.monster_healty + "%"
      }
    }
  }
})
