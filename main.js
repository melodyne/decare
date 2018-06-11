/**
 * 笛卡尔集合
 */
function decare(attrData) {

    // 存放结果
    var result = [];
    var len = attrData.length;

    // 初始化
    $.each(attrData[0],function(k,v){
        result.push([v]);
    });

    // 开始对比
    for (var i=0;i<len-1;i++){

        // 保存临时数据
        var tmp = [];

        // 结果与下一个集合计算笛卡尔积
            $.each(result,function(k,v){
                $.each(attrData[i+1],function(kay,val){

                    var upper = [];// 上层匹配结果
                    $.each(v,function(kk,vv){
                        upper.push(vv);
                    });

                    upper.push(val);
                    tmp.push(upper);
                });
            });
        // 将笛卡尔积写入结果
        result = tmp;
    }
   // console.log(result);
    return result;
}
