class A {
    // public name1: string = 'fffff'
    readonly sex: string //readonly 定义在参数上，那就是创建并且初始化参数
    constructor(public name: string, sex: string) {
        // this.name1 = name
        this.sex = sex
    }
    update() {
        // this.sex = '男'
    }
}

console.log(A);
console.log(A.name)