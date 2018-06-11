# decare
js笛卡尔积算法

### 接收的数据
```
[
  [
    {"attr_id":1,"attr_name":"黄色"}
  ],
  [
    {"attr_id":2,"attr_name":"8G"},
    {"attr_id":3,"attr_name":"32G"}
  ],
  [
    {"attr_id":4,"attr_name":"收到"}
  ]
]
```

### 处理后的数据
```
[
  [
    {"attr_id":1,"attr_name":"黄色"},
    {"attr_id":1,"attr_name":"8G"},
    {"attr_id":4,"attr_name":"收到"},
  ],
  [
    {"attr_id":1,"attr_name":"黄色"},
    {"attr_id":3,"attr_name":"32G"},
    {"attr_id":4,"attr_name":"收到"},
  ]
]
```

### 使用场景
![效果图](https://github.com/melodyne/decare/blob/master/goods.gif?raw=true)

### 说明
这里只是核心算法代码，抛砖引玉
具体的还得看你项目业务逻辑进行调整

