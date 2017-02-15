/**
 * 血条类
 * Created by 670762853@qq.com on 17-2-14.
 */
class LifeBar extends egret.Sprite{
    private bg:egret.Bitmap;
    private bar:egret.Bitmap;

    public constructor(){
        super();
        this.bg     = App.DisplayUtils.createBitmap("lifeBarBg");
        this.bar    = App.DisplayUtils.createBitmap("lifeBar");
        this.addChild(this.bg);
        this.addChild(this.bar);
        this.bg.width = 115;
        this.bar.width = 115;
        this.bar.height = 20;
        this.bg.height = 20;
        this.cacheAsBitmap = true;
    }

    public setProgress(hp:number, life:number){
        var width = 0;
        if(hp > 0){
            width = 100 * (hp / life);
        }
        
        // var num:number =  life;
        // var per:number = num < 0 ? 0 : num;
        this.bar.width = width;
    }

    public reSet(){
        this.bar.width = 115;
    }
};