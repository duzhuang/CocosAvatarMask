/*
 * @Author: 1148299682@qq.com
 * @Date: 2022-06-16 19:09:15
 * @LastEditors: 1148299682@qq.com
 * @LastEditTime: 2022-06-16 19:41:16
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class main extends cc.Component {
    @property({ type: cc.Sprite, tooltip: '' })
    fistSprite: cc.Sprite = null;

    onload(){
        
    }

    start() {
        
    }
}
