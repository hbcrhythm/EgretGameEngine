/**
 * Created by yangsong on 2014/11/28.
 * 游戏场景
 */
class GameScene extends BaseScene{
    /**
     * 构造函数
     */
    public constructor(){
        super();
    }

    /**
     * 进入Scene调用
     */
    public onEnter():void{
        super.onEnter();

        this.addLayerAt(LayerManager.Game_Main, 0);

        this.addLayer(LayerManager.UI_Main);
        this.addLayer(LayerManager.UI_Popup);
        this.addLayer(LayerManager.UI_Message);
        this.addLayer(LayerManager.UI_Tips);

        App.ViewManager.open(ViewConst.Login);
        
            //添加一个纯色背景
            // var rect: eui.Rect = new eui.Rect();
            // rect.fillColor = 0x78b93f;
            // rect.percentHeight = 100;
            // rect.percentWidth = 100;
            // LayerManager.UI_Main.addChild(rect);

        // App.ViewManager.open(ViewConst.Game);
        // App.ViewManager.open(ViewConst.GameUI);


        // App.ViewManager.open(ViewConst.Home);

        // //播放背景音乐
        // App.SoundManager.playBg("sound_bg");
    }

    /**
     * 退出Scene调用
     */
    public onExit():void{
        super.onExit();
    }
}
