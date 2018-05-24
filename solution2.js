// add a map api to the stream…

function stream() {
    this.subscribers = []

    this.subscribe = function(callback) {
        this.subscribers.push(callback)
    }
    this.push = function(item) {
        // console.log(this)
        this.subscribers.forEach(function(callback) {
            callback(item)
        })
    }
    this.map = function(transform) {
        const obj = new stream()
        // obj.transform = transform
        this.subscribe(function(item) { obj.push(transform(item)) })
        return obj
    }
}

// Code above

const a = new stream();
const b = a.map((value) => value * 2);
b.subscribe(console.log);
 
a.push(1);
a.push(2);
a.push(3);
 
// expected output on console:
// 2
// 4
// 6
