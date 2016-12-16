
var MenuLayer = cc.Layer.extend({
  ctor : function () {
    //////////////////////////////
    // 1. super init first
    this._super();

    /////////////////////////////
    // 2. add a menu item with "X" image, which is clicked to quit the program
    //    you may modify it.
    // ask the window size
    // var size = cc.winSize;

    // /////////////////////////////
    // // 3. add your codes below...
    // // add a label shows "Hello World"
    // // create and initialize a label
    // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
    // // position the label on the center of the screen
    // helloLabel.x = size.width / 2;
    // helloLabel.y = size.height / 2 + 200;
    // // add the label as a child to this layer
    // this.addChild(helloLabel, 5);

    // // add "HelloWorld" splash screen"
    // this.sprite = new cc.Sprite(res.HelloWorld_png);
    // this.sprite.attr({
    //     x: size.width / 2,
    //     y: size.height / 2
    // });
    // this.addChild(this.sprite, 0);

    // return true;
  },
  init : function() {
    this._super();
    // ask the window size
    var winsize = cc.director.getWinSize();
    // calculate the center point
    var centerpos = cc.p(winsize.width / 2, winsize.height / 2);
    // create a background image and set it's position at the center of the screen
    var spritebg = new cc.Sprite(res.helloBG_png);
    spritebg.setPosition(centerpos);
    this.addChild(spritebg);
    // set font size
    cc.MenuItemFont.setFontSize(60);
    // create a menu item and assign onPlay event callback to it
    var menuItemPlay = new cc.MenuItemSprite(
      new cc.Sprite(res.start_n_png), // normal state
      new cc.Sprite(res.start_s_png), // selected state
      this.onPlay, 
      this);
    // create menu
    var menu = new cc.Menu(menuItemPlay);
    menu.setPosition(centerpos);
    this.addChild(menu);
  },
  onPlay : function() {
    cc.log("==onplay clicked");
    cc.director.runScene(new PlayScene());
  }
});

var MenuScene = cc.Scene.extend({
  onEnter : function () {
    this._super();
    var layer = new MenuLayer();
    layer.init();
    this.addChild(layer);
  }
});

