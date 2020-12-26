#!/bin/sh

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

PROTO_OUT_DIR="./proto_out"
TS_OUT_DIR="${PROTO_OUT_DIR}/ts"
PROTOBUFJS_OUT_DIR="${PROTO_OUT_DIR}/pbjs"

PROTO_FILES=./proto/*

if [ -e ${TS_OUT_DIR} ]; then
    rm -rf ${TS_OUT_DIR}
fi

if [ -e ${PROTOBUFJS_OUT_DIR} ]; then
    rm -rf ${PROTOBUFJS_OUT_DIR}
fi

mkdir -p ${TS_OUT_DIR}
mkdir -p ${PROTOBUFJS_OUT_DIR}

# Generate proto files for typescript
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${TS_OUT_DIR}" \
    --ts_out="${TS_OUT_DIR}" \
    ${PROTO_FILES}
mv ${TS_OUT_DIR}/proto/* ${TS_OUT_DIR}
rmdir ${TS_OUT_DIR}/proto

# Generate protofile with protobufjs
# https://github.com/protobufjs/protobuf.js
pbjs --target static-module -p js --wrap commonjs --keep-case -o $PROTOBUFJS_OUT_DIR/compiled.js $PROTO_FILES
pbts -o $PROTOBUFJS_OUT_DIR/compiled.d.ts $PROTOBUFJS_OUT_DIR/compiled.js


# copy proto files to typescript src directory
TS_SRC_DIR="./src/proto"
rm -rf ${TS_SRC_DIR}
mkdir ${TS_SRC_DIR}
cp ${TS_OUT_DIR}/* ${TS_SRC_DIR}
cp ${PROTOBUFJS_OUT_DIR}/compiled.* ${TS_SRC_DIR}