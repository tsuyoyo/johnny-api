#!/bin/sh

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
DART_GEN_PLUGIN="pub run protoc_plugin"

PROTO_OUT_DIR="./proto_out"
TS_OUT_DIR="${PROTO_OUT_DIR}/ts"
DART_OUT_DIR="${PROTO_OUT_DIR}/dart"

PROTO_FILES=./proto/*

if [ -e ${TS_OUT_DIR} ]; then
    rm -rf ${TS_OUT_DIR}
fi

if [ -e ${DART_OUT_DIR} ]; then
    rm -rf ${DART_OUT_DIR}
fi

mkdir -p ${TS_OUT_DIR}
mkdir -p ${DART_OUT_DIR}

# Generate proto files for typescript
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${TS_OUT_DIR}" \
    --ts_out="${TS_OUT_DIR}" \
    ${PROTO_FILES}
mv ${TS_OUT_DIR}/proto/* ${TS_OUT_DIR}
rmdir ${TS_OUT_DIR}/proto

# copy proto files to typescript src directory
TS_SRC_DIR="./src/proto"
rm -rf ${TS_SRC_DIR}
mkdir ${TS_SRC_DIR}
cp ${TS_OUT_DIR}/* ${TS_SRC_DIR}


# Generate proto files for dart
# https://github.com/dart-lang/protobuf/tree/master/protoc_plugin
protoc --dart_out=${DART_OUT_DIR} \
    ${PROTO_FILES} \
    --plugin "${DART_GEN_PLUGIN}"
mv $DART_OUT_DIR/proto/* $DART_OUT_DIR
rmdir ${DART_OUT_DIR}/proto