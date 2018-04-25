// es6 模块化 export import

let a = 1;
let obj = {
	name:'xiaoyaqian'
}
let afn = () => {
	return a+1
}
export {
	a,
	obj,
	afn
}

//默认输出
export default{
	{a:1}
}