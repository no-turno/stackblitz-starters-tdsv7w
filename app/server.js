import server from "../server/&.js";

server.onerror= (err) => {
    console.log(err)
}

server.on("request", c => {
    console.log(c);
})

export default server