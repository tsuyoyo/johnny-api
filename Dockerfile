FROM node:8.16.2-slim
ENV APP_ROOT /app/

WORKDIR $APP_ROOT

# package.jsonとpackage-lock.jsonを先にコピー。
# package*.jsonだけを先に個別コピーすることで、パッケージ変更時は`RUN npm install`が走るが
# それ以外のファイル変更時は同コマンドにはキャッシュ利用で飛ばされるため、ビルド時間を短縮できる。
COPY package*.json $APP_ROOT
RUN sh -c "apt-get update && apt-get install -y git"
RUN npm install

COPY johnny-app-dev-firebase-adminsdk-8q1im-6b2b072cc2.json /tmp/johnny/

COPY . $APP_ROOT
