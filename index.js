function BoardMember(names, homeState,training){
  this.names=names;
  this.homeState=homeState;
  this.training=training;
  this.veto=function(){
    return "No, I must disagree";
  };
  this.approve=function(){
    return "You can do that!";
  };
  this.doCharity=function(){
    return "I like to help people.";
  };
  this.releasePressStatement=function(){
    return "You will see great things from Scober.";
  };
  this.sayHi=funciton(){
    return `Hi, my name is ${this.names}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
}
