// Implement a stream with subscribe and push…

function stream() {
    this.subscribers = []
    this.subscribe = function(callback) {
        this.subscribers.push(callback)
    }
    this.push = function(item) {
        this.subscribers.forEach(function(callback) {
            callback(item)
        })
    }
}

// Code above

const x = new stream();
x.subscribe(console.log);
x.push(5);
x.push(1);
x.push(2);
 
// expected output on console:
// 5
// 1
// 2

const z = new stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
 
z.push(2);
 
// expected output on console:
// 2
// 4
// 6
