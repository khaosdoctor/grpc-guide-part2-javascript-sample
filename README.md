# O Guia completo do gRPC com JavaScript

> Acesse o conteúdo: https://blog.lsantos.dev/o-guia-do-grpc-2

## Instalação

1. Clone o repositório
2. `npm install`

Para iniciar o servidor execute `npm run start:server` e em um outro terminal execute `npm run start:client`.

- Para ver os arquivos compilados do protobuf, instale o [protoc](https://github.com/protocolbuffers/protobuf) e execute `npm run compile`.
- Para testar o gRPC web, instale o [plugin do grpc-web](https://github.com/grpc/grpc-web/releases) e o webpack, execute `npm run compile:web` e `npm run bundle`. Depois inicie um servidor HTTP de sua preferência (`php -S localhost:8080`) na pasta `web` e, em outro terminal, inicie o servidor gRPC com `npm run start:server`.
