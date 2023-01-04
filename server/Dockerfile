# https://hub.docker.com/r/denoland/deno

FROM denoland/deno:1.29.1

WORKDIR /usr/src/server

COPY ./ ./

CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-read", "--watch", "basic-usage.ts"]
# CMD ["/bin/bash"]