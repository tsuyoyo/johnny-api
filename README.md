# Johnny API

## How to start

### Configure env variables

1. Copy files noted in `.gitignore` (from private folder on cloud strage)
2. `$ source env_values`

### Start docker containers

- Each container should be launched on different terminals.

#### Up docker container for DB

- `$ bash ./scripts/startDbServer.sh`

#### Up docker container for API

- `$ bash ./scripts/startApiServer.sh`

### Release docker containers

- `$ bash ./scripts/releaseContainers.sh`
