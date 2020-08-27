const { Transform } = require('stream');


const transform = new Transform({
    transform(chunk, callback) {
        const data = chunk.toString();
        data.split(" ").map((word) => {
            this.push(word.charAt(0).toUpperCase() + word.slice(1));
        });
    }
});

process.stdin.pipe(transform).pipe(process.stdout);