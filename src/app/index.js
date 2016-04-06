const name = 'User';

const sayHello = (user) => {
	console.log.apply(console,['Hello,',user]);
}

sayHello(name);