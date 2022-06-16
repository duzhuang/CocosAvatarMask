/*
 * @Author: 1148299682@qq.com
 * @Date: 2022-06-16 17:17:06
 * @LastEditors: 1148299682@qq.com
 * @LastEditTime: 2022-06-16 19:27:56
 */
const { ccclass, property, executeInEditMode, menu } = cc._decorator;

@ccclass
@executeInEditMode
@menu("渲染组件plugin/获取图集中uv的位置")
/**
 * 获取图集中uv的位置
 * 挂载到sprite节点下，需要配合对应的material进行使用
 * 可以自定义shader进行使用（shader 需接收u_uvOffset  和 u_uvRotated ）
 * u_uvOffset 当前uv坐标相当于合图的具体坐标位置 vect4 类型的变量
 * u_uvRotated 当前的uv坐标是或进行了旋转  float 类型变量  1 代表旋转 0代表未旋转
 */
export default class slipUV extends cc.Component {

    @property({ tooltip: '是否是静态合图' })
    cleanUp: boolean = false;


    private sprite: cc.Sprite;
    private material: cc.MaterialVariant;

    start() {
        if (this.cleanUp) this._setUVLocal();
    }

    update() {
        if (this.cleanUp) return;
        this._setUVLocal();
    }

    /**获取图片在图集中的UV并将其设置到shader中 */
    private _setUVLocal() {
        this.sprite = this.node.getComponent(cc.Sprite);
        this.material = this.sprite.getMaterial(0); //获取材质 
        //this.sprite.spriteFrame._texture._textureHash = 9999;
        let frame = this.sprite.spriteFrame;
        // xMin
        let l = frame.uv[0];
        // yMin
        let t = frame.uv[5];

        // xMax
        let r = frame.uv[6];
        // yMax
        let b = frame.uv[3];
        // 纹理在合图中的四个边界 uv 坐标
        let u_uvOffset = new cc.Vec4(l, t, r, b);
        // 纹理是否旋转
        let u_uvRotated = frame.isRotated() ? 1.0 : 0.0;
        // 设置材质的属性
        this.material.setProperty("u_uvOffset", u_uvOffset);
        this.material.setProperty("u_uvRotated", u_uvRotated);
    }
}