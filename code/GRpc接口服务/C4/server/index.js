import grpc from "grpc"
import * as protoLoader from "@grpc/proto-loader"

const PROTO_PATH = __dirname + "/../schema/square_service.proto"

const HOST = "0.0.0.0"
const PORT = 5000

const PackageDefintion = protoLoader.loadSync(
    PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
)

const rpc_proto = grpc.loadPackageDefinition(PackageDefintion).squarerpc_service

const SquareService = {
    streamrangeSquare(call) {
        call.on("data", (message) => {
            console.log(`get ${message.message}`)
            call.write({
                message: message.message ** 2
            })
        })
        call.on("end", () => {
            console.log("stream end")
            call.end()
        })
    }
}

const server = new grpc.Server()

server.addService(rpc_proto.SquareService.service, SquareService)

function main() {
    server.bind(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure())
    console.log(`start @ ${HOST}:${PORT}`)
    server.start()
}

main()