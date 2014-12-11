/**
 * Created by Channing on 2014/12/6.
 * 震动
 */
class ShockUtils
{
    constructor()
    {
    }
    public MAP:number = 0;
    public SPRITE:number = 1;
    private mapPoss:Array<any> = [new egret.Point(0,3),new egret.Point(3,2),new egret.Point(-3,-2)];
    private spritePoss:Array<any> = [new egret.Point(5,0),new egret.Point(-5,0),new egret.Point(5,0)];
    private _shockPoss:Array<any>;
    private _shockLength:number = 0;
    private _shockCount:number = 0;
    public _target:egret.DisplayObject;
    private _rx:number = 0;
    private _ry:number = 0;
    private _type:number = 0;

    private _repeatCount:number = 0;

    public destroy():void
    {
        this.stop();
        this._target = null;
    }
    public shock(type:number = 0,target:egret.DisplayObject = null,repeatCount:number = 3):void
    {
        this._type = type;
        this._target = target;

        if(this._type == this.MAP)
        {
            this._shockPoss = this.mapPoss.concat();
            this._shockLength = this._shockPoss.length;
        }
        else if(this._type == this.SPRITE)
        {
            this._shockPoss = this.spritePoss.concat();
            this._shockLength = this._shockPoss.length;
        }

        this.start(repeatCount);
    }
    public start(num:number = 1):void
    {
        this.stop();
        this.repeatCount = num;
        this._shockCount = 0;
        if(this._target)
        {
            this._rx = this._target.x;
            this._ry = this._target.y;
            egret.Ticker.getInstance().register(this.onShockEnter,this);
        }
    }
    public stop():void
    {
        if(this._target)
        {
            this._target.x = this._rx;
            this._target.y = this._ry;
            egret.Ticker.getInstance().unregister(this.onShockEnter,this);
        }
    }
    private onShockEnter(e:Event):void
    {
        var maxCount:number = this._shockLength*this._repeatCount;
        if(this._shockCount >= maxCount)
        {
            this.stop();
            return ;
        }
        var index:number = this._shockCount%this._shockLength;
        var pos:egret.Point = this._shockPoss[index];
        if(this._target)
        {
            this._target.x = this._rx+pos.x;
            this._target.y = this._ry+pos.y;
        }
        this._shockCount++;
    }
    public get repeatCount():number
    {
        return this._repeatCount;
    }
    public set repeatCount(value:number)
    {
        this._repeatCount = value;
    }
}