# CocosAvatarMask
Cocos Creator 使用shader实现圆形遮罩
### 使用方法
mask-avatar-textture2d-singleTexture 材质使用单张图片遮罩
mask-avatar-texture2d 使用于静态图集和动态图集的遮罩
mask-avatar-texture2d 需要配合 SplitUV 进行使用
SplitUV 针对动态图集和静态图集进行了不同的优化，静态图集只进行一次uv坐标的计算。动态图集需要每帧对uv的坐标进行计算
** 注意 **
目前遮罩会打断合批
